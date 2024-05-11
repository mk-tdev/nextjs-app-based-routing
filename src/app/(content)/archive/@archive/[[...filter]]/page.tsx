import NewsList from "@/components/news-list";
import Link from "next/link";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";

const YearWise = ({ params }: any) => {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let links = getAvailableNewsYears();

  let news: any = [];
  let newsNotFoundMsg = "";

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
    newsNotFoundMsg = "No news found for the selected year and month";
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
    newsNotFoundMsg = "No news found for the selected year and month";
  } else {
    newsNotFoundMsg = "Please select a year or year and month to view news";
  }

  if (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) {
    throw new Error("Invalid");
  }

  if (
    selectedMonth &&
    !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
  ) {
    throw new Error("Invalid");
  }

  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-5 items-center ">
            {links.map((link: any) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>
                    {selectedYear ? "Month " + link : link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {news.length === 0 && (
        <section className="my-5">
          <p>
            {newsNotFoundMsg}
            {selectedMonth ? ` and month` : ""}.
          </p>
        </section>
      )}

      {news.length > 0 && (
        <section className="mt-5">
          <h1>News from {selectedYear}</h1>

          <NewsList dummyNewsData={news} />
        </section>
      )}
    </>
  );
};

export default YearWise;
