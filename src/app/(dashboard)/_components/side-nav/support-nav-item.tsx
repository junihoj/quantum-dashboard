"use client";
import React from "react";
import SideNavIcon from "./side-nav-icon";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  label: string;
  icon: string;
  path: string;
};

const SupportNavItem = ({ icon, label, path }: Props) => {
  const pathname = usePathname();
  const isActive = pathname == path;

  return (
    <Link
      href={path}
      className={cn(
        "flex rounded-xl items-center hover:bg-system-primary p-4 gap-x-1.5 cursor-pointer group/navItem",
        "bodyText-regular hover:text-white",
        {
          "bg-system-primary text-white": isActive,
        }
      )}
      //   onClick={() => {

      //   }}
    >
      <SideNavIcon icon={icon} isActive={isActive} />
      <p className={cn(" ")}>{label}</p>
    </Link>
  );
};

export default SupportNavItem;
