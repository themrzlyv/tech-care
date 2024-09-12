"use client";
import React from "react";
import Link from "next/link";
import { MoreIcon, SettingsIcon, TestLogo } from "@/public/assets/icons";
import { usePathname } from "next/navigation";
import { Typography } from "@/ui";
import Image from "next/image";
import SeniorWoman from "@/public/assets/images/senior-woman-doctor.png";
import { menuLinks, useNavigation } from "./use-navigation";

export function Navigation() {
  const pathname = usePathname();

  const { linkClass } = useNavigation();

  return (
    <div className="col-span-12 mb-8">
      <nav className="flex justify-between bg-white px-8 py-3 mt-4.5 rounded-max items-center mx-4.5">
        <div>
          <TestLogo width={211} height={48} />
        </div>
        <div>
          <ul className="flex items-center gap-10">
            {menuLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.title}>
                  <Link href={link.href} className={linkClass(isActive)}>
                    {link.icon}
                    <Typography variant="menu-title">{link.title}</Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-row items-center gap-2 border-r border-gray-light pr-5">
            <Image src={SeniorWoman} alt="senior woman doctor" loading="lazy" />
            <div className="flex flex-col">
              <Typography variant="menu-title">Dr. Jose Simmons</Typography>
              <Typography variant="secondary">General Practitioner</Typography>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SettingsIcon width={19} height={20} />
            <MoreIcon width={4} height={18} />
          </div>
        </div>
      </nav>
    </div>
  );
}
