import Skeleton from "react-loading-skeleton";

import { CLabelSection } from "@/common/components/others";

const Loading = () => {
    return (
        <section>
            <CLabelSection label="Bài viết mới" />
            <div
                className="rounded-[20px] bg-white overflow-hidden mb-8"
                style={{
                    boxShadow: "10px 10px 60px rgba(19, 70, 131, 0.1)",
                    backdropFilter: "blur(2.5px)",
                }}
            >
                <div className="relative aspect-[860/248]">
                    <Skeleton className="absolute h-[300px] inset-0" />
                </div>
                <div className="p-5 pt-3">
                    <div className="flex items-center gap-4 mb-[15px]">
                        <Skeleton className="w-[300px]" />
                    </div>
                    <h4
                        className={`text-primary font-bold text-[18px] leading-[22px]`}
                    >
                        <Skeleton count={2} />
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default Loading;
