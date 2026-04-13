import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import LaboratoryInventory from "./pages/LaboratoryInventory";

export default function App() {
  return (
    <ThemeProvider>
      <LaboratoryInventory />
    </ThemeProvider>
  );
}