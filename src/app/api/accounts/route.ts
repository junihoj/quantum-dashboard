import { NextResponse } from "next/server";
import db from "@/lib/db";
import { accountSchema } from "@/lib/validation";
import { createAccount } from "@/lib/actions/account.actions";

export async function POST(req: Request) {
  try {
    console.log("here", "create account");
    const body = await req.json();
    const validated = accountSchema.parse(body);

    // const account = await db.account.create({
    //   data: validated,
    // });

    const account = await createAccount(validated);

    return NextResponse.json({ success: true, data: account }, { status: 201 });
  } catch (error: any) {
    console.log("ERROR CREATING DATA", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create account" },
      { status: 400 }
    );
  }
}
