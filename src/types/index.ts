// import React from "react";

import { AxiosRequestConfig, Method } from "axios";

export type TApiServiceConfig = {
  url: string;
  method?: Method;
  data?: any;
  // headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  headers?: AxiosRequestConfig["headers"];
  otherConfig?: AxiosRequestConfig;
};
export type TApiService = (config: TApiServiceConfig) => Promise<any>;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  absoluteStrokeWidth?: any;
  size?: number;
};

export type CreateAccountInput = {
  firstName: string;
  lastName: string;
  occupation: string;
};

export type TOccupation =
  | "ENGINEER"
  | "DESIGNER"
  | "DOCTOR"
  | "TEACHER"
  | "OTHER";
