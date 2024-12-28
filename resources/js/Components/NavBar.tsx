import { Link } from "@inertiajs/react";
import { useState } from "react";

const NavBar = ({ auth = false }: { auth: boolean }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar absolute start-0 top-0 z-[1] bg-base-100 shadow md:h-15">
            <div className="w-full md:flex md:items-center md:gap-2">
                <div className="flex items-center justify-between max-md:w-full">
                    <div className="navbar-start items-center justify-between max-md:w-full">
                        <Link
                            className="link flex items-center gap-2 whitespace-nowrap text-xl font-semibold text-base-content/90 no-underline dark:text-white"
                            href="/"
                        >
                            <span className="icon-[fluent--news-16-regular] size-10"></span>
                            Topline News
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="btn btn-square btn-secondary btn-outline btn-sm"
                            onClick={toggleCollapse}
                            aria-controls="sticky-navbar-collapse"
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <span
                                className={`${isCollapsed ? "block" : "hidden"} icon-[tabler--menu-2] size-4`}
                            ></span>
                            <span
                                className={`${isCollapsed ? "hidden" : "block"} icon-[tabler--x] size-4`}
                            ></span>
                        </button>
                    </div>
                </div>
                <div
                    id="sticky-navbar-collapse"
                    className={`collapse ${isCollapsed ? "hidden" : "block"} grow basis-full overflow-hidden transition-[height] duration-300 md:navbar-end max-md:w-full`}
                >
                    <ul className="menu gap-2 p-0 text-base md:menu-horizontal max-md:mt-2">
                        {auth ? (
                            <li>
                                <Link href={route("dashboard")}>Dashboard</Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link href={route("login")}>Login</Link>
                                </li>
                                <li>
                                    <Link href={route("register")}>
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
