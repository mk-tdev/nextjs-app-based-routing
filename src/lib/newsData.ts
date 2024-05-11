import sql from "better-sqlite3";

const db = sql("data.db");

export const getAllNews = async (): Promise<any> => {
  const news = db.prepare("SELECT * FROM news").all();

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return news;
};

export const getAllLocalNews = (): any => {
  const news = db.prepare("SELECT * FROM news").all();

  return news;
};

export function getLatestNews() {
  return getAllLocalNews().slice(0, 3);
}

export function getAvailableNewsYears() {
  return getAllLocalNews()
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
  return getAllLocalNews()
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
  return getAllLocalNews().filter(
    (news: any) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: any, month: any) {
  return getAllLocalNews().filter((news: any) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
