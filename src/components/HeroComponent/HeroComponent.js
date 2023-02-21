import { useEffect, useState } from "react";
import ellipse from "../../images/ellipse.svg";
import watchImage1 from "../../images/watchImage1.svg";
import DOMPurify from "dompurify";

const HeroComponent = ({ title, description, convertedContent }) => {
  const [content, setContent] = useState([]);

  const fetchDataFromJson = () => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setContent(data));
  };

  useEffect(() => {
    fetchDataFromJson();
  }, [title]);

  // receives an HTML string as an argument and returns an object with the sanitized HTML
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  return (
    <div className="w-full md:px-20">
      <div className="absolute top-0">
        <div className="relative z-10">
          <img
            src={ellipse}
            alt="ellipse-img"
            className="h-auto w-[18.75vw] max-w-[360px] "
          />
          <h3 className="absolute mb-[2.083vw] md:mb-[5vw] bottom-0 text-center m-auto text-[3.906vw] w-full text-white">
            Smarty
          </h3>
        </div>
      </div>

      <div className="top-16 flex justify-around items-center md:flex-row flex-col ">
        <div className="w-[52.708vw] max-w-[1012px] h-[52.708vw] max-h-[1012px] rounded-full  bg-gray flex justify-center items-center">
          <img src={watchImage1} alt="watch-img" />
        </div>
        <div className="ml-7">
          <h1 className="h1-styled text-left break-all w-full md:w-[410px]">
            {title ? title : content.map((item) => item.title)}
          </h1>

          <h5 className="h5-styled break-all text-center md:text-left w-[290px]">
            {description ? (
              <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(convertedContent)}
              ></div>
            ) : (
              content.map((item) => item.description)
            )}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
