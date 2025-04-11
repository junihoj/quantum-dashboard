import { deleteAccount, updateAccount } from "@/lib/actions/account.actions";
import db from "@/lib/db";
import { accountSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validated = accountSchema.parse(body);

    const updated = await updateAccount({ id: params.id, data: validated });

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteAccount(params.id);

    return new Response(null, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
