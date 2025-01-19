import supabase from "./supabase";

export async function getState() {
  const { data, error } = await supabase.from("states").select("*");

  if (error) {
    console.log(error);
    throw new Error("States could not be fetched");
  }

  return data;
}

export async function updateState(newState) {
  const { data, error } = await supabase
    .from("states")
    .update(newState)
    .eq("id", 12)
    .select();

  if (error) {
    console.log(error);
    throw new Error("States could not be updated");
  }

  return data;
}
