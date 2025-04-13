import NotificationBellIcon from "@public/assets/icons/notification-bell.svg";
import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

const NotificationPoverItem = () => {
  return (
    <div className="flex p-3 gap-x-2">
      <Menu />
      <div>
        <p className="text-sm text-primary-black">A new Account was created</p>
        <p className="text-system-secondary text-xs">12 hours ago</p>
      </div>
    </div>
  );
};

const NotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <span className="relative rounded-[50%] border-system-grey-6 bg-system-grey-10 p-1 h-fit w-fit">
          <NotificationBellIcon />
          <span className="absolute -top-1 -right-2 bg-system-red-2 flex items-center justify-center text-xs w-4 h-4 text-white rounded-[50%]">
            2
          </span>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        {/* heading */}
        <div className="px-3 py-4 flex justify-between border-b border-black/10 items-center">
          <p className="text-black/100 font-semibold text-sm">Notifications</p>
          <Link
            href="/notification"
            className="text-golden-solid font-semibold text-sm cursor-pointer"
          >
            View all
          </Link>
        </div>
        <div>
          {Array(5)
            .fill(0)
            .map((item, idx) => (
              <NotificationPoverItem key={idx} />
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
