"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

const MOCK_NAVIGATIONS = [
    { id: "1", label: "Trang chủ", path: "/" },
    { id: "2", label: "Giới thiệu", path: "/gioi-thieu" },
    { id: "3", label: "Tin tức - Sự kiện", path: "/tin-tuc" },
    { id: "4", label: "Tuyển sinh", path: "/tuyen-sinh" },
    { id: "5", label: "Đào tạo", path: "/dao-tao" },
    { id: "6", label: "Hợp tác Quốc tế", path: "/hop-tac" },
    { id: "7", label: "Khoa học Công nghệ", path: "/khoa-hoc" },
    { id: "8", label: "Văn bản", path: "/van-ban" },
];

export const CNavigation = () => {
    const pathname = usePathname();

    return (
        <div className="container absolute flex items-center justify-between bg-white rounded-[20px] p-5 top-[100%] left-[50%] whitespace-nowrap -translate-x-1/2 -translate-y-1/2 w-[95%] shadow-headerShadow navigation-container">
            <ul className="navigation-list">
                {MOCK_NAVIGATIONS.map((e) => (
                    <Link
                        href={e.path}
                        key={e.id}
                        className={`p-[10px] mr-[15px] ${
                            pathname === e.path
                                ? "text-primary font-bold font-serif4"
                                : ""
                        }`}
                    >
                        {e.label}
                    </Link>
                ))}
            </ul>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex w-full justify-center rounded-md text-black bg-opacity-20 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="material-icons-outlined">language</span>
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
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={pathname}
                                        locale="vi"
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        VI
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={pathname}
                                        locale="en"
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        EN
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};
