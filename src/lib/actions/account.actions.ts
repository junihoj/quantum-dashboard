"use server";
import db from "@/lib/db";

// CREATE
export async function createAccount(data: any) {
  const account = await db.account.create({
    data,
  });

  return account;
}
// UPDATE
export async function updateAccount({ id, data }: { id: string; data: any }) {
  const updated = await db.account.update({
    where: { id },
    data,
  });

  return updated;
}
// DELETE
export async function deleteAccount(id: string) {
  await db.account.delete({
    where: { id },
  });
}
