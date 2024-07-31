import { apiEndpoints } from "@/api/apiEndPoint";
import apiService from "@/api/axios";
import useAuth from "@/auth/useAuth";
import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { getCardsByUserData } from "@/redux/slices/templateSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserCards = () => {
  // const userId = useParams();
  const dispatch = useDispatch();
  const { cardsData } = useSelector((state) => state.template);
  const { user } = useAuth();
  useEffect(() => {
    dispatch(getCardsByUserData(user.id));
  }, []);

  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cardsData?.map((card) => (
        <PreviewTemplate key={card.id} data={card} />
      ))}
    </div>
  );
};
export default UserCards;
