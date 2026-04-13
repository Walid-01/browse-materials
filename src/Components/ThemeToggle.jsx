import { useTheme } from "../Context/ThemeContext";
import { Icon } from "./Icon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="li-theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? <Icon.sun /> : <Icon.moon />}
    </button>
  );
}