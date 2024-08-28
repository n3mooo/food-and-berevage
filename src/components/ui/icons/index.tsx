import * as React from "react";
import { SVGProps } from "react";

import {
  Logo,
  DiscordIcon,
  TwitterIcon,
  GithubIcon,
  MoonFilledIcon,
  SunFilledIcon,
  HeartFilledIcon,
  SearchIcon,
  NextUILogo,
} from "./icons";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const icons = {
  logo: Logo,
  discord: DiscordIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  moon: MoonFilledIcon,
  sun: SunFilledIcon,
  heartFilled: HeartFilledIcon,
  search: SearchIcon,
  nextUI: NextUILogo,
};

const Icon: React.FC<IconSvgProps & { icon: keyof typeof icons }> = ({
  icon,
  ...props
}) => {
  if (!icon) return null;
  const Component = icons[icon];

  return <Component {...props} />;
};

export default Icon;
