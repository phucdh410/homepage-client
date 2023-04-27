const MOCK_DATA = {
    id: "eefcdb28-ee5b-45df-942a-523448c62661",
    event_language_id: "f4c0f2c2-2e35-4cad-b208-ae216fc077ca",
    title: "Sự kiện mới 2.0",
    slug: "su-kien-moi-20",
    file: {
        id: "457707be-18c0-42b3-9d5c-76d2653e1375",
        name: "d.jpg",
        url: "./images/banner-event.png",
        type: ".jpg",
    },
    start_date: "2023-04-27",
    end_date: "2023-04-28",
    published: false,
};

export const MEvent = () => {
    return (
        <section>
            <div className="container mt-8 mx-auto relative overflow-hidden rounded-[20px] aspect-[1306/178]">
                <img
                    src={MOCK_DATA.file.url}
                    alt=""
                    className="absolute h-full w-full object-cover inset-0"
                />
            </div>
        </section>
    );
};
