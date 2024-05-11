import NewsList from "@/components/news-list";

const News = async () => {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  let newsData: any = data || [];

  return (
    <div className="m-3">
      <h1 className="mb-3 ">News</h1>

      <NewsList dummyNewsData={newsData} />
    </div>
  );
};

export default News;
