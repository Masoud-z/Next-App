import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Masoud",
    },
    {
      id: 2,
      name: "Ali",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json({ id: 1, ...body }, { status: 201 });
}
