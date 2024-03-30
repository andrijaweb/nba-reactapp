import { Link } from "react-router-dom";

function NewsCard({ singleNews, teams }) {
  if (!singleNews || singleNews.length === 0) return;
  if (!teams || teams.length === 0) return;

  const {
    Categories: categories,
    Content: content,
    OriginalSource: author,
    TimeAgo: time,
    Title: title,
    TeamID: teamId,
  } = singleNews;

  const filteredTeam = teams.filter((team) => team.TeamID === teamId);
  const teamLogoUrl = filteredTeam.at(0).WikipediaLogoUrl;

  return (
    <article className="grid grid-cols-[3fr_9fr] mb-12">
      <div className="flex items-center justify-center">
        <Link to={`/teams/${teamId}`}>
          <img className="max-w-[240px]" src={teamLogoUrl} alt="Team Logo" />
        </Link>
      </div>
      <div className="text-stone-900 dark:text-stone-100">
        <p className="inline-block px-4 py-2 bg-blue-800 text-stone-100 rounded-full text-xs font-bold">
          {categories}
        </p>
        <h3 className="text-2xl font-medium my-1">{title}</h3>
        <p className="text-sm text-blue-800 font-bold  uppercase mb-4">
          {time}
        </p>
        <p className="opacity-70 mb-2">{content}</p>
        <p className="flex items-center gap-2 text-orange-500">
          <span className="italic">Author: {author}</span>
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
