import {
  CalendarIcon,
  ChatIcon,
  CreditCardIcon,
  GroupIcon,
  HomeIcon,
} from "@/public/assets/icons";
import classNames from "classnames";
import { useCallback } from "react";
import { MenuLinkType } from "./types";

export const menuLinks: MenuLinkType[] = [
  {
    title: "Overview",
    href: "/",
    icon: <HomeIcon width={16} height={17} />,
  },
  {
    title: "Patients",
    href: "/patients",
    icon: <GroupIcon width={24} height={17} />,
  },
  {
    title: "Schedule",
    href: "/schedule",
    icon: <CalendarIcon width={15} height={17} />,
  },
  {
    title: "Message",
    href: "/message",
    icon: <ChatIcon width={19} height={17} />,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <CreditCardIcon width={22} height={17} />,
  },
];

export function useNavigation() {
  const linkClass = useCallback((isActive: boolean) => {
    return classNames("flex items-center gap-2 py-2 px-4", {
      "bg-primary-main rounded-menu": isActive,
      "bg-white": !isActive,
    });
  }, []);

  return {
    linkClass,
  };
}
