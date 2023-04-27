import {
    MLinks,
    MNewPosts,
    MNotifications,
    MOutstanding,
} from "@/modules/Home";

export default function Home() {
    return (
        <>
            <MNotifications />

            <div className="container mx-auto grid grid-cols-3 gap-8 mt-7">
                <div className="col-span-2">
                    <MNewPosts />
                </div>
                <div className="col-span-1">
                    <MOutstanding />
                    <MLinks />
                </div>
            </div>
        </>
    );
}
