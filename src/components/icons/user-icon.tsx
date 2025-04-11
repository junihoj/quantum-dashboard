import React from "react";
import IconPathWrapper from "./icon-path-wrapper";
import { IconProps } from "@/types";

export const UserIcon = ({ strokeWidth = 5, ...rest }: IconProps) => {
  return (
    <IconPathWrapper {...rest} strokeWidth={strokeWidth}>
      <path
        d="M24.5 42.875C34.6482 42.875 42.875 34.6482 42.875 24.5C42.875 14.3518 34.6482 6.125 24.5 6.125C14.3518 6.125 6.125 14.3518 6.125 24.5C6.125 34.6482 14.3518 42.875 24.5 42.875Z"
        stroke="#19A752"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 26.5417C27.8827 26.5417 30.625 23.7995 30.625 20.4167C30.625 17.034 27.8827 14.2917 24.5 14.2917C21.1173 14.2917 18.375 17.034 18.375 20.4167C18.375 23.7995 21.1173 26.5417 24.5 26.5417Z"
        stroke="#19A752"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.593 38.4835C13.0983 36.8016 14.1324 35.3274 15.5417 34.2796C16.951 33.2318 18.6605 32.6662 20.4167 32.6667H28.5834C30.3418 32.6661 32.0534 33.2331 33.4637 34.2833C34.8741 35.3335 35.9078 36.8109 36.4111 38.4957"
        stroke="#19A752"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconPathWrapper>
  );
};
