"use client";
import React from "react";
import SideNavIcon from "./side-nav-icon";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  label: string;
  icon: string;
  path?: string;
  onClick?: () => void;
  setOpen?: (val: boolean) => void;
  className?: string;
};

const SideNavMenuItem = ({
  icon,
  label,
  path,
  onClick,
  className,
  setOpen,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname == path;

  return (
    <div
      className={cn(
        "flex rounded-xl items-center hover:bg-system-primary p-4 gap-x-1.5 cursor-pointer group/navItem",
        "bodyText-regular hover:text-white",
        {
          "bg-system-primary text-white": isActive,
        },
        className
      )}
      onClick={() => {
        if (onClick) {
          onClick();
          return;
        }
        if (path) {
          router.push(path);
          if (setOpen) setOpen(false);
        }
      }}
    >
      <SideNavIcon icon={icon} isActive={isActive} />
      <p className={cn(" ")}>{label}</p>
    </div>
  );
};

export default SideNavMenuItem;
