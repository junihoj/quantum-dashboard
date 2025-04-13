"use client";
import React from "react";
import UserIcon from "@public/assets/icons/user.svg";
import { Button } from "@/components/ui/button";
import CreateAccountModal from "@/components/modals/create-account-modal";
import { useQuery } from "@tanstack/react-query";
import { getAllAccounts } from "@/lib/actions/account.actions";
import Loader from "@/components/globals/loader";
import DashboardTable from "@/components/tables/dashboard-table";
import { columns } from "@/components/tables/dashboard-table/columns";
import { TAccount } from "@/types";
const HomePageMain = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await getAllAccounts();
      return res as unknown as TAccount[];
      // return [];
    },
  });
  return (
    <div className="h-full overflow-auto">
      <div className="flex justify-between px-10 border-b border-system-grey-6 py-6 items-center">
        <h1 className=" bodyText-Bold text-black ">Dashboard</h1>
        {data && data?.length && <CreateAccountModal />}
      </div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center flex-1 h-[20vh]">
            <Loader />
          </div>
        ) : data && data?.length > 0 ? (
          <div className="px-10 mt-5">
            <DashboardTable columns={columns} data={data} />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center pt-12">
            <div className="bg-system-green-5 w-fit h-fit flex justify-center items-center rounded-[50%] p-5">
              <UserIcon />
            </div>
            {/* text and button */}
            <div className="flex flex-col gap-y-2 text-center w-[36.2%]">
              <h2 className="bodyText-Bold text-system-grey-1">
                No account holder added
              </h2>
              <div className="flex flex-col gap-y-7">
                <p className="bodyText-regular text-system-grey-3">
                  {`You’re yet to add an account holder. Adding an account would give
                you access to adding various valuable assets for each holder`}
                </p>
                <CreateAccountModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageMain;
