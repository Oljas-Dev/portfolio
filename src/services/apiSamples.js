import supabase from "./supabase";

export async function getSamples() {
  const { data, error } = await supabase.from("development").select("*");

  if (error) {
    console.error(error);
    throw new Error("Sample works couldn't be loaded");
  }

  return data;
}

export async function getPictures() {
  const { data, error } = await supabase.from("development").select("high_res");

  if (error) {
    console.log(error);
    throw new Error("Could not get pictures in high resolution");
  }

  return data;
}
