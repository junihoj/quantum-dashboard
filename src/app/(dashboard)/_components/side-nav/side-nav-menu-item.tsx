"use client";
import React from "react";
import SideNavIcon from "./side-nav-icon";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  label: string;
  icon: string;
  path: string;
};

const SideNavMenuItem = ({ icon, label, path }: Props) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const router = useRouter();
  const isActive = pathname == path;

  return (
    <div
      className={cn(
        "flex rounded-xl items-center hover:bg-system-primary p-3 gap-x-1.5 cursor-pointer group/navItem",
        "bodyText-regular hover:text-white",
        {
          "bg-system-primary text-white": isActive,
        }
      )}
      onClick={() => {
        router.push(path);
      }}
    >
      <SideNavIcon icon={icon} isActive={isActive} />
      <p className={cn(" ")}>{label}</p>
    </div>
  );
};

export default SideNavMenuItem;
