import ArticleCard from "@/Components/ArticleCard";
import Carousel from "@/Components/Carousel";
import Hero from "@/Components/Hero";
import Title from "@/Components/Title";
// import NavBar from "@/Components/NavBar";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Welcome = ({ auth, articles }: PageProps) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen w-full">
                <div className="px-4 md:px-12 md:py-4">
                    <section>
                        <Hero auth={!!auth.user} />
                    </section>

                    <section>
                        <Title title="Latest News" className="mb-3" />
                        <Carousel>
                            {articles.map((article) => (
                                <div
                                    key={article.id}
                                    className="carousel-slide px-1"
                                >
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </Carousel>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Welcome;
