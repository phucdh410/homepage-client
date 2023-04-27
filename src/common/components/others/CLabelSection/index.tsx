import { raleway } from "@/app/fonts";
import { ICLabelSectionProps } from "./types";

export const CLabelSection: React.FC<ICLabelSectionProps> = ({ label }) => {
    return (
        <div className="mb-[25px] flex items-center gap-5">
            <h3
                className={`text-primary font-bold text-[18px] uppercase ${raleway.className}`}
            >
                {label}
            </h3>
            <div className="h-[6px] border-l-0 border-r-0 border-[0.5px] border-solid border-[#9D9D9D] flex-1"></div>
        </div>
    );
};
