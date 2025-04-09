import React from "react";
import NotificationIcon from "@public/assets/icons/notification-bell.svg";
import CustomAvatar from "@/components/globals/custom-avatar";

const TopBar = () => {
  return (
    <header className="w-full flex py-5 px-6 border-b border-system-grey-6 justify-end items-center">
      <div className="flex gap-x-4 justify-self-end w-fit">
        {/* notification */}
        <span className="rounded-[50%] border-system-grey-6 bg-system-grey-10 p-1 h-fit w-fit">
          <NotificationIcon />
        </span>

        {/* avatar and name */}
        <div className="flex items-center gap-x-2">
          <CustomAvatar url="/" fallback={"NA"} />
          <span className="bodyText-regular text-system-grey-1">
            Nike Adesanoye
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
