import * as React from "react";

import Navbar from "./partials/navbar";

import { IComponent } from "@/types/common";

export interface IHeaderProps extends IComponent {}

export default function Header({}: IHeaderProps) {
  return <Navbar />;
}
