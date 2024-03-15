"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/utils/cn";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Auth">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/auth/login">login</HoveredLink>
            <HoveredLink href="/auth/register">register</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Other">

        </MenuItem>
      </Menu>
    </div>
  );
}