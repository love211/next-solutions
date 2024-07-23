import { useLocation, useParams } from "react-router";
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import Card5 from "../components/cards/Card5";
import Card6 from "../components/cards/Card6";
import Card4 from "../components/cards/Card4";
import PYCard from "../components/cards/PiCard";
const Template = () => {
  const cardId = useParams();
  const { pathname } = useLocation();
  console.log("pathname", pathname, cardId);

  let cardToRender = {
    1: <Card5 />,
    2: <Card1 />,
    3: <Card2 />,
    4: <Card3 />,
    5: <PYCard />,
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
      {cardToRender[cardId[1]]}
    </div>
  );
};
export default Template;
