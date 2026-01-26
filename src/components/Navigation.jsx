import { Link, useLocation } from "react-router-dom";
import { Leaf, Search, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-card/60 backdrop-blur-lg rounded-full shadow-soft border border-border/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-full p-2 group-hover:scale-110 transition-transform">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
              Greenleaf
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                Início
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                Sobre
              </Button>
            </Link>

            <div className="flex items-center gap-2 ml-2 border-l border-border/50 pl-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-3 pt-3 border-t border-border/50 animate-slide-up">
            <Input
              type="search"
              placeholder="Search plants, tips, and more..."
              className="rounded-full bg-muted/50"
            />
          </div>
        )}
      </div>
    </nav>
  );
};
