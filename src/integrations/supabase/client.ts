
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hfotbomsivxugpfabsfm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb3Rib21zaXZ4dWdwZmFic2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMDcxODMsImV4cCI6MjA1Njg4MzE4M30.Ifq_1g3EZ5UNjW3HWLwInyf58T2k6snuWSKVfUQLdX8";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
