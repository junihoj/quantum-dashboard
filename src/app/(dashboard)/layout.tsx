import React from "react";
import SideNav from "./_components/side-nav";
import TopBar from "./_components/top-bar";

type Props = React.PropsWithChildren & {};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-dvh overflow-hidden w-dvw">
      {/* left (sidenav)*/}
      <SideNav />

      {/* right (topnav and children*/}
      <div className="flex flex-col flex-1 w-full">
        <TopBar />
        <main className="flex-1 w-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
