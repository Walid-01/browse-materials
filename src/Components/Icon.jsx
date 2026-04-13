import React from "react";
import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  Boxes,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";

export const Icon = {
  dashboard: (props) => <LayoutDashboard size={15} {...props} />,
  projects: (props) => <FolderKanban size={15} {...props} />,
  requests: (props) => <ClipboardList size={15} {...props} />,
  browse: (props) => <Boxes size={15} {...props} />,
  search: (props) => <Search size={15} {...props} />,
  filter: (props) => <SlidersHorizontal size={15} {...props} />,
  chevronLeft: (props) => <ChevronLeft size={15} {...props} />,
  chevronRight: (props) => <ChevronRight size={15} {...props} />,
  moon: (props) => <Moon size={15} {...props} />,
  sun: (props) => <Sun size={15} {...props} />,
  logout: (props) => <LogOut size={15} {...props} />,
};