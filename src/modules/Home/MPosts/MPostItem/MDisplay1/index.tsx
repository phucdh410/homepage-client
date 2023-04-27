import { sourceSerif4 } from "@/app/fonts";
import dayjs from "dayjs";

const MOCK_DATA = {
    created_date: "2023-04-23 21:00:00",
    category: {
        title: "Học bổng",
    },
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry.",
    file: {
        url: "./images/post-item-image.png",
    },
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    slug: "something",
};

export const MDisplay1 = () => {
    return (
        <>
            <div className="flex items-center gap-4 mb-[11px]">
                <span className="material-icons-outlined ">schedule</span>
                <p
                    className={` font-semibold text-[13px] uppercase mr-4 ${sourceSerif4.className}`}
                >
                    {dayjs(MOCK_DATA.created_date).fromNow()}
                </p>
                <span className="material-icons-outlined ">local_offer</span>
                <p
                    className={` font-semibold text-[13px] uppercase ${sourceSerif4.className}`}
                >
                    {MOCK_DATA.category
                        ? MOCK_DATA.category?.title
                        : "<CATEGORY>"}
                </p>
            </div>
            <h4 className="text-primary font-bold text-[16px] leading-[22px]">
                {MOCK_DATA.title}
            </h4>
            <div className="flex items-center gap-5 mt-7">
                <div className="w-[45%] shrink-0 relative aspect-[186/169] overflow-hidden rounded-[10px]">
                    <img
                        src={MOCK_DATA.file.url}
                        alt="img"
                        className="absolute h-full w-full inset-0 object-cover"
                    />
                </div>
                <p className="text-[16px]">{MOCK_DATA.description}</p>
            </div>
        </>
    );
};
