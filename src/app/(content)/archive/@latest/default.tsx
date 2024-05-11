import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news-data";

const LatestPage = async () => {
  const latestNews = await getLatestNews();

  return (
    <section className="my-5 ">
      <h2>Latest News</h2>

      <NewsList dummyNewsData={latestNews} />
    </section>
  );
};

export default LatestPage;
