import { useLocation, useParams } from "react-router";
import DigitalCard2 from "../digitalCards/DigitalCard2";
import DigitalCard3 from "../digitalCards/DigitalCard3";
import IndividualCardLayout from "../components/TemplateLayout";
import DigitalCard6 from "../digitalCards/DitialCard6";
import CardWave from "../digitalCards/CardWave";
import CardCheque from "../digitalCards/CheckCard";

const Template = () => {
  const cardId = useParams();
  console.log("cardId", cardId);

  let cardToRender = {
    1: <CardWave />,
    2: <CardCheque />,
    3: <DigitalCard6 />,
    4: <DigitalCard2 />,
    5: <DigitalCard3 />,
    6: <CardWave />,
    7: <CardCheque />,
  };
  return <IndividualCardLayout>{cardToRender[cardId[1]]}</IndividualCardLayout>;
};
export default Template;
