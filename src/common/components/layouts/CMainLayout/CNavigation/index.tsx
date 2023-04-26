"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <button className="flex items-center justify-center">
                <span className="material-icons-outlined">language</span>
            </button>
        </div>
    );
};
