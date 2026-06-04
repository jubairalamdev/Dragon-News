import { redirect } from "next/navigation";

const default_redirect_id = "01"

export default async function Home() {
  redirect(`/category/${default_redirect_id}`)
}
