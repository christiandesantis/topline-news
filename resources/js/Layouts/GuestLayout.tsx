import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

const Guest = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen flex-col items-center sm:justify-center sm:pt-0">
            <div>
                <Link
                    href="/"
                    className="link flex items-center gap-2 whitespace-nowrap text-4xl font-semibold text-base-content/90 no-underline"
                >
                    <ApplicationLogo className="h-20 w-20 fill-current" />
                    Topline News
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-base-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default Guest;
