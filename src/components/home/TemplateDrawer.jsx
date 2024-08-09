import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { CustomDrawer } from "../custom-ui/Drawer";
import { useNavigate } from "react-router";
import { PATH } from "@/routes/path";

const TemplateDrawer = ({ open, onClose, data }) => {
  const navigate = useNavigate();
  let { title = "", description = "", id = null } = data || {};

  let template = id ? (
    <PreviewTemplate
      data={{}}
      cardId={id}
      customClass={"h-fit w-fit max-w-fit py-[2rem]"}
    />
  ) : null;

  const handleCreate = () => {
    navigate(PATH.templateForm.root(data.title.replace(/\s+/g, "")), {
      state: { data: data.id },
    });
  };
  return (
    <CustomDrawer
      open={open}
      setOpen={onClose}
      title={title}
      description={description}
      content={template}
      onCreate={handleCreate}
    />
  );
};

export default TemplateDrawer;
