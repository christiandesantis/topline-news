import { LabelHTMLAttributes } from "react";

const InputLabel = ({
    value,
    className = "",
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) => {
    return (
        <label {...props} className={`label label-text ${className}`}>
            {value ? value : children}
        </label>
    );
};

export default InputLabel;
