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
export async function getProjectBySlugName(slug) {
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("slug_name", slug);
  if (error) {
    console.log(error);
  }
  return data;
}
export async function getUpdate() {
  const { data, error } = await supabase.from("my_update").select("*");

  return data;
}
