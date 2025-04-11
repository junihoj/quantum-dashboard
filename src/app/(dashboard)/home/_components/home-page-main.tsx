import React from "react";
import UserIcon from "@public/assets/icons/user.svg";
import { Button } from "@/components/ui/button";
import CreateAccountModal from "@/components/modals/create-account-modal";
const HomePageMain = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default HomePageMain;
