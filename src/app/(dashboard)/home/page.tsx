import React from "react";
import HomeHeader from "./_components/home-header";
import HomePageMain from "./_components/home-page-main";

type Props = {};

const DashboardHomePage = (props: Props) => {
  return (
    <div className="flex-1 h-full overflow-hidden">
      <HomeHeader />
      <div className="p-4 bg-system-background min-h-[50vh]  overflow-hidden ">
        <div className="bg-white w-full min-h-[20vh] pb-10 h-[60vh]">
          <h1 className="mx-10 py-6 bodyText-Bold text-black border-b border-system-grey-6">
            Dashboard
          </h1>

          <HomePageMain />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
