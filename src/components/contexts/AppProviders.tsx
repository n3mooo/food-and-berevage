"use client";

import * as React from "react";

import NextUIProvider from "./partials/NextUIProvider";
import ThemePropvider from "./partials/ThemeProvider";

export interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <NextUIProvider>
      <ThemePropvider>{children}</ThemePropvider>
    </NextUIProvider>
  );
}
