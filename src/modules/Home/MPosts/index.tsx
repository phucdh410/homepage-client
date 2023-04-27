import { MPostItem } from "./MPostItem";

const MOCK_DATA = [
    { id: "1", title: "tuyển sinh đại học", display: 3 },
    { id: "2", title: "đào tạo đại học", display: 1 },
    { id: "3", title: "tuyển sinh sau đại học", display: 3 },
    { id: "4", title: "đào tạo sau đại học", display: 1 },
];

export const MPosts = () => {
    return (
        <section>
            <div className="grid grid-cols-2 gap-y-[30px] gap-x-8">
                {MOCK_DATA.map((e) => (
                    <MPostItem key={e.id} data={e} />
                ))}
            </div>
        </section>
    );
};
