import {
    MEvent,
    MLinks,
    MNewPosts,
    MNotifications,
    MOutstanding,
    MPosts,
    MRelatedPost,
} from "@/modules/Home";

export default function Home() {
    return (
        <>
            <MNotifications />

            <div className="container grid grid-cols-3 gap-8 mt-7">
                <div className="col-span-2">
                    <MNewPosts />
                    <MPosts />
                </div>
                <div className="col-span-1">
                    <MOutstanding />
                    <MLinks />
                </div>
            </div>

            <MEvent />

            <MRelatedPost />
        </>
    );
}
