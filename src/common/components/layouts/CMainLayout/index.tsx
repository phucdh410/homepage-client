import { CHeader } from "./CHeader";
import { ICMainLayoutProps } from "./types";

export const CMainLayout: React.FC<ICMainLayoutProps> = ({ children }) => {
    //#region Ref
    //#endregion

    //#region Data
    //#endregion

    //#region Event
    //#endregion

    //#region Cycle
    //#endregion

    //#region Render
    return (
        <>
            <CHeader />
            <main className={`mt-[80px] mb-96`}>
                <div className="mx-auto">{children}</div>
            </main>
            <footer></footer>
        </>
    );
    //#endregion
};
