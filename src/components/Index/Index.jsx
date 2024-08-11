import logo from "../../../public/logo.png";

const Index = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center pt-[29.50px] pb-[19.50px] bg-white shadow-[0_2px_60px_-10px_rgba(0,0,0,0.3)]">
          <div className="logo flex items-center gap-[12px]">
            <img src={logo} alt="logo" className="w-[54px] h-[49.5px]" />
            <p className="text-[#595C6A] font-bold text-[24px] leading-[17px] font-averiaSansLibre">
              <a href="#">COGNITO</a>
            </p>
          </div>
          <div>
            <ul className="flex gap-[28px]">
              <li>
                <a
                  href="#"
                  className="font-inter text-[19px] font-semibold leading-[23px] tracking--[2%] text-[#6C7896]"
                >
                  KS3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-[19px] font-semibold leading-[23px] tracking--[2%] text-[#6C7896]"
                >
                  GCSE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-[19px] font-semibold leading-[23px] tracking--[2%] text-[#6C7896]"
                >
                  Entrance Exams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-[19px] font-semibold leading-[23px] tracking--[2%] text-[#6C7896]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-[19px] font-semibold leading-[23px] tracking--[2%] text-[#6C7896]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-[12px]">
              <li className="px-[45px] py-[12.5px] bg-[#0283E6] border-[1px] border-[#0283E6] cursor-pointer text-white  rounded-[4px] flex items-center hover:text-[#0283E6] hover:bg-transparent transition-all duration-500 font-inter">
                <a href="#">Login</a>
              </li>
              <li className="px-[45px] py-[12.5px] bg-[#0283E6] border-[1px] border-[#0283E6] cursor-pointer text-white rounded-[4px] flex items-center hover:text-[#0283E6] hover:bg-transparent transition-all duration-500 font-inter">
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
