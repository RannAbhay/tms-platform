"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "dashboard" },
    { href: "/tasks", label: "tasks" },
    { href: "/assign-tasks", label: "assign tasks" },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          <Button
            variant="link"
            size="sm"
            type="button"
            className={`capitalize hover:text-accent-hover cursor-pointer ${
                pathname === href && "underline underline-offset-4"
              }`}
              
          >
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
