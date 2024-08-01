import { useLocation, useParams } from "react-router";
import DigitalCard2 from "../digitalCards/DigitalCard2";
import DigitalCard3 from "../digitalCards/DigitalCard3";
import IndividualCardLayout from "../components/TemplateLayout";
import DigitalCard6 from "../digitalCards/DitialCard6";
import CardWave from "../digitalCards/CardWave";
import CardCheque from "../digitalCards/CheckCard";
import DigitalCard7 from "@/digitalCards/DigitalCard7";
import DigitalCard8 from "@/digitalCards/DigitalCard8";
import DigitalCard9 from "@/digitalCards/DigitalCard9";

export let cardToRender = {
  1: CardWave,
  2: CardCheque,
  3: DigitalCard6,
  4: DigitalCard2,
  5: DigitalCard3,
  6: CardWave,
  7: CardCheque,
  8: DigitalCard7,
  9: DigitalCard8,
  10: DigitalCard9,
};
const Template = () => {
  const cardId = useParams();
  const Card = cardToRender[cardId[1]];
  return (
    <IndividualCardLayout>
      <Card />
    </IndividualCardLayout>
  );
};
export default Template;
