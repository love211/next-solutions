import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { CustomDrawer } from "../custom-ui/Drawer";

const TemplateDrawer = ({ open, onClose, data }) => {
  let { title = "", description = "", id = null } = data || {};

  let template = id ? (
<PreviewTemplate data={{}} cardId={id} customClass={"max-h-[200px] w-fit max-w-fit"} />
  ) : null;

  return (
    <CustomDrawer
      open={open}
      setOpen={onClose}
      title={title}
      description={description}
      content={template}
    />
  );
};

export default TemplateDrawer;
