import { dummyNewsData } from "@/dummy_data";

export function getAllNews() {
  return dummyNewsData;
}

export function getLatestNews() {
  return dummyNewsData.slice(0, 3);
}

export function getAvailableNewsYears() {
  return dummyNewsData
    .reduce((years: any, news: any) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .sort((a: any, b: any) => b - a);
}

export function getAvailableNewsMonths(year: any) {
  return dummyNewsData
    .reduce((months: any, news: any) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [])
    .sort((a: any, b: any) => b - a);
}

export function getNewsForYear(year: any) {
  return dummyNewsData.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: any, month: any) {
  return dummyNewsData.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
