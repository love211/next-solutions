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
import DigitalCardNew1 from "@/digitalCards/DigitalCardNew1";
import DigitalCardNew2 from "@/digitalCards/DigitalCardNew2";
import DigitalCardNew3 from "@/digitalCards/DigitalCardNew3";
import DigitalCArdNew4 from "@/digitalCards/DigitalCardNew4";
import DigitalCardNew5 from "@/digitalCards/DigitalCardNew5";

export let cardToRender = {
  1: CardWave,
  2: CardCheque,
  3: DigitalCard6,
  4: DigitalCard2,
  5: DigitalCard3,
  6: DigitalCard7,
  7: DigitalCard8,
  8: DigitalCard9,
  9: DigitalCard8,
  10: DigitalCard9,
  11: DigitalCardNew1,
  12: DigitalCardNew2,
  13: DigitalCardNew3,
  14: DigitalCArdNew4,
  15: DigitalCardNew5,
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
