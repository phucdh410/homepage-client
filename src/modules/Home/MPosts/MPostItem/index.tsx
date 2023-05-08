import { sourceSerif4 } from "@/app/fonts";
import { CLabelSection } from "@/common/components/others";

import { MDisplay1 } from "./MDisplay1";
import { MDisplay3 } from "./MDisplay3";
import { IMPostItemProps } from "./types";

export const MPostItem: React.FC<IMPostItemProps> = ({ data }) => {
    return (
        <div className="flex flex-col">
            <CLabelSection label={data.title} />
            <div className="flex flex-col h-full">
                <div className="h-full">
                    {data.display === 3 ? <MDisplay3 /> : <MDisplay1 />}
                </div>
                <div className="flex items-start justify-end">
                    <button
                        className={`font-bold text-[16px] leading-[22px] text-newRed ${sourceSerif4.className}`}
                    >
                        Xem thêm
                    </button>
                    <span className="material-icons-outlined text-newRed">
                        arrow_right
                    </span>
                </div>
            </div>
        </div>
    );
};
