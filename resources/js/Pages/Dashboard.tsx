import ArticleCard from "@/Components/ArticleCard";
import Pagination from "@/Components/Pagination";
import SearchInput from "@/Components/SearchInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Article, Paginated } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

const Dashboard = ({
    articlesPaginated,
}: {
    articlesPaginated: Paginated<Article>;
}) => {
    const { url } = usePage();
    const searchQuery = new URLSearchParams(window.location.search).get(
        "search",
    ) as string;
    const [search, setSearch] = useState(searchQuery);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <SearchInput
                        className="mb-6"
                        defaultValue={search}
                        disabled={!searchQuery && !search}
                        onChange={(e) => setSearch(e.target.value)}
                        onSubmit={() =>
                            router.visit(url, {
                                method: "get",
                                data: { search, page: 1 },
                            })
                        }
                    />

                    <Pagination paginated={articlesPaginated} />
                    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
                        {articlesPaginated.data.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                    <Pagination paginated={articlesPaginated} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
