const MOCK_DATA = {
    thanhlap: 1976,
    members: 3,
    rooms: 15,
    phanhieu: 1,
    departments: 16,
    students: 30747,
};

export const MStatistics = () => {
    return (
        <div
            className="rounded-[30px] p-[30px] inline-block left-1/2 absolute z-50 !bg-[darkslategray]"
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                transform: "translateX(-50%)",
            }}
        >
            <div
                className="rounded-[25px] p-[25px]"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
                <div
                    className="rounded-[20px] p-[20px]"
                    style={{ background: "rgba(255, 255, 255, 0.2)" }}
                >
                    <div className="rounded-[inherit] p-[inherit] bg-white">
                        <div className="grid grid-cols-6 gap-5">
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.thanhlap}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Thành lập
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.members}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Trường thành viên
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.rooms}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Phòng
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.phanhieu}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Phân hiệu
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.departments}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Khoa
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[35px] text-primary leading-[48px]">
                                    {MOCK_DATA.students}
                                </h4>
                                <p className="text-[#191919] text-base leading-5 tracking-[0.03em]">
                                    Sinh viên
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
