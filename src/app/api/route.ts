import { getAllNews } from "@/lib/news-data";

export const GET = async (request: Request) => {
  try {
    const news = getAllNews();
    return new Response(JSON.stringify(news), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("Error fetching news:", e);
    return new Response("Error fetching news", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
