import Marquee from "react-fast-marquee";

import { getDictionary } from "@/app/[lang]/dictionaries";

import { IMNotificationsProps } from "./types";

const MOCK_NOTI = [
    {
        id: "c130760e-e7bc-40cf-ac7d-97e26ee7775c",
        title: "Thông báo có nhiều quá nội dung lắm luôn",
        published: true,
        created_at: "2023-04-26T02:13:46.507Z",
        updated_at: null,
    },
    {
        id: "49289de8-1691-43e2-99ed-cced435f800e",
        title: "Thông báo mới",
        published: true,
        created_at: "2023-04-25T01:40:18.383Z",
        updated_at: null,
    },
    {
        id: "63590305-2903-472d-bee0-0e570d9963cd",
        title: "Đây là thông báo thứ 1",
        published: false,
        created_at: "2023-02-21T11:18:45.724Z",
        updated_at: null,
    },
    {
        id: "a05d3175-8241-4bb2-b72b-c7da22776191",
        title: "Thêm thông báo 2.0",
        published: true,
        created_at: "2023-04-25T01:47:32.103Z",
        updated_at: "2023-04-25T01:48:44.538Z",
    },
    {
        id: "2ae87aa7-1998-4f81-a7bd-757c96be3b8b",
        title: "Tuổi trẻ trường Đại học Sư Phạm thành phố Hồ Chí Minh",
        published: true,
        created_at: "2023-04-13T09:39:34.823Z",
        updated_at: "2023-04-13T09:40:45.204Z",
    },
];

export const MNotifications = async ({ lang }: IMNotificationsProps) => {
    const d = await getDictionary(lang);
    return (
        <section className="mt-10 text-center">
            <h1 className="text-primary uppercase font-bold text-[25px] leading-9 mb-4">
                {d.label.notifications}
            </h1>
            <div className="flex flex-col gap-[17px]">
                <div
                    className="h-[2px]"
                    style={{
                        background:
                            "radial-gradient(50% 50% at 50% 50%, rgba(0, 84, 166, 0.1) 0%, #0054A6 42.71%, rgba(0, 84, 166, 0.1) 100%)",
                    }}
                ></div>
                <Marquee speed={100}>
                    {MOCK_NOTI.map((e) => (
                        <div key={e.id} className="mr-16">
                            <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#CF373D] mr-4"></span>
                            <span>{e.title}</span>
                        </div>
                    ))}
                </Marquee>
                <div
                    className="h-[2px]"
                    style={{
                        background:
                            "radial-gradient(50% 50% at 50% 50%, rgba(0, 84, 166, 0.1) 0%, #0054A6 42.71%, rgba(0, 84, 166, 0.1) 100%)",
                    }}
                ></div>
            </div>
        </section>
    );
};
