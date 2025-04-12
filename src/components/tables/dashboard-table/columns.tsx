"use client";

import UserAvatarAndName from "@/components/globals/user-avatar-and-name";
import CreateAccountModal from "@/components/modals/create-account-modal";
import DeleteAccountModal from "@/components/modals/delete-account-modal";
import { getInitials } from "@/lib/utils";
import { TAccount } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format, isValid } from "date-fns";
import Link from "next/link";
export const columns: ColumnDef<TAccount, unknown>[] = [
  //   {
  //     accessorKey: "id",
  //     header: "ID",
  //   },
  {
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: "Account Holder",
    cell: (props) => {
      const originalRow = props.row.original;
      const url = originalRow.avatar;
      const name = originalRow.firstName + " " + originalRow.lastName;
      const fallback = getInitials(name);
      // const metaData: any = props.table.options.meta as any;
      return (
        <div className="cursor-pointer hover:underline">
          <UserAvatarAndName url={url} name={name} fallback={fallback} />
        </div>
      );
    },
  },
  {
    header: "Occupation",
    accessorKey: "occupation",
  },

  {
    accessorKey: "createdAt",
    header: "Created",
    cell: (props) => {
      const date = new Date(props.getValue() as any);
      const valid = isValid(date);
      return valid ? format(date, "MMM dd, yyyy") : "Invalid Date";
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: (props) => {
      const date = new Date(props.getValue() as any);
      const valid = isValid(date);
      return valid ? format(date, "MMM dd, yyyy") : "Invalid Date";
    },
  },
  {
    header: "Actions",
    cell: (props) => {
      const originalRow = props.row.original;
      const id = originalRow?.id;
      const name = `${originalRow?.firstName} ${originalRow?.lastName}`;
      return (
        <div className="flex gap-x-2">
          <CreateAccountModal
            data={originalRow}
            className="w-fit"
            buttonText="Edit"
          />
          <DeleteAccountModal id={id} name={name} />
        </div>
      );
    },
  },
];
