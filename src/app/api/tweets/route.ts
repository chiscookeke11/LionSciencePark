import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://api.x.com/2/users/1705233763104358400/tweets";
  const bearerToken = process.env.X_BEARER_TOKEN;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  const data = await res.json();
  console.log("Fetched from X API:", data); // 👈 check your terminal

  return NextResponse.json(data);
}
