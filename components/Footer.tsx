import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

function Footer() {
  return (
    <footer className="w-full mb-5 md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level ?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>

        <a href="mailto:iamhanif101@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm font-light md:font-normal">
          {" "}
          Copyright © 2024 Md Hanif{" "}
        </p>

        <div className="flex items-center md:gap-6 gap-3 mt-2">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opqcity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={img} alt="images" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
