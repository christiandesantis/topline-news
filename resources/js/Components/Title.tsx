const Title = ({ title, className }: { title: string; className?: string }) => {
    return (
        <h2 className={`text-3xl text-base-content/90 ${className}`}>
            {title}
        </h2>
    );
};

export default Title;
