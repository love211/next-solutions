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

export let cardToRender = {
  1: DigitalCard7,
  2: DigitalCard8,
  3: DigitalCardNew3,
  4: DigitalCardNew5,
  5: DigitalCard9,
  6: DigitalCArdNew4,
  7: DigitalCardNew3,
  8: DigitalCardNew1,
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
