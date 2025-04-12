import React from "react";
import Link from "next/link";
import { dashboardSideNavMenu, helpAndSupportNavItems } from "@/constants";
import SideNavMenuItem from "./side-nav-menu-item";
import SupportNavItem from "./support-nav-item";
import Logo from "@public/assets/icons/logo.svg";

const SideNav = () => {
  return (
    <aside className="h-full overflow-y-auto px-4 pt-8 flex flex-col w-[16.5%] relative">
      <div>
        <Link href="/">
          <Logo />
        </Link>

        {/* top nav links */}
        <nav className="flex flex-col gap-1">
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

      <div className="flex flex-col gap-y-4">
        <h3 className="bodyText-semiBold">Help & Support</h3>
        <div>
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

      <div className="sticky bottom-0">
        <SideNavMenuItem icon="logout" label="Logout" />
      </div>
    </aside>
  );
};

export default SideNav;
