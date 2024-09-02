type Props = {
  competitor: {
    _id: string;
    _creationTime: number;
    background?: string | undefined;
    name: string;
    image: string;
    count: number;
  };
};
const Competitor = ({ competitor }: Props) => {
  const backgroundStyle = {
    width: "100%",
    height: "300px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const handleVote = () => {
    alert("Voted");
  };
  return (
    <div style={backgroundStyle} className="relative h-auto rounded w-52">
      <div className="absolute flex items-center justify-center w-10 h-10 text-center text-white bg-green-400 rounded-full right-1 top-1">
        <h1>{competitor.count}</h1>
      </div>
      <button
        onClick={handleVote}
        className="absolute bottom-0 left-0 right-0 p-2 text-white bg-green-400 rounded-bl rounded-br cursor-pointer"
        aria-label={`Vote for ${competitor.name}`}
      >
        Vote
      </button>
    </div>
  );
};

export default Competitor;
