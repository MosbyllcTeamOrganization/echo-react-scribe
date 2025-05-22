
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-border py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MiniBlog</Link>
        
        <div className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/"
                  className={cn(
                    "nav-link", 
                    isActive("/") && "nav-link-active"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link">Posts</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <Link to="/posts" className="block py-2 hover:underline">
                        All Posts
                      </Link>
                    </li>
                    <li>
                      <Link to="/tags" className="block py-2 hover:underline">
                        Tags
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/about"
                  className={cn(
                    "nav-link", 
                    isActive("/about") && "nav-link-active"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/search" className="nav-link">
                  <Search className="h-5 w-5" />
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
