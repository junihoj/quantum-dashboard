import React from "react";
import { cn } from "@/lib/utils";
import { HomeIcon, ProfileIcon } from "@/components/icons";
import { Mail, Settings } from "lucide-react";
import LogooutIcon from "@public/assets/icons/logout.svg";
type Props = {
  icon: string;
  isActive: boolean;
};

const SideNavIcon = ({ icon, isActive }: Props) => {
  switch (icon) {
    case "home":
      return (
        <HomeIcon
          className={cn(
            "w-6 h-6 stroke-system-grey-3 group-hover/navItem:stroke-white",
            {
              "stroke-white": isActive,
            }
          )}
        />
      );
    case "profile":
      return (
        <ProfileIcon
          className={cn(
            "w-6 h-6 stroke-system-grey-3 hover:stroke-white group-hover/navItem:stroke-white",
            {
              "stroke-white": isActive,
            }
          )}
        />
      );
    case "settings":
      return (
        <Settings
          className={cn(
            "w-6 h-6 stroke-system-grey-3 group-hover/navItem:stroke-white",
            {
              "stroke-white": isActive,
            }
          )}
        />
      );

    case "faq":
      return <span>?</span>;

    case "contact":
      return <Mail className="w-5 h-4 strok-[1.5]" />;

    case "logout":
      return <LogooutIcon />;
  }

  return null;
};

export default SideNavIcon;
