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
          <HomePageMain />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
