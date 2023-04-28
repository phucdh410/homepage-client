import { raleway, sourceSerif4 } from "@/app/fonts";
import Link from "next/link";

const MOCK_DATA = [
    {
        id: "1",
        title: "Danh sách sinh viên K 38 và K 39 nhận học bổng AMA học kì II năm học 2013 - 2014",
        slug: "something-post",
    },
    {
        id: "2",
        title: "Danh sách sinh viên K 38 và K 39 nhận học bổng AMA học kì II năm học 2013 - 2014",
        slug: "something-post",
    },
    {
        id: "3",
        title: "Danh sách sinh viên K 38 và K 39 nhận học bổng AMA học kì II năm học 2013 - 2014",
        slug: "something-post",
    },
    {
        id: "4",
        title: "Danh sách sinh viên K 38 và K 39 nhận học bổng AMA học kì II năm học 2013 - 2014",
        slug: "something-post",
    },
];

export const MOutstanding = () => {
    return (
        <section>
            <div className="bg-white rounded-[20px] shadow-homeOutstanding p-5">
                <div className="bg-primary px-[20px] py-[10px] rounded-[15px]">
                    <h3
                        className={`uppercase text-white font-bold text-[16px] leading-[21px] tracking-[0.03em] ${raleway.className}`}
                    >
                        tin nổi bật
                    </h3>
                </div>
                <ul className="flex flex-col">
                    {MOCK_DATA.map((e, i) => (
                        <Link key={e.id} href={e.slug} className="mt-[33px]">
                            <div className="flex gap-3">
                                <h1
                                    className={`text-newRed font-medium text-[50px] leading-[38px] tracking-[0.03em] ${raleway.className}`}
                                >{`${i + 1}.`}</h1>
                                <p
                                    className={`text-primary text-[20px] font-bold text-justify leading-[27px] ${sourceSerif4.className} hover:underline`}
                                >
                                    {e.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                    <div className=" flex justify-end items-center">
                        <button
                            className={`text-[14px] flex justify-end items-center italic mt-[33px] leading-[21px] text-[#0054A5] font-bold ${raleway.className}`}
                        >
                            Xem thêm
                            <span className="material-icons-outlined">
                                arrow_right
                            </span>
                        </button>
                    </div>
                </ul>
            </div>
        </section>
    );
};
