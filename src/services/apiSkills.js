import supabase from "./supabase";

export async function getSkills() {
  const { data, error } = await supabase.from("skills").select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load skills");
  }

  return data;
}
