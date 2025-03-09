
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormRequest {
  nome: string;
  email: string;
  mensagem: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, mensagem }: ContactFormRequest = await req.json();
    
    // Validate input
    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save contact form submission to database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ nome, email, mensagem });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erro ao salvar mensagem" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Initialize Resend with the API key
    const resend = new Resend("re_CtFf1kBi_A1FaXJcdZLm5jByvC6tQ48Yx");

    // Send email to company - Updated with the new email address
    const companyEmailResponse = await resend.emails.send({
      from: "500BITY <onboarding@resend.dev>",
      to: "500bity.chat@gmail.com", // Updated email address
      subject: `Novo contato de ${nome}`,
      html: `
        <h1>Novo contato recebido</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "500BITY <onboarding@resend.dev>",
      to: email,
      subject: "Recebemos sua mensagem! - 500BITY",
      html: `
        <h1>Obrigado por entrar em contato, ${nome}!</h1>
        <p>Recebemos sua mensagem e entraremos em contato o mais breve possível.</p>
        <p>Detalhes da sua mensagem:</p>
        <p><em>${mensagem}</em></p>
        <p>Atenciosamente,<br>Equipe 500BITY</p>
      `,
    });

    console.log("Email responses:", { companyEmailResponse, customerEmailResponse });

    return new Response(
      JSON.stringify({ success: true, message: "Mensagem enviada com sucesso" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
