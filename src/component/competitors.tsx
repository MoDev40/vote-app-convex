import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Competitor from "./competitor";

const Competitors = () => {
  const competitors = useQuery(api.competitors.getCompetitor);

  if (!competitors)
    return (
      <div className="container flex flex-col items-center justify-center h-screen mx-auto">
        <h1>Loading....</h1>;
      </div>
    );

  if (competitors.length === 0)
    return (
      <div className="container flex flex-col items-center justify-center h-screen mx-auto">
        <h1>not found competitors</h1>
      </div>
    );

  return (
    <div className="grid gap-3 place-items-center md:grid-cols-4">
      {competitors.map((competitor) => (
        <Competitor key={competitor._id} competitor={competitor} />
      ))}
    </div>
  );
};

export default Competitors;
