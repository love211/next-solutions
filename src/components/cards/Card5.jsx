const Card5 = () => (
  <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
    <div className="relative">
      <img
        className="w-full h-80"
        src="https://i.pinimg.com/474x/bd/55/e8/bd55e878e5bc5b7c6e2912a925a3ae8c.jpg"
        alt="Profile"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
    </div>

    <div className="p-6 text-start">
      <h2 className="text-xl font-bold ">Ralph Edwards</h2>

      <h3 className="text-lg font-light">Co-Founder</h3>
      <p className="text-gray-400 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum
        ac quam accumsan suscipit.
      </p>
      <div className="flex justify-around mt-4">
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <i className="fas fa-globe"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="mt-6 space-y-4">
        <button className="w-full text-black py-2 bg-[#F0EBE5] rounded-lg hover:bg-gray-700">
          Phone
        </button>
        <button className="w-full py-2 text-black bg-[#F0EBE5] rounded-lg hover:bg-gray-700">
          Paypal
        </button>
        <button className="w-full py-2 text-black  bg-[#F0EBE5] rounded-lg hover:bg-gray-700">
          Mail
        </button>
      </div>
    </div>
  </div>
);

export default Card5;
