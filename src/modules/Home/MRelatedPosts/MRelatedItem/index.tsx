import dayjs from "dayjs";

import { sourceSerif4 } from "@/app/fonts";

import { IMRelatedItemProps } from "./types";

export const MRelatedItem: React.FC<IMRelatedItemProps> = ({ data }) => {
    return (
        <div className="rounded-[20px] bg-white overflow-hidden">
            <div className="relative aspect-[414/350]">
                <img
                    src={data.file.url}
                    alt="img"
                    className="absolute h-full w-full inset-0 object-cover"
                />
            </div>
            <div className="p-[30px]">
                <div className="flex items-center gap-4 mb-[11px]">
                    <span className="material-icons-outlined ">schedule</span>
                    <p
                        className={` font-semibold text-[13px] uppercase mr-4 ${sourceSerif4.className}`}
                    >
                        {dayjs(data.created_date).fromNow()}
                    </p>
                    <span className="material-icons-outlined ">
                        local_offer
                    </span>
                    <p
                        className={` font-semibold text-[13px] uppercase ${sourceSerif4.className}`}
                    >
                        {data.category ? data.category?.title : "<CATEGORY>"}
                    </p>
                </div>
                <h3
                    className={`${sourceSerif4.className} text-primary font-bold text-[25px] mb-[25px]`}
                >
                    {data.title}
                </h3>
                <p className="text-[16px] leading-[26px] tracking-[0.03em] text-[#5B5B5B]">
                    {data.description}
                </p>
            </div>
        </div>
    );
};
