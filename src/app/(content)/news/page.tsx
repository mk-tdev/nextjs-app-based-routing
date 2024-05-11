import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news-data";

const News = async () => {
  let newsData: any = (await getAllNews()) || [];

  return (
    <div className="m-3">
      <h1 className="mb-3 ">News</h1>

      <NewsList dummyNewsData={newsData} />
    </div>
  );
};

export default News;
