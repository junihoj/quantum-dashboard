"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import SideNavIcon from "./side-nav-icon";

type Props = {
  label: string;
  icon: string;
  path: string;
  setOpen?: (val: boolean) => void;
  className?: string;
};

const SupportNavItem = ({ icon, label, path, setOpen, className }: Props) => {
  const pathname = usePathname();
  const isActive = pathname == path;
  const router = useRouter();
  return (
    <div
      // href={path}
      className={cn(
        "flex rounded-xl items-center hover:bg-system-primary p-4 gap-x-1.5 cursor-pointer group/navItem",
        "bodyText-regular hover:text-white",
        {
          "bg-system-primary text-white": isActive,
        },
        className
      )}
      onClick={() => {
        if (path) {
          router.push(path);
          if (setOpen) setOpen(false);
        }
      }}
    >
      <SideNavIcon icon={icon} isActive={isActive} />
      <p
        className={cn(
          "bodyText-regular text-base max-[1000px]:text-sm text-system-grey-3 group-hover/navItem:text-white ",
          {
            "text-white": isActive,
          }
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default SupportNavItem;
