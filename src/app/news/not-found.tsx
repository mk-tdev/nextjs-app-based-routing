const ArticleNotFound = () => {
  return (
    <div className="m-3 text-center">
      <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
      <p className="text-lg">The article you are looking for does not exist.</p>
      <p className="text-lg">
        Please check the URL or go back to the{" "}
        <a href="/news" className="text-blue-500 hover:underline">
          News page
        </a>
        .
      </p>
    </div>
  );
};

export default ArticleNotFound;
