import { createClient } from '@supabase/supabase-js';
const URL = "https://ytobukiyszoxfihxaoad.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0b2J1a2l5c3pveGZpaHhhb2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2OTQ0NzUsImV4cCI6MjA2MDI3MDQ3NX0.NBq1UR3i00ycTrMZeNUlwmDrO8SkpG326Sj9zdj4GTM";

export const supabase = createClient(URL, API_KEY);