import { LoginSchema } from "@/app/validators/loginSchema";
import { api } from "./api";
import { RegisterSchema } from "@/app/validators/registerSchema";

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

export async function createAccount(data: RegisterSchema) {
  const res = await fetch(`${api}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })

  return res
}