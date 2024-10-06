import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({}); // State for tracking open submenus
  

  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    {
      name: "user",
      link: "/",
      icon: AiOutlineUser,
      submenu: [
        { name: "Profile", link: "/profile" },
        { name: "Settings", link: "/settings" },
      ],
    },
    { name: "messages", link: "/", icon: FiMessageSquare },
    {
      name: "analytics",
      link: "/",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    {
      name: "Saved",
      link: "/",
      icon: AiOutlineHeart,
      margin: true,
    },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const toggleSubmenu = (menuName) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`} // Fixed sidebar
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center py-4">
          <img
            src={Logo}
            alt="Company Logo"
            className={`${
              open ? "w-30" : "w-24"
            } transition-width duration-500`} // Adjust size based on sidebar open state
          />
        </div>

        {/* Menu Toggle */}
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Menu Items */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div key={i}>
              <Link
                to={menu.link}
                key={i}
                className={`${
                  menu.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                onClick={menu.submenu ? (e) => { e.preventDefault(); toggleSubmenu(menu.name); } : null}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>

              {/* Submenu */}
              {menu.submenu && submenuOpen[menu.name] && (
                <div className="ml-8 flex flex-col space-y-2">
                  {menu.submenu.map((subItem, subIndex) => (
                    <Link
                      to={subItem.link}
                      key={subIndex}
                      className="flex items-center text-sm text-gray-300 hover:bg-gray-800 rounded-md p-2"
                    >
                      <div className="pl-2">{subItem.name}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
