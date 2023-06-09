"use client";

import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { id: 1, label: "Introduction", link: "/introduction" },
  { id: 2, label: "Home", link: "/" },
  { id: 3, label: "Another page", link: "/another" },
];

const Sidebar = () => {
  const router = useRouter();
  const path=usePathname();

  const [activePage, setActivePage] = useState();

  const handlePageChange = (link) => {
    setActivePage(link);
    router.replace(link);
  };

  useEffect(()=>{
    setActivePage(path);
  },[])

  return (
    <div className="hidden md:w-30% lg:w-[20%] p-3 md:pl-8 lg:pl-16 md:flex flex-col gap-2">
      {menuItems.map((i) => (
        <button
          key={i.id}
          onClick={() => handlePageChange(i.link)}
          className={`w-full p-2 text-black/60 text-start font-medium rounded-lg ${
            activePage === i.link ? "text-blue-700 bg-blue-50" : "hover:bg-slate-100"
          }`}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
