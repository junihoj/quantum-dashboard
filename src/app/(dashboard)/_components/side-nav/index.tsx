import React from "react";
import Link from "next/link";
import { dashboardSideNavMenu, helpAndSupportNavItems } from "@/constants";
import SideNavMenuItem from "./side-nav-menu-item";
import SupportNavItem from "./support-nav-item";
import Logo from "@public/assets/icons/logo.svg";

const SideNav = () => {
  return (
    <aside className="max-[950px]:hidden h-full overflow-hidden px-4 pt-8 flex flex-col w-[16.5%] relative">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col gap-y-32 flex-1 overflow-y-auto pt-12">
        <div className="flex flex-col">
          {/* top nav links */}
          <nav className="flex flex-col gap-2">
            {dashboardSideNavMenu.map((menuItem, index) => (
              <SideNavMenuItem
                icon={menuItem.icon}
                label={menuItem.label}
                path={menuItem.path}
                key={index}
              />
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h3 className="bodyText-semiBold">Help & Support</h3>
            <div className="flex flex-col gap-y-2">
              {helpAndSupportNavItems.map((item, idx) => (
                <SupportNavItem
                  label={item.label}
                  path={item.path}
                  key={idx}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
          <div className="">
            <SideNavMenuItem
              icon="logout"
              label="Logout"
              className="text-system-red-1 hover:text-system-red-1/80 hover:bg-transparent text-base"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
