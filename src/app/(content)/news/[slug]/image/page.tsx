import { dummyNewsData } from "@/dummy_data";
import { notFound } from "next/navigation";

const ImagePage = ({ params }: any) => {
  const { slug } = params;

  const newsItem = dummyNewsData.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="m-3">
      <img
        src={`/images/news/${newsItem.imageName}`}
        alt={newsItem.title}
        className="h1 w-full"
      />
    </article>
  );
};

export default ImagePage;
