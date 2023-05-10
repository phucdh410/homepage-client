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
    MStatistics,
} from "@/modules/Home";

import Loading from "./loading";

interface IHomePageProps {
    params: {
        lang: string;
    };
}

const Home = ({ params }: IHomePageProps) => {
    return (
        <>
            {/* @ts-expect-error */}
            <MNotifications lang={params.lang} />

            {/* <MStatistics /> */}

            <div className="container grid grid-cols-3 gap-8 mt-7">
                <div className="col-span-2">
                    <Suspense fallback={<Loading />}>
                        {/* @ts-expect-error */}
                        <MNewPosts lang={params.lang} />
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
};

export default Home;
