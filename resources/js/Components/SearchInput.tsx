const SearchInput = ({
    className,
    defaultValue,
    disabled,
    onChange,
    onSubmit,
}: {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center ${className}`}
        >
            <form
                className="join w-auto md:w-1/2"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (onSubmit) onSubmit(e);
                }}
            >
                <input
                    className="input join-item"
                    placeholder="Search by keyword"
                    defaultValue={defaultValue}
                    onChange={(e) => {
                        if (onChange) onChange(e);
                    }}
                />
                <button
                    disabled={disabled}
                    type="submit"
                    className="btn join-item btn-secondary btn-outline"
                >
                    <span className="icon-[tabler--search] size-6 text-base-content/80"></span>
                </button>
            </form>
            {defaultValue && (
                <label className="mt-2 text-sm text-gray-600">
                    Showing results for "{defaultValue}"
                </label>
            )}
        </div>
    );
};

export default SearchInput;
