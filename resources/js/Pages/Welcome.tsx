import NavBar from "@/Components/NavBar";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Welcome = ({ auth }: PageProps) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen w-full">
                <NavBar auth={!!auth.user} />
                <div className="absolute top-15 h-full w-full overflow-y-scroll px-8 pt-4">
                    <div className="flex w-full flex-col gap-4">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="skeleton h-16 w-16 rounded-full"></div>
                            <div className="flex flex-col gap-4">
                                <div className="skeleton h-4 w-52"></div>
                                <div className="skeleton h-4 w-52"></div>
                            </div>
                        </div>
                        <div className="skeleton mb-4 h-16 w-full"></div>
                        <div className="skeleton mb-4 h-32 w-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
