import { ButtonHTMLAttributes } from "react";

const PrimaryButton = ({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            className={`btn btn-primary ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
