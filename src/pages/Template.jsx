import { useLocation, useParams } from "react-router";

import DigitalCard1 from "../digitalCards/DigitalCard1";
import DigitalCard2 from "../digitalCards/DigitalCard2";
import DigitalCard3 from "../digitalCards/DigitalCard3";
import DigitalCard4 from "../digitalCards/DigitalCard4";
import PYCard from "../components/cards/PiCard";
import Card3 from "../Cards/Card3";
import IndividualCardLayout from "../components/TemplateLayout";
const Template = () => {
  const cardId = useParams();
  const { pathname } = useLocation();

  let cardToRender = {
    1: <DigitalCard3 />,
    2: <DigitalCard4 />,
    3: <DigitalCard2 />,
    4: <DigitalCard1 />,
    // 5: <Card3 />,
  };
  return <IndividualCardLayout>{cardToRender[cardId[1]]}</IndividualCardLayout>;
};
export default Template;
