"use client";
// media
import logo from "xxx/social-crab-logo.svg"

// libraries
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// icons
import { VscHome } from "react-icons/vsc";
import { HiOutlineUser } from "react-icons/hi2";
import { LuLineChart } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Menus() {
  const [menuToggle, setMenuToggle] = useState<number>(0);
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
    switch (pathName) {
      case "/profile":
        setMenuToggle(1);
        break;
      case "/history":
        setMenuToggle(2);
        break;
      case "/search/instagram/profile":
        setMenuToggle(3);
        break;
      case "/search/instagram/hashtag":
        setMenuToggle(4);
        break;
      case "/search/tiktok/profile":
        setMenuToggle(5);
        break;
      case "/search/tiktok/hashtag":
        setMenuToggle(6);
        break;
      default:
        setMenuToggle(0);
        break;
    }
  }, [pathName]); // Added slug as a dependency

  return (
    <div className="h-full w-64 pl-5">
        <div className="flex gap-3 my-5 items-center">
            <Link href="/" className="h-fit"><Image src={logo} alt="logo"/></Link>
            <svg className="w-6" fill="none" viewBox="0 0 22 22" ><path fill="rgba(234, 234, 255, 0.6)" d="M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"></path><path fill="rgba(234, 234, 255, 0.38)" d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z"></path></svg>
        </div>
      <Link
        href="/"
        onClick={() => setMenuToggle(0)}
        className={`main-menu ${menuToggle === 0 ? "active" : ""}`}
      >
        <VscHome className="font-semibold text-xl" />
        <div>Home</div>
      </Link>
      <div>
        <div className="main-menu-text">DASHBOARD</div>
        <Link
          href="/profile"
          onClick={() => setMenuToggle(1)}
          className={`main-menu ${menuToggle === 1 ? "active" : ""}`}
        >
          <HiOutlineUser className="font-semibold text-xl" />
          <div>My Profile</div>
        </Link>
        <Link
          href="/history"
          onClick={() => setMenuToggle(2)}
          className={`main-menu ${menuToggle === 2 ? "active" : ""}`}
        >
          <LuLineChart className="font-semibold text-xl" />
          <div>Search History</div>
        </Link>
      </div>
      <div>
        <div className="main-menu-text uppercase">Analytics Tools</div>
        <Link
          href="/search/instagram/profile"
          onClick={() => setMenuToggle(4)}
          className={`main-menu ${menuToggle === 3 ? "active" : ""}`}
        >
          <FaInstagram className="font-semibold text-xl" />
          <div>Instagram Profile</div>
        </Link>
        <Link
          href="/search/instagram/hashtag"
          onClick={() => setMenuToggle(4)}
          className={`main-menu ${menuToggle === 4 ? "active" : ""}`}
        >
          <FaInstagram className="font-semibold text-xl" />
          <div>Instagram Hashtag</div>
        </Link>
        <Link
          href="/search/tiktok/profile"
          onClick={() => setMenuToggle(5)}
          className={`main-menu ${menuToggle === 5 ? "active" : ""}`}
        >
          <FaTiktok className="font-semibold text-xl" />
          <div>Tiktok Profile</div>
        </Link>
        <Link
          href="/search/tiktok/hashtag"
          onClick={() => setMenuToggle(6)}
          className={`main-menu ${menuToggle === 6 ? "active" : ""}`}
        >
          <FaTiktok className="font-semibold text-xl" />
          <div>Tiktok Hashtag</div>
        </Link>
      </div>
    </div>
  );
}
