import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center text-stone-900 dark:text-stone-100">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <img src="../../error-404.svg" alt="4Ball4" />
        </div>
        <div>
          <h1 className="max-w-4xl text-5xl leading-tight font-extrabold mb-8">
            Oops! The page you are looking for is lost in the Bermuda Triangle
          </h1>
        </div>
        <Link to={navigate(-1)} className="text-blue-600 hover:underline">
          &larr; Go Back
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
