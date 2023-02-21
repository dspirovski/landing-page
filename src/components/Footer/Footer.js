import facebookIcon from "../../images/facebookIcon.svg";
import linkedinIcon from "../../images/linkedInIcon.svg";
import instagramIcon from "../../images/instagramIcon.svg";

const Footer = () => {
  return (
    <div className="py-[2.292vw] bg-[#161616] mt-[6.667vw] px-[5%] md:px-[7%]">
      <div className="flex justify-between px-10 md:px-0 lg:justify-between items-center border-b border-[#434343] py-[4.167vw]">
        <p className="h3-styled leading-none text-white">
          Together<br></br> through all.
        </p>
        <ul className="flex">
          <li className="socialIcon-styled rounded-full p-1 md:w-[2.969vw] md:max-w-[57px] md:h-[2.969vw] md:max-h-[57px]">
            <img
              src={facebookIcon}
              alt="facebook-img "
              className="w-2 h-2 md:w-[0.521vw] md:w-max-[10px] md:h-[1.146vw] md:h-max-[22px]"
            />
          </li>
          <li className="socialIcon-styled rounded-full p-1 md:w-[2.969vw] md:max-w-[57px] md:h-[2.969vw] md:max-h-[57px]">
            <img
              src={linkedinIcon}
              alt="linkedin-img"
              className="w-2 h-2 md:w-[1.146vw] md:w-max-[22px] md:h-[1.146vw] md:h-max-[22px]"
            />
          </li>
          <li className="socialIcon-styled rounded-full p-1 md:w-[2.969vw] md:max-w-[57px] md:h-[2.969vw] md:max-h-[57px]">
            <img
              src={instagramIcon}
              alt="instagram-img"
              className="w-2 h-2 md:w-[1.146vw] md:w-max-[22px] md:h-[1.146vw] md:h-max-[22px]"
            />
          </li>
          <li className="text-[10px] md:text-[0.938vw] flex items-center justify-center px-1 md:w-[9.479vw] md:w-max-[182px] md:h-[3.073vw] md:h-max[59px]  bg-[#83B2EE] ml-[4.167vw] rounded-[36px] text-white">
            Contact us
          </li>
        </ul>
      </div>
      <div className="flex px-10 md:px-0 justify-between mt-5">
        <span className="text-white h4-styled">Smarty</span>
        <h6 className="text-[#AFAFAF] h6-styled">
          Copyright 2022. All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
