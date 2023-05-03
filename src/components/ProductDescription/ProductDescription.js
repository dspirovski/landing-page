import watchImage2 from "../../images/watchImage2.svg";
import rectangle from "../../images/rectangle.svg";
import ellipseBig from "../../images/ellipseBig.svg";

/**

Renders the product description section with health and fitness partner information and an image of the product.
@return {JSX.Element} JSX.Element representing the product description section.
*/

const ProductDescription = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row justify-center relative">
      <div className="flex justify-center mt-10 md:mt-0 items-center md:items-start flex-col ">
        <h2 className="h2-styled">Your health & fitness partner</h2>
        <h5 className="h5-styled text-left">
          Vestibulum nec semper ipsum, quis ornare turpis. Morbi in risus velit.
          Integer <br></br>
          consectetur lacinia nibh non rhoncus. Quisque varius sapien a rutrum
          congue. Sed <br></br>
          eget convallis eros. Nulla facilisis nibh tincidunt, iaculis lorem
          sed, ornare elit.
        </h5>
        <button className="h5-styled hover:cursor-pointer mb-4 px-2 md:w-[8.021vw] md:max-w-[154px] md:h-[2.344vw] md:max-h-[45px] border-2 border-[#0086CB] rounded-[36px] text-[#0086CB] mt-5">
          See more
        </button>
      </div>

      {/* right section */}

      <div className="w-[100%] md:w-[52.083vw] max-w-[1000px] h-[41.667vw] max-h-[800px]">
        <img
          src={rectangle}
          alt="rectangle-img"
          className="absolute bottom-0 mb-[6.667vw] m-auto right-0 h-auto w-[50%] md:w-[31.979vw] max-w-[614px]"
        />
        <div className="">
          <div className="relative">
            <img
              src={ellipseBig}
              alt="elipse-img"
              className="absolute top-0 left-0 m-auto right-0 h-auto w-[38.073vw] max-w-[731px]"
            />
            <img
              src={watchImage2}
              alt="watch-img"
              className="absolute top-0 left-0 m-auto right-0 h-auto w-[27.135vw] max-w-[521px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
