import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

const TextInput = forwardRef(
    (
        {
            type = "text",
            className = "",
            isFocused = false,
            ...props
        }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
        ref,
    ) => {
        const localRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            focus: () => localRef.current?.focus(),
        }));

        useEffect(() => {
            if (isFocused) {
                localRef.current?.focus();
            }
        }, [isFocused]);

        return (
            <input
                {...props}
                type={type}
                className={`input ${className}}`}
                ref={localRef}
            />
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
