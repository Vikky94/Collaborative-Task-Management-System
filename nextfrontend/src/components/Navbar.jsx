"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
    const data = [
        {
            title:"Register",
            href:"/register"
        },
        {
            title:"Login",
            href:"/login"
        }
    ]
  return (
    <header className="header-section">
    <NavigationMenu>
      <NavigationMenuList>
        {
            data.map((ele,i) => {
                return (
                    <NavigationMenuItem key={i}>
                    <Link href={ele.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {ele.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
            })
        }
      </NavigationMenuList>
    </NavigationMenu>
    </header>
  )
}
