import Link from "next/link";
import kkslogo3 from "../../public/images/kkslogo3.png";

import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 min-h-[120px] border-t border-slate-200 mt-5 flex flex-col md:flex-row md:justify-between p-5 ">
      <div className="w-full md:w-1/2 flex items-center">
        <Link href="www.kkscapitals.com" className="w-fit space-y-2">
          <Image src={kkslogo3} alt="" className="w-56" />
        </Link>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-6 items-end relative">
        <h1 className="text-black/70 font-main md:text-2xl mr-2 md:mr-64">
          Follow Us.
        </h1>
        <div className="flex space-x-4 md:space-x-10">
          <Link
            href="www.kkscapitals.com"
            className="bg-white p-3 rounded-full"
          >
            <FaFacebookF className="w-4 h-4 text-darkBlue" />
          </Link>
          <Link
            href="www.kkscapitals.com"
            className="bg-white p-3 rounded-full"
          >
            <BsInstagram className="w-4 h-4 text-darkBlue" />
          </Link>
          <Link
            href="www.kkscapitals.com"
            className="bg-white p-3 rounded-full"
          >
            <BsTwitter className="w-4 h-4 text-darkBlue" />
          </Link>
          <Link
            href="www.kkscapitals.com"
            className="bg-white p-3 rounded-full"
          >
            <BsLinkedin className="w-4 h-4 text-darkBlue" />
          </Link>
          <Link
            href="www.kkscapitals.com"
            className="bg-white p-3 rounded-full"
          >
            <FaYoutube className="w-4 h-4 text-darkBlue" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
