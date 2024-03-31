import NewsCard from "../ui/NewsCard";
import Spinner from "../ui/Spinner";
import { useNba } from "../contexts/nbaContext";
import { useEffect } from "react";

function Homepage() {
  const { getAllTeams, getNews, news, teams, isLoading } = useNba();

  useEffect(function () {
    getAllTeams();
    getNews();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <section>
      <div className="text-stone-900 dark:text-stone-100 mb-24">
        <h1 className="max-w-screen-md mx-auto text-6xl font-bold text-center mb-8 text-blue-800">
          Latest News About Your Favourite Sport
        </h1>
        <p className="max-w-screen-md mx-auto opacity-70 text-center">
          Stay ahead of the game with our latest updates on the NBA scene.Dive
          into the heart of basketball action with exclusive insights, injuries,
          lineups, and player interviews. Whether you're a die-hard fan or just
          getting into the game, this can keep you up to date.
        </p>
      </div>
      {news.map((singleNews) => (
        <NewsCard
          key={singleNews.NewsID}
          singleNews={singleNews}
          teams={teams}
        />
      ))}
    </section>
  );
}

export default Homepage;
