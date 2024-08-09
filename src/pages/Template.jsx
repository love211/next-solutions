import { useLocation, useParams } from "react-router";
import IndividualCardLayout from "../components/TemplateLayout";
import DigitalCard7 from "@/digitalCards/DigitalCard7";
import DigitalCard8 from "@/digitalCards/DigitalCard8";
import DigitalCard9 from "@/digitalCards/DigitalCard9";
import DigitalCardNew1 from "@/digitalCards/DigitalCardNew1";
import DigitalCardNew2 from "@/digitalCards/DigitalCardNew2";
import DigitalCardNew3 from "@/digitalCards/DigitalCardNew3";
import DigitalCArdNew4 from "@/digitalCards/DigitalCardNew4";
import DigitalCardNew5 from "@/digitalCards/DigitalCardNew5";
import Cardd01 from "@/digitalCards/Cardd01";
import Cardd02 from "@/digitalCards/Cardd02";
import Cardd03 from "@/digitalCards/Cardd03";

export let cardToRender = {
  1: Cardd01,
  2: Cardd02,
  3: Cardd03,
  4: DigitalCardNew5,
  5: DigitalCard9,
  6: DigitalCArdNew4,
  7: DigitalCardNew3,
  8: DigitalCardNew1,
  9: DigitalCard7,
  10: DigitalCard8,
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
