import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

const dummyNewsData = [
  {
    id: "n1",
    slug: "breaking-news-1",
    title: "Breaking News: Scientists Discover New Species of Butterfly",
    imageName: "butterfly_discovery.jpg",
    date: "2021-03-10",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n2",
    slug: "world-politics-update",
    title: "World Politics Update: UN Summit Addresses Climate Change Crisis",
    imageName: "un_climate_summit.jpg",
    date: "2024-09-09",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n3",
    slug: "tech-update-new-smartphone-released",
    title: "Tech Update: New Smartphone 'Xperia Z' Released by Tech Giant",
    imageName: "xperia_z_release.jpg",
    date: "2022-08-08",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n4",
    slug: "sports-news-1",
    title:
      "Sports News: Team A Wins Championship Title in Thrilling Final Match",
    imageName: "championship_match.jpg",
    date: "2024-03-07",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n5",
    slug: "entertainment-news-1",
    title: "Entertainment News: Actor XYZ Wins Best Actor Award",
    imageName: "best_actor_award.jpg",
    date: "2023-01-06",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n6",
    slug: "science-update-latest-discoveries",
    title: "Science Update: Latest Discoveries in Space Exploration",
    imageName: "space_discoveries.jpg",
    date: "2023-01-05",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n7",
    slug: "health-news-latest-research",
    title: "Health News: Latest Research on Heart Disease Prevention",
    imageName: "sdamiasd.jpg",
    date: "2024-05-04",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n8",
    slug: "business-update-market-trends",
    title: "Business Update: Market Trends and Investment Opportunities",
    imageName: "space_discoveries.jpg",
    date: "2023-04-03",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n9",
    slug: "environmental-news-1",
    title: "Environmental News: Efforts to Combat Plastic Pollution in Oceans",
    imageName: "butterfly_discovery.jpg",
    date: "2021-05-02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
  {
    id: "n10",
    slug: "technology-news-latest-innovations",
    title: "Technology News: Latest Innovations in Artificial Intelligence",
    imageName: "championship_match.jpg",
    date: "2022-05-01",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, quam vitae fermentum elementum, odio purus bibendum dui, vel egestas eros justo et metus. Nullam sit amet vestibulum nibh. Duis eleifend vestibulum risus, in aliquam eros dapibus a. Suspendisse potenti. Integer ut lacus aliquet, tempor odio nec, euismod sem. Fusce convallis mi non fermentum molestie. Ut eu scelerisque ligula.",
  },
];

const db = sqlite("data.db");

function initDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, imageName TEXT)"
  ).run();

  const { count } = db.prepare("SELECT COUNT(*) as count FROM news").get();

  if (count === 0) {
    const insert = db.prepare(
      "INSERT INTO news (slug, title, content, date, imageName) VALUES (?, ?, ?, ?, ?)"
    );

    dummyNewsData.forEach((news) => {
      insert.run(
        news.slug,
        news.title,
        news.content,
        news.date,
        news.imageName
      );
    });
  }
}

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  res.json(news);
});

initDb();

app.listen(8080);
