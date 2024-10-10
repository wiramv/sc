"use client";

// library
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ava from "xxx/sc.svg";

// icons
import { LiaUserSolid } from "react-icons/lia";
import { LuLineChart } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IconType } from "react-icons";

type Menu = { icon: IconType; name: string; url: string };

export default function Avatar() {
  const [avatarOpen, setAvatarOpen] = useState<boolean>(false);
  const menus: Menu[] = [
    { icon: LiaUserSolid, name: "Profile", url: "/profile" },
    { icon: LuLineChart, name: "Search History", url: "/history" },
    { icon: MdOutlineAttachMoney, name: "Pricing", url: "https://socialcrab.id/pricing/" },
    { icon: FaRegQuestionCircle, name: "FAQ", url: "https://socialcrab.id/pricing/faq" },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference for the button

  // Close the avatar menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setAvatarOpen(false); // Close dropdown when clicked outside of both button and dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, buttonRef]);

  return (
    <div className="fixed right-20 top-8">
      <button
        ref={buttonRef} // Ref for the button
        onClick={() => setAvatarOpen(!avatarOpen)}
        className="relative"
      >
        <Image src={ava} alt="avatar" className="w-7" />
        <div className="h-3 w-3 bg-primarygreen rounded-xl top-5 right-0 absolute"></div>
      </button>
      {avatarOpen && (
        <div ref={dropdownRef} className="absolute -left-56 bg-darkpurple">
          <div className="flex flex-col">
            {menus.map((menu: Menu, index: number) => {
              const Icon = menu.icon;
              return (
                <Link
                  href={menu.url}
                  key={"ava" + index}
                  className="w-56 h-10 px-5 items-center hover:bg-borderpurple flex gap-3 justify-start"
                >
                  <Icon className="text-xl" />
                  {menu.name}
                </Link>
              );
            })}
            <div className="h-[1px] w-full bg-borderpurple"></div>
            <Link
              href={""}
              className="w-56 h-10 px-5 items-center hover:bg-borderpurple flex gap-3 justify-start"
            >
              <TbLogout className="text-xl" />
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

