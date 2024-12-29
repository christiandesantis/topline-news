import { Paginated } from "@/types";
import { useMemo } from "react";

const Pagination = <T,>({ paginated }: { paginated: Paginated<T> }) => {
    const isMobile = window.innerWidth <= 768;

    const visibleLinks = useMemo(() => {
        const maxLinks = isMobile ? 3 : 10;
        const { links } = paginated;
        const activeIndex = links.findIndex((link) => link.active);
        let start = Math.max(1, activeIndex - Math.floor(maxLinks / 2));
        const end = Math.min(links.length - 1, start + maxLinks);

        if (end - start < maxLinks) {
            start = Math.max(1, end - maxLinks);
        }

        return [links[0], ...links.slice(start, end), links[links.length - 1]];
    }, [paginated, isMobile]);

    return (
        <nav className="flex items-center justify-center gap-x-1">
            {visibleLinks.map((link, index) => (
                <button
                    key={index}
                    type="button"
                    className={`btn btn-soft ${link.active ? "btn-primary" : ""}`}
                    disabled={!link.url}
                    onClick={() => {
                        if (link.url) {
                            window.location.href = link.url;
                        }
                    }}
                    dangerouslySetInnerHTML={{
                        __html: link.label,
                    }}
                />
            ))}
        </nav>
    );
};

export default Pagination;
