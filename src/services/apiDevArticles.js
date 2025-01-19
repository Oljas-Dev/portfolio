import supabase from "./supabase";

export async function getDevArticles() {
  const { data, error } = await supabase.from("dev-articles").select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load dev-articles");
  }

  return data;
}
