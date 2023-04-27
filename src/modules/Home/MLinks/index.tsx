const MOCK_DATA = [
    {
        id: "0cf5b8d9-ddc4-4e0d-b70c-2463f5d5b6f1",
        title: "Youth HCMUE",
        url: "https://www.youtube.com/",
        category: 1,
    },
    {
        id: "d0cec3ae-27d0-49a6-8ba5-7e580b60ec5a",
        title: "Online sinh viên",
        url: "https://www.youtube.com/",
        category: 2,
    },
    {
        id: "02e5836a-588f-4784-9c09-88fdbc863947",
        title: "Đăng ký giấy chứng nhận",
        url: "https://www.youtube.com/",
        category: 3,
    },
    {
        id: "97673d11-e68a-4e31-9b94-139511a430d2",
        title: "Hỗ trợ sinh viên",
        url: "https://www.youtube.com/",
        category: 4,
    },
    {
        id: "bb63273b-64c2-4b61-a27f-7b77caabbbed",
        title: "Facebook",
        url: "https://www.youtube.com/",
        category: 5,
    },
];

const images = {
    1: "./images/youth.png",
    2: "./images/online.png",
    3: "./images/certificate.png",
    4: "./images/support.png",
    5: "./images/facebook.png",
};

export const MLinks = () => {
    const renderContent = (category: 1 | 2 | 3 | 4 | 5) => {
        switch (category) {
            case 1:
                return (
                    <img
                        src="./images/youth-text.png"
                        alt="img"
                        className="absolute z-10 "
                    />
                );
            case 2:
                return (
                    <div className="absolute z-10">
                        <h4 className="font-black text-[30px] text-primary text-center">
                            ONLINE
                        </h4>
                        <h4 className="font-black text-[20px] text-white text-center">
                            Sinh Viên
                        </h4>
                    </div>
                );
            case 3:
                return (
                    <div className="absolute z-10">
                        <h4 className="font-black text-[30px] text-primary text-center">
                            Đăng Ký
                        </h4>
                        <h4 className="font-black text-[20px] text-white text-center">
                            Giấy Chứng Nhận
                        </h4>
                    </div>
                );
            case 4:
                return (
                    <div className="absolute z-10">
                        <h4 className="font-black text-[30px] text-primary text-center">
                            Hỗ Trợ
                        </h4>
                        <h4 className="font-black text-[20px] text-white text-center">
                            Sinh Viên
                        </h4>
                    </div>
                );
            default:
                break;
        }
    };

    return (
        <section>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 mt-8">
                {MOCK_DATA.map((e) =>
                    e.category === 5 ? (
                        <a
                            key={e.id}
                            href={e.url}
                            target="_blank"
                            rel="noopenner noreferrer"
                            className="overflow-hidden rounded-[20px] col-span-2 relative"
                        >
                            <img
                                src={images[e.category as keyof typeof images]}
                                alt="img"
                                className="inset-0 w-full h-full object-cover"
                            />
                        </a>
                    ) : (
                        <a
                            key={e.id}
                            href={e.url}
                            target="_blank"
                            rel="noopenner noreferrer"
                            className="overflow-hidden rounded-[20px] aspect-[1/1] relative flex items-center justify-center"
                        >
                            <img
                                src={images[e.category as keyof typeof images]}
                                alt="img"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {renderContent(e.category as keyof typeof images)}
                        </a>
                    )
                )}
            </div>
        </section>
    );
};
