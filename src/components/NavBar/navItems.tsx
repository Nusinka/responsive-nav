import { HelpCircle, Home, LogOut, Moon, TrendingUp } from "lucide-react";
import { INavItem } from "@/components/types.js";

export const navItems: INavItem[] = [
  { name: "Home", link: "#" },
  { name: "Signalen", link: "#" },
  { name: "Trend View", link: "#" },
  { name: "Week View", link: "#" },
  { name: "Perioade View", link: "#" },
  { name: "KPI Library", link: "#" },
  { name: "Dashboards", link: "#" },
  { name: "FAQ", link: "#" },
];

export const navItemsMobile: INavItem[] = [
  { name: "Home", icon: <Home />, link: "#" },
  { name: "Signalen", icon: <TrendingUp />, link: "#" },
  { name: "Trend View", icon: <TrendingUp />, link: "#" },
  { name: "Deep dives", icon: <TrendingUp />, link: "#" },
  { name: "KPI Library", icon: <TrendingUp />, link: "#" },
  { name: "Dashboards", icon: <TrendingUp />, link: "#" },
  { name: "FAQ", icon: <HelpCircle />, link: "#" },
];

export const actionItems: INavItem[] = [
  { name: "Dark mode", icon: <Moon />, link: "#" },
  { name: "Uitloggen", icon: <LogOut />, link: "#" },
];
