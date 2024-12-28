import { Article } from "@/types";
import { useCallback } from "react";

export interface ArticleCardProps {
    className?: string;
    article: Article;
}

const ArticleCard = ({ article, className = "" }: ArticleCardProps) => {
    const truncateText = useCallback((text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + "...";
    }, []);

    const formatDate = useCallback((dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }, []);

    const placeholderImage = "https://picsum.photos/150";

    return (
        <div className={`card ${className}`}>
            <div className="flex w-full items-center justify-center">
                <figure className="h-32 w-full overflow-hidden">
                    <img
                        src={article.urlToImage || placeholderImage}
                        alt="image"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = placeholderImage;
                        }}
                    />
                </figure>
            </div>
            <div className="card-body">
                <div className="text-sm text-base-content/60">
                    {article.category.toUpperCase()}
                </div>
                <h5 className="card-title mb-0.5">
                    {truncateText(article.title, 60)}
                </h5>
                <div className="mb-2.5 text-sm text-base-content/60">
                    {formatDate(article.publishedAt)}
                </div>
                {/* {article.description && (
                    <p className="mb-3">
                        {truncateText(article.description, 120)}
                    </p>
                )} */}
                <div className="card-actions">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link link-primary"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
