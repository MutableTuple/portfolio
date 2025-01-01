import { supabase } from "./supabase";
export async function getAllProjects() {
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .order("date_created", { ascending: false });
  if (error) {
    console.log(error);
  }
  return data;
}
