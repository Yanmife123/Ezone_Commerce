import { NavigationS } from "../../components";
import { Images } from "../../constant";

const Contact = () => {
  const navigatedir = ["home", "contact"];
  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex gap-3 md:mb-4 mb-6">
          {navigatedir.map((link, index) => (
            <NavigationS
              key={link}
              link_dir={link}
              index={index}
              color={
                index === navigatedir.length - 1 ? "text-black" : "text-grey"
              }
              hidden={index === navigatedir.length - 1 ? "hidden" : ""}
            />
          ))}
        </div>
        <div className="mt-[80px]">
          <div className="flex gap-10 h-auto sm:flex-row flex-col">
            <div className="flex-1  py-9 px-7 flex flex-col gap-6 bg-white rounded-[5px] black__shadow">
              <div className="">
                <div className="flex items-center gap-3">
                  <img src={Images.iconPhone} alt="email icon" />
                  <h4 className="font-poppins font-medium text-black text-base">
                    Call To Us
                  </h4>
                </div>
                <p className="text-sm text-black font-normal mt-[12px]">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm text-black font-normal mt-[8px] mb-3">
                  Phone: +8801611112222
                </p>
              </div>
              <hr />
              <div className="">
                <div className="flex items-center gap-3">
                  <img src={Images.iconEmail} alt="email icon" />
                  <h4 className="font-poppins font-medium text-black text-base">
                    Write To US
                  </h4>
                </div>
                <p className="text-sm text-black font-normal mt-[12px]">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm text-black font-normal mt-[8px]">
                  Emails: customer@exclusive.com
                </p>
                <p className="text-sm text-black font-normal mt-[8px]">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
            <div className="flex-3 py-6 px-8 black__shadow">
              <div>
                <form action="">
                  <div className="flex gap-[20px] flex-wrap justify-center">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none"
                    />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your Phone"
                      required
                      className=" flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      id=""
                      className="outline-none px-6 py-3 bg-smoke w-full h-[240px]"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="submit"
                      className="font-alt bg-crimson text-white text-[15px] py-3 px-10 rounded-[4px] "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
