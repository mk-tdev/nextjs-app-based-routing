import Link from "next/link";

export default function Home() {
  return (
    <main className="m-3">
      <h1 className="text-3xl font-bold mb-4">Welcome to the News App</h1>

      <section>
        <h2 className="text-2xl font-bold mb-2">Latest News</h2>
        <Link href="/news" className="text-blue-500 hover:underline">
          View More
        </Link>
      </section>
    </main>
  );
}
