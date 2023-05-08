import Link from "next/link";

import { raleway, sourceSerif4 } from "@/app/fonts";

import { MRelatedItem } from "./MRelatedItem";

const MOCK_DATA = [
    {
        id: "1",
        created_date: "2023-04-27 09:00:00",
        category: { title: "Mùa hè xanh" },
        title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ.",
        description:
            "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè",
        slug: "something",
        file: {
            url: "./images/related-post.png",
        },
    },
    {
        id: "2",
        created_date: "2023-04-27 09:00:00",
        category: { title: "Mùa hè xanh" },
        title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ.",
        description:
            "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè",
        slug: "something",
        file: {
            url: "./images/related-post.png",
        },
    },
    {
        id: "3",
        created_date: "2023-04-27 09:00:00",
        category: { title: "Mùa hè xanh" },
        title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ.",
        description:
            "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè",
        slug: "something",
        file: {
            url: "./images/related-post.png",
        },
    },
];

export const MRelatedPost = () => {
    return (
        <section>
            <div className="container mt-8">
                <div className="flex justify-between items-center mb-[30px]">
                    <h5
                        className={`${sourceSerif4.className} text-primary font-bold text-[18px] leading-[22px]`}
                    >
                        Bài viết vừa xem
                    </h5>
                    <Link
                        href=""
                        className={`transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-[30px] text-primary border-[2px] border-solid border-[#124874] py-4 px-[30px] uppercase font-bold text-[16px] leading-[19px] ${raleway.className}`}
                    >
                        xem thêm
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_DATA.map((e) => (
                        <MRelatedItem key={e.id} data={e} />
                    ))}
                </div>
            </div>
        </section>
    );
};
