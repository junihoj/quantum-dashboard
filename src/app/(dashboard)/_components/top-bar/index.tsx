import React from "react";

import CustomAvatar from "@/components/globals/custom-avatar";
import MobileSideNav from "../mobile-side-nav";
import NotificationPopover from "@/components/popovers/notification-popover";

const TopBar = () => {
  return (
    <header className="w-full flex py-5 px-6 border-b border-system-grey-6 justify-end  max-[950px]:justify-between items-center">
      <MobileSideNav />
      <div className="flex gap-x-4 w-fit">
        {/* notification */}
        <NotificationPopover />

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
