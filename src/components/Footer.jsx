import { Link } from "react-router-dom";
import { data } from "../constant";

const FooterLinkComponent = (props) => {
  return (
    <div className="mt-3">
      <ul className="flex flex-col gap-4">{props.children}</ul>
    </div>
  );
};

const FooterLink = ({ dir, title }) => {
  return (
    <li>
      <Link to={dir}>{title}</Link>
    </li>
  );
};
const Footer = () => {
  return (
    <footer className="h-auto bg-black w-full text-white">
      <div className="flex justify-center paddingX paddingY ">
        <div className=" md:mt-0 mt-4 flex md:flex-wrap md:flex-row flex-col lg:items-start item-center md:gap-30 gap-20">
          <div className="footer__Div">
            <h3 className="footerHeader">Exclusive</h3>
            <div className="mt-3">
              <h3 className="footerHeader md:text-start text-center">
                Subscribe
              </h3>
              <p className="mt-3 mb-3 footerLink md:text-start text-center">
                Get 10% off your first order
              </p>

              <form>
                <div className="flex md:gap-4 justify-between py-3 px-4 items-center border-1 border-white md:w-[200px] w-[300px]">
                  <input
                    type="email"
                    className="w-[80%] outline-none"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="cursor-pointer">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <path
                        d="M8.91199 9.9998H2.99999L1.02299 2.1348C1.01033 2.0891 1.00262 2.04216 0.999989 1.9948C0.977989 1.2738 1.77199 0.773804 2.45999 1.1038L21 9.9998L2.45999 18.8958C1.77999 19.2228 0.995989 18.7368 0.999989 18.0288C1.00201 17.9655 1.01313 17.9029 1.03299 17.8428L2.49999 12.9998"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer__Div ">
            <h3 className="footerHeader">{data.footerData[0].id}</h3>
            <div className="mt-3">
              <div className="flex flex-col gap-4">
                {data.footerData[0].support.map((data) => (
                  <p
                    key={data.id}
                    className="footerLink md:text-start text-center"
                  >
                    {data.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="footer__Div ">
            <h3 className="footerHeader">{data.footerData[1].id}</h3>
            <FooterLinkComponent>
              {data.footerData[1].support.map((data) => (
                <FooterLink key={data.id} {...data} />
              ))}
            </FooterLinkComponent>
          </div>
          <div className="footer__Div ">
            <h3 className="footerHeader">{data.footerData[2].id}</h3>
            <FooterLinkComponent>
              {data.footerData[2].support.map((data) => (
                <FooterLink key={data.id} {...data} />
              ))}
            </FooterLinkComponent>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
