import { getAllNews, getNewsItem } from "@/lib/news-data";
import { notFound } from "next/navigation";

const ImageInterceptor = async ({ params }: any) => {
  const { slug } = params;
  const newsItem: any = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="m-3">
      <h2>Intercepted</h2>
      <img
        src={`/images/news/${newsItem.imageName}`}
        alt={newsItem.title}
        className="h1 w-full"
      />
    </article>
  );
};

export default ImageInterceptor;
