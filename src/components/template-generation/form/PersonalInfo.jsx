import useAuth from "@/auth/useAuth";
import Loading from "@/components/Loading";
import TemplateForm from "@/components/dialog/UserForm";
import { getCardsByUserData } from "@/redux/slices/templateSlice";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PersonalInfo = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { userDetails, loading } = useSelector((state) => state.template);
  useEffect(() => {
    dispatch(getCardsByUserData(user?.id));
  }, []);

  if (loading) {
    return <Loading />
  }
  return <TemplateForm className="w-full rounded-3xl bg-white p-4 h-fit" />;
};

export default PersonalInfo;
