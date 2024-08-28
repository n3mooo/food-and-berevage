import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { IComponent } from "@/types/common";

export interface IThemePropviderProps extends IComponent {
  themeProps?: ThemeProviderProps;
}

export default function ThemePropvider({ children }: IThemePropviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}
