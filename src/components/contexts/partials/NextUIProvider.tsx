import * as React from "react";
import { NextUIProvider as NextUI } from "@nextui-org/system";
import { useRouter } from "next/navigation";

import { IComponent } from "@/types/common";

export interface INextUIProviderProps extends IComponent {}

export default function NextUIProvider({ children }: INextUIProviderProps) {
  const router = useRouter();

  return <NextUI navigate={router.push}>{children}</NextUI>;
}
