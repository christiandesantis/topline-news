import { IStaticMethods } from "flyonui/flyonui";
import { ReactNode, useEffect, useMemo } from "react";

declare global {
    interface Window {
        HSStaticMethods?: IStaticMethods;
    }
}

const Carousel = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        // Initialize FlyonUI carousel
        window.HSStaticMethods?.autoInit("carousel");
    }, []);

    const config: string = useMemo(() => {
        return JSON.stringify({
            loadingClasses: "opacity-0",
            isDraggable: true,
            isInfiniteLoop: true,
            isAutolay: true,
            slidesQty: { xs: 1, sm: 2, md: 3, lg: 4 },
        });
    }, []);

    return (
        <div id="autoplay" data-carousel={config} className="relative w-full">
            <div className="carousel md:h-[22rem]">
                <div className="carousel-body h-full cursor-grab carousel-dragging:cursor-grabbing carousel-dragging:transition-none">
                    {children}
                </div>
            </div>

            {/* <!-- Previous Slide --> */}
            <button
                type="button"
                className="carousel-prev hidden sm:flex sm:items-center sm:justify-start"
            >
                <span className="flex size-9.5 items-center justify-center rounded-full bg-primary shadow">
                    <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            {/* <!-- Next Slide --> */}
            <button
                type="button"
                className="carousel-next hidden sm:flex sm:items-center sm:justify-end"
            >
                <span className="sr-only">Next</span>
                <span className="flex size-9.5 items-center justify-center rounded-full bg-primary shadow">
                    <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
            </button>
            <div className="carousel-info absolute bottom-1 start-[50%] block inline-flex -translate-x-[50%] justify-center rounded-lg bg-primary px-4 md:hidden dark:bg-secondary">
                <span className="carousel-info-current me-1">0</span>/
                <span className="carousel-info-total ms-1">0</span>
            </div>
        </div>
    );
};

export default Carousel;
