import { apiEndpoints } from "@/api/apiEndPoint";
import apiService from "@/api/axios";
import useAuth from "@/auth/useAuth";
import NoData from "@/components/NoData";
import IndividualCardLayout from "@/components/TemplateLayout";
import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { getCardsByUserData } from "@/redux/slices/templateSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserCards = () => {
  console.log("404CCu");
  // const userId = useParams();
  const dispatch = useDispatch();
  const { cardsData } = useSelector((state) => state.template);
  const { user } = useAuth();
  useEffect(() => {
    dispatch(getCardsByUserData(user.id));
  }, []);

  if (cardsData?.length === 0) {
    return <NoData />;
  }
  return (
    <IndividualCardLayout>
      <div className="grid h-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {cardsData?.map((card) => (
          <div key={card.id} className="flex max-h-[28rem]">
            <PreviewTemplate data={card} cardId={card?.templateId} />
          </div>
        ))}
      </div>
    </IndividualCardLayout>
  );
};
export default UserCards;
