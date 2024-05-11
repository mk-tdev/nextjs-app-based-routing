import { dummyNewsData } from "@/dummy_data";
import Link from "next/link";

const News = () => {
  return (
    <div className="m-3">
      <h1>News</h1>

      <ul className="space-y-4 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyNewsData.map((article) => (
          <li
            key={article.slug}
            className="bg-white rounded-md shadow-md  flex flex-col "
          >
            <div className="flex-1 border-red-100 ">
              <Link href={`news/${article.slug}`}>
                <img
                  src={`/images/news/${article.imageName}`}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-2"
                />
              </Link>
            </div>
            <h2 className="px-2 text-lg font-bold">{article.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
