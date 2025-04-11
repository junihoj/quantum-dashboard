import React from "react";
import IconPathWrapper from "./icon-path-wrapper";
import { IconProps } from "@/types";

export const ProfileIcon = ({ strokeWidth = 1.5, ...rest }: IconProps) => {
  return (
    <IconPathWrapper {...rest} strokeWidth={strokeWidth}>
      <path d="M5.49998 7.70833C7.24888 7.70833 8.66665 6.29057 8.66665 4.54167C8.66665 2.79276 7.24888 1.375 5.49998 1.375C3.75108 1.375 2.33331 2.79276 2.33331 4.54167C2.33331 6.29057 3.75108 7.70833 5.49998 7.70833Z" />
      <path d="M0.75 15.625V14.0417C0.75 13.2018 1.08363 12.3964 1.6775 11.8025C2.27136 11.2086 3.07681 10.875 3.91667 10.875H7.08333C7.92319 10.875 8.72864 11.2086 9.3225 11.8025C9.91637 12.3964 10.25 13.2018 10.25 14.0417V15.625" />
    </IconPathWrapper>
  );
};
