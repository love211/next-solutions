import React from "react";
import img2 from "../assets/img2.png";
import MobileWrapper from "./MobileWrapper";

const DigitalCard1 = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <MobileWrapper>
        <div className="flex justify-center items-center text-white text-center border-[#545454]">
          <div className="mock-up-1 m overflow-hidden text-center bg-[#0B2E4D] border-[#545454] rounded-[1.25rem] flex flex-col outline outline-[5px] outline-black ">
            <div className="flex flex-col justify-center items-center w-full h-[28rem]">
              <div className="h-full flex flex-col justify-end pb-8">
                <img
                  src="https://i.pinimg.com/564x/c6/b4/ec/c6b4ec629a470bd2eb1d3328226495cc.jpg"
                  alt="profile"
                  className=" w-40 h-40  rounded-full border-[4px]"
                />
                <div className="">
                  <h3 className="text-2xl font-normal tracking-[0.075rem]">
                    John Smith
                  </h3>
                  <p className="text-base">Marketing Expert</p>
                  <p className="text-base">ABC Company</p>
                </div>
              </div>
            </div>
            <div className="pb-12 w-full">
              <div className="bg-[#064C7A] flex justify-center items-center flex-col p-8 ">
                <h4 className="font-semibold">About Me</h4>
                <p className="font-light text-base lg:w-80 w-full">
                  I'm a highly skilled marketing profession with over 7 years of
                  industry experience.
                </p>
              </div>
              <div className="bg-[#B9DBD8] text-[#03062D]">
                <div className="flex pt-[0.94rem] lg:pr-[9.44rem] pb-[0.87rem] lg:pl-[2.44rem] px-2 gap-4">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15.8792 15.6405L16.3352 15.1875L15.2762 14.1235L14.8222 14.5765L15.8792 15.6405ZM17.8642 14.9975L19.7752 16.0365L20.4902 14.7185L18.5802 13.6805L17.8642 14.9975ZM20.1422 18.1005L18.7222 19.5135L19.7792 20.5765L21.1992 19.1645L20.1422 18.1005ZM17.8562 19.9675C16.4062 20.1035 12.6562 19.9825 8.59417 15.9445L7.53617 17.0075C11.9682 21.4145 16.1872 21.6305 17.9962 21.4615L17.8562 19.9675ZM8.59417 15.9445C4.72317 12.0945 4.08117 8.85747 4.00117 7.45247L2.50317 7.53747C2.60317 9.30547 3.39817 12.8935 7.53617 17.0075L8.59417 15.9445ZM9.96917 9.76447L10.2562 9.47847L9.20017 8.41547L8.91317 8.70047L9.96917 9.76447ZM10.4842 5.84347L9.22417 4.15947L8.02317 5.05947L9.28317 6.74247L10.4842 5.84347ZM4.98317 3.79247L3.41317 5.35247L4.47117 6.41647L6.04017 4.85647L4.98317 3.79247ZM9.44117 9.23247C8.91117 8.70047 8.91117 8.70047 8.91117 8.70247H8.90917L8.90617 8.70647C8.85896 8.75466 8.81643 8.80723 8.77917 8.86347C8.72517 8.94347 8.66617 9.04847 8.61617 9.18147C8.4944 9.52479 8.46408 9.89388 8.52817 10.2525C8.66217 11.1175 9.25817 12.2605 10.7842 13.7785L11.8422 12.7145C10.4132 11.2945 10.0732 10.4305 10.0102 10.0225C9.98017 9.82847 10.0112 9.73247 10.0202 9.71047C10.0252 9.69647 10.0272 9.69547 10.0202 9.70447C10.0114 9.71834 10.0013 9.73139 9.99017 9.74347L9.98017 9.75347C9.97694 9.75658 9.97361 9.75958 9.97017 9.76247L9.44117 9.23247ZM10.7842 13.7785C12.3112 15.2965 13.4602 15.8885 14.3262 16.0205C14.7692 16.0885 15.1262 16.0345 15.3972 15.9335C15.5487 15.8774 15.6905 15.7977 15.8172 15.6975C15.8344 15.6831 15.8511 15.6681 15.8672 15.6525L15.8742 15.6465L15.8772 15.6435L15.8782 15.6415C15.8782 15.6415 15.8792 15.6405 15.3502 15.1085C14.8202 14.5765 14.8232 14.5755 14.8232 14.5755L14.8252 14.5735L14.8272 14.5715L14.8332 14.5665L14.8432 14.5565C14.8552 14.5457 14.8679 14.5357 14.8812 14.5265C14.8912 14.5195 14.8882 14.5225 14.8742 14.5285C14.8492 14.5375 14.7512 14.5685 14.5542 14.5385C14.1402 14.4745 13.2702 14.1345 11.8422 12.7145L10.7842 13.7785ZM9.22417 4.15847C8.20417 2.79847 6.20017 2.58247 4.98317 3.79247L6.04017 4.85647C6.57217 4.32747 7.51617 4.38247 8.02317 5.05947L9.22417 4.15847ZM4.00217 7.45347C3.98217 7.10747 4.14117 6.74547 4.47117 6.41747L3.41217 5.35347C2.87517 5.88747 2.45217 6.64347 2.50317 7.53747L4.00217 7.45347ZM18.7222 19.5135C18.4482 19.7875 18.1522 19.9415 17.8572 19.9685L17.9962 21.4615C18.7312 21.3925 19.3322 21.0225 19.7802 20.5775L18.7222 19.5135ZM10.2562 9.47847C11.2412 8.49947 11.3142 6.95247 10.4852 5.84447L9.28417 6.74347C9.68717 7.28247 9.62717 7.98947 9.19917 8.41647L10.2562 9.47847ZM19.7762 16.0375C20.5932 16.4815 20.7202 17.5275 20.1432 18.1015L21.2012 19.1645C22.5412 17.8315 22.1282 15.6085 20.4912 14.7195L19.7762 16.0375ZM16.3352 15.1885C16.7192 14.8065 17.3372 14.7125 17.8652 14.9985L18.5812 13.6815C17.4972 13.0915 16.1532 13.2545 15.2772 14.1245L16.3352 15.1885Z"
                        fill="#03062D"
                      />
                    </svg>
                  </span>
                  <a href="">+91 7846589803</a>
                </div>
                <div className="flex pt-[0.94rem] lg:pr-[9.44rem] pb-[0.87rem] lg:pl-[2.44rem] px-2 gap-4">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
                        stroke="#03062D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.25 7.5L12 12.75L18.75 7.5"
                        stroke="#03062D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <a href="">helen@nextsolution.com</a>
                </div>
                <div className="flex pt-[0.94rem] lg:pr-[9.44rem] lg:pb-[0.87rem] lg:pl-[2.44rem] px-2 gap-4">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M19.5 10.25C19.5 12.7033 18.5254 15.056 16.7907 16.7907C15.056 18.5254 12.7033 19.5 10.25 19.5C7.79675 19.5 5.44397 18.5254 3.70926 16.7907C1.97455 15.056 1 12.7033 1 10.25M19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25M19.5 10.25H1"
                        stroke="#03062D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8073 10.25C13.6325 13.6326 12.3866 16.8721 10.2496 19.5C8.11258 16.8721 6.86665 13.6326 6.69189 10.25C6.86665 6.86736 8.11258 3.62793 10.2496 1C12.3866 3.62793 13.6325 6.86736 13.8073 10.25Z"
                        stroke="#03062D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <a href="">nextsolution.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileWrapper>
    </div>
  );
};

export default DigitalCard1;
