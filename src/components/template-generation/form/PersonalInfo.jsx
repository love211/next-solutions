import Loading from "@/components/Loading";
import TemplateForm from "@/components/dialog/UserForm";
import { useSelector } from "react-redux";

const PersonalInfo = () => {
  const { loading } = useSelector((state) => state.template);

  if (loading) {
    return <Loading />;
  }
  return <TemplateForm className="w-full rounded-3xl bg-white p-4 h-fit" />;
};

export default PersonalInfo;
