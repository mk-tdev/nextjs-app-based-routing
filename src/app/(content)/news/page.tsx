import NewsList from "@/components/news-list";
import { dummyNewsData } from "@/dummy_data";
import Link from "next/link";

const News = () => {
  return (
    <div className="m-3">
      <h1 className="mb-3">News</h1>

      <NewsList dummyNewsData={dummyNewsData} />
    </div>
  );
};

export default News;
