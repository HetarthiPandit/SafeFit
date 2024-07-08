import { useEffect, useState } from "react";
import Logo from "../../assets/images/footerlogo.svg";
import GooglePlay from "../../assets/images/google-play-badge-logo-svgrepo-com.svg";
import Appstore from "../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import {
  APPSTORE,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_MOBILE_NO,
  FACEBOOK,
  GOOGLE_PLAY_STORE,
  INSTAGARM,
  LINKDIN,
  ROUTES,
  WHATSAPP,
} from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = ({ id }) => {
  const socialLinks = [
    { url: FACEBOOK, icon: <FontAwesomeIcon icon={faFacebookF} /> },
    { url: INSTAGARM, icon: <FontAwesomeIcon icon={faInstagram} /> },
    { url: LINKDIN, icon: <FontAwesomeIcon icon={faLinkedin} /> },
  ];
  const shopWithUsLinks = [
    { url: ROUTES.HOME.PATH, text: "Home" },
    { url: ROUTES.STUDIOLOCATION.PATH, text: "Location" },
    { url: ROUTES.TRAINERSLISTING.PATH, text: "Personal Training" },
    // { url: ROUTES.GROUPEVENT.PATH, text: "Group Training" },
    { url: ROUTES.PROGERAMS.PATH, text: "Programs" },
    // { text: "Partnerships", action: () => scrollToContactUs("partner") },
    { text: "Contact Us", action: () => scrollToContactUs("Contact") },
  ];

  const scrollToContactUs = () => {
    // setId(id)
    const contactUsSection = document.getElementById(id || "locations");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  let prevScrollPos = window.pageYOffset;

  const toggleVisibility = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos < currentScrollPos || currentScrollPos === 0); // Check if at top of page
    prevScrollPos = currentScrollPos;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="text-base font-manrope">
      <div className="border-b w-full flex  md:justify-center justify-start items-center">
        <div className="container mx-auto md:py-20 sm:py-14 py-8">
          <div className="flex sm:flex-row flex-col justify-between items-start">
            <div className="w-full sm:w-1/4  lg:mb-0 flex flex-col">
              <div className="flex justify-start">
                <img src={Logo} alt="" />
              </div>
              <p className="text-black lg:mt-6 mt-6  w-full sm:text-start text-base font-medium">
                {COMPANY_ADDRESS}
              </p>
              <div className="my-8 lg:order-3 flex lg:mt-12 gap-4 justify-start items-center ">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black-800 text-2xl text-black hover:text-orange-500 w-10 h-10 border rounded-full flex justify-center items-center"
                  >
                    <div className="text-lg text-[#000000b0]">{link.icon}</div>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left  flex gap-12  md:justify-center justify-start items-start font-inter text-slate-500">
              <div className="">
                <ul>
                  <div className="space-y-3">
                    {shopWithUsLinks.slice(0, 5).map((link, index) => (
                      <li key={index}>
                        {link.url ? (
                          <a
                            href={link.url}
                            className=" text-sm font-medium hover:text-blue-500"
                          >
                            {link.text}
                          </a>
                        ) : (
                          <button
                            onClick={link.action}
                            className=" text-sm font-medium hover:text-blue-500"
                          >
                            {link.text}
                          </button>
                        )}
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
              {/* <ul className="space-y-3">
                {shopWithUsLinks.slice(4).map((link, index) => (
                  <li key={index}>
                    {link.url ? (
                      <a
                        href={link.url}
                        className=" text-sm font-medium hover:text-blue-500"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <button
                        onClick={link.action}
                        className=" text-sm font-medium hover:text-blue-500"
                      >
                        {link.text}
                      </button>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="w-full sm:w-1/3 sm:mb-0 text-left flex gap-12  md:justify-center justify-start items-start font-inter text-slate-500">
              <div className="">
                <div className="mb-4">
                  <a
                    href={COMPANY_MOBILE_NO}
                    className="font-bold text-black hover:text-blue-600"
                  >
                    Call Now: {COMPANY_MOBILE_NO}
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href={COMPANY_EMAIL}
                    className="font-bold text-black hover:text-blue-600"
                  >
                    Email: {COMPANY_EMAIL}
                  </a>
                </div>
                <div className="text-black md:mt-10 md:mb-8 mt-4">
                  <p>
                    Get Fit in Style! Download SafeFit App and Begin Your
                    Exclusive Training Experience!
                  </p>
                </div>
                <div className="flex justify-start items-center lg:gap-9 gap-2 md:mt-0  mt-2 md:w-10/12">
                  <div className=" m-1">
                    <Link to={GOOGLE_PLAY_STORE} target="blank">
                      <img src={GooglePlay} alt="" className="w-80" />
                    </Link>
                  </div>
                  <div className=" m-1">
                    <Link to={APPSTORE} target="blank">
                      <img src={Appstore} alt="" className="w-80" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto p-2 font-dmsans">
          <div className=" flex sm:justify-between justify-center items-center py-3 gap-2 flex-col lg:flex-row text-black text-base ">
            <div className="w-full sm:w-1/3 md:max-content  sm:mb-0 lg:text-base text-xs  sm:mx-0 mx-auto text-center">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="m:w-1/3 text-end  flex gap-1 lg:text-base text-xs ">
              <span className=" "> Powered by</span>
              <Link
                to={"https://www.innobaytsolutions.com/"}
                target="blank"
                className="font-bold text-blue-600"
              >
                Innobaytsolutions
              </Link>
            </div>
          </div>
        </div>
        <Link
          to={WHATSAPP}
          target="blank"
          className={`lg:py-1 lg:px-3  flex items-center justify-center gap-1 lg:shadow-lg lg:bg-[#ffffff] text-black fixed lg:right-[1%] right-[3%] bottom-[2%] z-50  rounded-full ${
            isVisible ? "animate-fadeIn animate-bounce" : "animate-fadeOut"
          }`}
        >
          <div className=" lg:w-8 lg:h-8 w-12 h-12 rounded-full bg-[#25d366] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="lg:text-xl text-3xl text-white"
            />
          </div>
          <span className="lg:block hidden text-sm">Whatsapp</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
