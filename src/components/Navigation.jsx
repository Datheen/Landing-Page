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
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M280-120q-83 0-141.5-58.5T80-320q0-73 45.5-127.5T240-516v83q-35 12-57.5 43T160-320q0 50 35 85t85 35q50 0 85-35t35-85v-40h235q8-9 19.5-14.5T680-380q25 0 42.5 17.5T740-320q0 25-17.5 42.5T680-260q-14 0-25.5-5.5T635-280H476q-14 69-68.5 114.5T280-120Zm400 0q-56 0-101.5-27.5T507-220h107q14 10 31 15t35 5q50 0 85-35t35-85q0-50-35-85t-85-35q-20 0-37 5.5T611-418L489-621q-21-4-35-20t-14-39q0-25 17.5-42.5T500-740q25 0 42.5 17.5T560-680v8.5q0 3.5-2 8.5l87 146q8-2 17-2.5t18-.5q83 0 141.5 58.5T880-320q0 83-58.5 141.5T680-120ZM280-260q-25 0-42.5-17.5T220-320q0-22 14-38t34-21l94-156q-29-27-45.5-64.5T300-680q0-83 58.5-141.5T500-880q83 0 141.5 58.5T700-680h-80q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 43 26 75.5t66 41.5L337-338q2 5 2.5 9t.5 9q0 25-17.5 42.5T280-260Z"/></svg>
            </div>
            <span className="font-heading font-bold text-primary/80 text-xl hidden sm:block">
              Ckristian Felipe
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
