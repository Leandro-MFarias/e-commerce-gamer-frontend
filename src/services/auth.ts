import { LoginSchema } from "@/app/validators/loginSchema";
import { api } from "./api";

export async function signIn(data: LoginSchema) {
  const res = await fetch(`${api}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
  return res
}