import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qnbjfevuewavunubhtwa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuYmpmZXZ1ZXdhdnVudWJodHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzQwNDYsImV4cCI6MjA0ODIxMDA0Nn0.8V4UhaTavhXdkYYjwUcXisX8rkUyHJoquw5-Ek01KxA"
);

export default supabase;
