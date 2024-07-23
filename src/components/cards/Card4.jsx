import img1 from "../../assets/UserImage.png"

const Card4 = () => {
  return (
    <div className="max-w-sm my-8 p-6 bg-[#132A13] rounded-lg shadow-lg mx-8">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 mx-auto bg-[#8FA855] rounded-full flex items-center justify-center">
            <span className="text-3xl text-white font-bold">X</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">BUSINESS PRO</h2>
        <p className="text-white mb-4">TAGLINE GOES HERE</p>
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 bg-gray-600 rounded-full flex items-center justify-center">
            <img
              src={img1}
              alt="John Smith"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-1">Helen Wilson</h3>
        <p className="text-gray-400 mb-6">Marketing Manager</p>
        <div className="text-left">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 flex items-center justify-center bg-[#8FA855] rounded-full mr-2">
              <i className="fas fa-phone-alt text-white"></i>
            </div>
            <p className="text-gray-400">+01234567890123</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 flex items-center justify-center bg-[#8FA855] rounded-full mr-2">
              <i className="fas fa-globe text-white"></i>
            </div>
            <p className="text-gray-400">www.YOURDOMAIN.com</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 flex items-center justify-center bg-[#8FA855] rounded-full mr-2">
              <i className="fas fa-map-marker-alt text-white"></i>
            </div>
            <p className="text-gray-400">777 SEVENTH AVENUE NEWYORK NY-1211</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
