"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { dashboardSideNavMenu, helpAndSupportNavItems } from "@/constants";
import Logo from "@public/assets/icons/logo.svg";
import { Menu } from "lucide-react";
import Link from "next/link";
import SideNavMenuItem from "../side-nav/side-nav-menu-item";
import SupportNavItem from "../side-nav/support-nav-item";
import { useState } from "react";

const MobileSideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        asChild
        className="min-[950px]:hidden justify-self-start "
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <Button variant="transparent" className="w-fit">
          <Menu className="stroke-system-grey-1 w-20 h-20" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-10 pt-16 h-full max-h-dvh min-h-dvh justify-between max-[390px]:p-5">
        <div className="flex flex-col gap-y-12">
          <Link href="/">
            <Logo />
          </Link>

          {/* top nav links */}
          <nav className="flex flex-col gap-2">
            {dashboardSideNavMenu.map((menuItem, index) => (
              <SideNavMenuItem
                icon={menuItem.icon}
                label={menuItem.label}
                path={menuItem.path}
                key={index}
                setOpen={setOpen}
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
                  setOpen={setOpen}
                />
              ))}
            </div>
          </div>
          <div className="sticky bottom-0">
            <SideNavMenuItem
              icon="logout"
              label="Logout"
              className="text-system-red-1 hover:text-system-red-1/80 hover:bg-transparent text-base"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSideNav;
