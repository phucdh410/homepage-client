import { Suspense } from "react";

import {
    MEvent,
    MLinks,
    MLogoSections,
    MNewPosts,
    MNotifications,
    MOutstanding,
    MPosts,
    MRelatedPost,
} from "@/modules/Home";

import Loading from "./loading";

export default function Home() {
    return (
        <>
            <MNotifications />

            <div className="container grid grid-cols-3 gap-8 mt-7">
                <div className="col-span-2">
                    <Suspense fallback={<Loading />}>
                        {/* @ts-expect-error */}
                        <MNewPosts />
                    </Suspense>
                    <MPosts />
                </div>
                <div className="col-span-1">
                    <MOutstanding />
                    <MLinks />
                </div>
            </div>

            <MEvent />

            <MRelatedPost />

            <MLogoSections />
        </>
    );
}
