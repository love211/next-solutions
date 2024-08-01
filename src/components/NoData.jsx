let awsURL = "";
import image404 from "../assets/404.jpg";
const NoData = () => {
  console.log("404u");
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-fit min-w-fit flex flex-col items-center gap-4">
        <img src={image404} alt="" className="w-20 h-24" />
        <p className="text-primary text-xl text-pretty">
          No Templates are created yet..! please create one.
        </p>
      </div>
    </div>
  );
};
export default NoData;
