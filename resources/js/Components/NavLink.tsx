import { InertiaLinkProps, Link } from "@inertiajs/react";

const NavLink = ({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) => {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 focus:border-indigo-700 dark:border-indigo-600"
                    : "border-transparent hover:border-gray-300 focus:border-gray-300 dark:hover:border-gray-700 dark:focus:border-gray-700") +
                className
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
