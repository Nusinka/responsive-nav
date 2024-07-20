import { HelpCircle, Home, TrendingUp } from "lucide-react";
import { INavItem } from "@/components/types.js";

export const navItems: INavItem[] = [
  { name: "Home", icon: <Home />, link: "#" },
  { name: "Signalen", icon: <TrendingUp />, link: "#" },
  { name: "Trend View", icon: <TrendingUp />, link: "#" },
  { name: "Deep dives", icon: <TrendingUp />, link: "#" },
  { name: "KPI Library", icon: <TrendingUp />, link: "#" },
  { name: "Dashboards", icon: <TrendingUp />, link: "#" },
  { name: "FAQ", icon: <HelpCircle />, link: "#" },
];

export const actionItems: INavItem[] = [
  { name: "Dark mode", icon: <Home />, link: "#" },
  { name: "Uitloggen", icon: <TrendingUp />, link: "#" },
];
