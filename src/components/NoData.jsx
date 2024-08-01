import image404 from "../assets/404.jpg";
const NoData = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-fit min-w-fit flex flex-col items-center gap-4">
        <div>
          <img src={image404} alt="" className="object-fill" />
        </div>
        <p className="text-primary text-xl text-pretty">
          No Templates are created yet..! please create one.
        </p>
      </div>
    </div>
  );
};
export default NoData;
