import { InputHTMLAttributes } from "react";

const Checkbox = ({
    className = "",
    ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input {...props} type="checkbox" className={`checkbox ${className}`} />
    );
};

export default Checkbox;
