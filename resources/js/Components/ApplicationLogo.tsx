const ApplicationLogo = ({
    className = "",
    size,
}: {
    className?: string;
    size?: number;
}) => {
    const icon = "icon-[fluent--news-16-regular]";

    return (
        <span className={`${icon} size-${size || "24"} ${className}`}></span>
    );
};

export default ApplicationLogo;
