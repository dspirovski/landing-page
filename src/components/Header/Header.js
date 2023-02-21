const Header = () => {
  return (
    <ul className="w-full text-black h-12 p-10 text-lg flex justify-end items-center">
      <li className="header-font-styled ml-5 flex-col justify-center items-center ">
        Login
        <div className="flex justify-around px-2">
          <span className="header-font-styled w-[4px] h-[4px] rounded-full bg-[#83B2EE]"></span>
          <span className="header-font-styled w-[4px] h-[4px] rounded-full bg-[#83B2EE]"></span>
          <span className="header-font-styled w-[4px] h-[4px] rounded-full bg-[#83B2EE]"></span>
        </div>
      </li>
      <li className="header-font-styled ml-5">About</li>
      <li className="header-font-styled ml-5">Blog</li>
      <li className="header-font-styled ml-5 border-2 border-[#83B2EE] text-[#83B2EE] w-[75px] h-[28px] md:w-[131px] md:h-[45px] flex justify-center items-center rounded-[36px] ">
        Contact
      </li>
    </ul>
  );
};

export default Header;
