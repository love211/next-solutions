import useAuth from "@/auth/useAuth";
import Loading from "@/components/Loading";
import NoData from "@/components/NoData";
import IndividualCardLayout from "@/components/TemplateLayout";
import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { getCardsByUserData } from "@/redux/slices/templateSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserCards = () => {
  const dispatch = useDispatch();
  const { cardsData, loading } = useSelector((state) => state.template);
  const { user } = useAuth();
  useEffect(() => {
    dispatch(getCardsByUserData(user?.id));
  }, []);

  if (cardsData?.length === 0 && !loading) {
    return <NoData />;
  }
  if (loading) {
    <Loading />;
  }
  return (
    // <IndividualCardLayout>
      <div className="grid h-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-fit">
        {cardsData?.map((card) => (
          <div key={card.id} className="flex max-h-[28rem] w-full">
            <PreviewTemplate data={card} cardId={card?.templateId} />
          </div>
        ))}
      </div>
    // </IndividualCardLayout>
  );
};
export default UserCards;
