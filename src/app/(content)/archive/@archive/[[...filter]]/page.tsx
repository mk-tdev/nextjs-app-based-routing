import NewsList from "@/components/news-list";
import Link from "next/link";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news-data";
import { Suspense } from "react";
import LoadingSingleSkeleton from "@/components/single-skeleton-loading";

const FilterHeader = async ({ year, month }: any) => {
  const availableData = await getAvailableNewsYears();

  let links = availableData;
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  } else if (year && month) {
    links = [];
  }

  if (year && !availableData.includes(year)) {
    throw new Error("Invalid");
  }

  if (month && !getAvailableNewsMonths(year).includes(month)) {
    throw new Error("Invalid");
  }

  return (
    <header>
      <nav>
        <ul className="flex gap-5 items-center ">
          {links.map((link: any) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{year ? "Month " + link : link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }: any): Promise<any> => {
  let news: any = [];
  let newsNotFoundMsg = "";

  if (year && !month) {
    news = await getNewsForYear(year);
    newsNotFoundMsg = "No news found for the selected year and month";
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
    newsNotFoundMsg = "No news found for the selected year and month";
  }
  newsNotFoundMsg = "Please select a year or year and month to view news";

  return (
    <>
      {news.length === 0 && (
        <section className="my-5">
          <p>{newsNotFoundMsg}</p>
        </section>
      )}

      {news.length > 0 && (
        <section className="mt-5">
          <NewsList dummyNewsData={news} />
        </section>
      )}
    </>
  );
};

const YearWise = async ({ params }: any) => {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading years and months!</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<LoadingSingleSkeleton />}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default YearWise;
