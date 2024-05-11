import { getAllNews, getNewsItem } from "@/lib/news-data";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetail = async ({ params }: any) => {
  const { slug } = params;
  const currentArticle: any = await getNewsItem(slug);

  if (!currentArticle) {
    notFound();
  }

  return (
    <article className="m-3">
      <Link href={`/news/${currentArticle?.slug}/image`}>
        <img
          src={`/images/news/${currentArticle?.imageName}`}
          alt={currentArticle?.title}
          className="w-full h-48 object-cover mb-2"
        />
      </Link>
      <time className="text-gray-400">
        Published on: {currentArticle?.date}
      </time>
      <h1 className="text-2xl font-bold mb-4">{currentArticle?.title}</h1>
    </article>
  );
};

export default NewsDetail;
