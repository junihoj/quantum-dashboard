import React from "react";

const HomeHeader = () => {
  return (
    <header className="p-8 flex flex-col gap-y-2">
      <h1 className="text-[1.375rem] font-bold tracking-normal leading-[100%]">
        Hi Nike
      </h1>
      <p className="bodyText-regular">
        Good morning, here is all the accounts added to date
      </p>
    </header>
  );
};

export default HomeHeader;
