import CardTemplate from "../Cards/Card";

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <h1 className="p-4 text-2xl font-medium">
        Get Your Digital Business Card
      </h1>

      <CardTemplate />
    </div>
  );
};

export default Home;
