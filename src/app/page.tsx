import { MNotifications, MOutstanding } from "@/modules/Home";
import { MLinks } from "@/modules/Home/MLinks";

export default function Home() {
    return (
        <>
            <MNotifications />

            <div className="container mx-auto grid grid-cols-3 gap-8 mt-7">
                <div className="col-span-2">asda</div>
                <div className="col-span-1">
                    <MOutstanding />
                    <MLinks />
                </div>
            </div>
        </>
    );
}
