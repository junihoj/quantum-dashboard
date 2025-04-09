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
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
