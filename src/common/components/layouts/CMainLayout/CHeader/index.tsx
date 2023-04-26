import { CNavigation } from "../CNavigation";

export const CHeader = () => {
    return (
        <header>
            <div
                className="relative w-full h-[200px] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(./images/banner-default.png)" }}
            >
                <CNavigation />
            </div>
        </header>
    );
};
