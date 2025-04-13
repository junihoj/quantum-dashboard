import { NextResponse } from "next/server";

import { accountSchema } from "@/lib/validation";
import { createAccount, getAllAccounts } from "@/lib/actions/account.actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = accountSchema.parse(body);
    console.log("VALIDATED DATA", validated);
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

export async function GET() {
  try {
    const accounts = getAllAccounts();

    return NextResponse.json(
      { success: true, data: accounts },
      { status: 200 }
    );
  } catch (err) {}
}
