import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {
  const latestNews = getLatestNews();

  return (
    <section className="my-5 ">
      <h2>Latest News</h2>

      <NewsList dummyNewsData={latestNews} />
    </section>
  );
};

export default LatestPage;
