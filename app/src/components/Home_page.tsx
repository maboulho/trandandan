import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Outlet } from "react-router-dom";

const user = {
  name: "Whitney Francis",
  email: "whitneyfrancis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];
const sidebarNavigation = [
  { name: "Open", href: "#", icon: BsChatText, current: true },
  {
    name: "Archive",
    href: "Bot",
    icon: FaTableTennisPaddleBall,
    current: true,
  },
  { name: "Flagged", href: "#", icon: FaUserFriends, current: true },
  {
    name: "Drafts",
    href: "/Leaderboard",
    icon: MdOutlineLeaderboard,
    current: true,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="h-full flex flex-col ga">
        {/* Top nav*/}
        <header className="flex-shrink-0 relative h-16 bg-[#150142] flex items-center ">
          {/* Logo area */}
          <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
            <a className="flex items-center justify-center h-16 w-16 bg-[#2D097F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20">
              <img
                className="h-10 w-auto"
                src="Pongo-logo 1.png"
                alt="Workflow"
              />
            </a>
          </div>

          {/* Picker area */}
          <div className="mx-auto md:hidden">
            <div className="relative">
              <label htmlFor="inbox-select" className="sr-only">
                Choose inbox
              </label>
              <select
                id="inbox-select"
                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
                defaultValue={
                  sidebarNavigation.find((item) => item.current)?.name || ""
                }
              >
                {sidebarNavigation.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                <BiChevronDown
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Menu button area */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <MenuIcon className="block h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>

          {/* Desktop nav area */}
          <div className="hidden md:min-w-0 ml-6 md:flex-1 md:flex md:items-center md:justify-between">
            <div className="">
              <div className="flex flex-row  border rounded-full border-[#693DCE] pl-8">
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search"
                  className="block w-30 h-10 border-none outline-0 placeholder-[#693DCE] bg-[#150142] font-poppins text-white"
                />
                <div className=" pt-2 pr-2 border-none ">
                  {/* <p className="bg-white">hh </p> */}
                  <IoIosSearch
                    className="h-7 w-8 text-[#693DCE] "
                    aria-hidden="true"
                  />
                </div>
              </div>
              {/* <div className=" relative text-gray-400 focus-within:text-white-500">
                <label htmlFor="desktop-search" className="sr-only">
                  Search
                </label>
             
              
              </div> */}
            </div>
            <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
              <div className="flex items-center space-x-8">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 md:hidden"
              onClose={setMobileMenuOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
              >
                <nav
                  className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
                  aria-label="Global"
                >
                  <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                        alt="Workflow"
                      />
                    </a>
                    <button
                      type="button"
                      className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close main menu</span>
                      <FaUserFriends
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                    <div className="relative text-gray-400 focus-within:text-gray-500">
                      <label htmlFor="mobile-search" className="sr-only">
                        Search all inboxes
                      </label>
                      <input
                        id="mobile-search"
                        type="search"
                        placeholder="Search all inboxes"
                        className="block w-full  focus:border-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                        <IoIosSearch className="h-5 w-5 " aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                    {navigation.map((item) => (
                      <Fragment key={item.name}>
                        <a
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          {item.name}
                        </a>
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                          >
                            {child.name}
                          </a>
                        ))}
                      </Fragment>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3 min-w-0 flex-1">
                        <div className="text-base font-medium text-gray-800 truncate">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
        </header>

        {/* Bottom section */}
        <div className="min-h-screen  flex-1 flex overflow-clip">
          {/* Narrow sidebar */}
          <nav
            aria-label="Sidebar"
            className="hidden md:block md:flex-shrink-0 md:bg-gr-800 bg-[#2D097F] md:overflow-y-auto overflow-y-hidden"
          >
            <div className="relative w-20 flex flex-col gap-9 p-3 space-y-3">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-white-400 hover:bg-gray-700",
                    "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg",
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default NavBar;
