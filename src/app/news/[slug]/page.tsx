import { dummyNewsData } from "@/dummy_data";
import { notFound } from "next/navigation";

const NewsDetail = ({ params }: any) => {
  const { slug } = params;
  const currentArticle = dummyNewsData.find((article) => article.slug === slug);

  if (!currentArticle) {
    notFound();
  }

  return (
    <article className="m-3">
      <img
        src={`/images/news/${currentArticle?.imageName}`}
        alt={currentArticle?.title}
        className="w-full h-48 object-cover mb-2"
      />
      <time className="text-gray-400">
        Published on: {currentArticle?.date}
      </time>
      <h1 className="text-2xl font-bold mb-4">{currentArticle?.title}</h1>
    </article>
  );
};

export default NewsDetail;
