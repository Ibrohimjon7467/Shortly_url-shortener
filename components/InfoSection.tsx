import InfoCard from "./InfoCard";
import brandRecog from "../assets/icon-brand-recognition.svg";
import detailRec from "../assets/icon-detailed-records.svg";
import fullyCustom from "../assets/icon-fully-customizable.svg";

function InfoSection() {
  return (
    <div className="mt-20 mx-auto px-4 xl:px-0">
      <div className="flex flex-col space-y-4 text-center lg:w-1/2 mx-auto lg:pb-10">
        <h2 className="text-h4 leading-h4 tracking-[-0.7px] font-bold text-[#34313D] xl:text-h3 xl:leading-h3">
          Advanced Statistics
        </h2>
        <p className="mt-4 text-[#9E9AA8] leading-[1.75rem] xl:text-lg xl:leading-[2rem] xl:mt-[1.125rem]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="mt-[5.75rem] relative w-full">
        <div className="bg-teal-400 w-2 h-full absolute top-0 left-1/2 -translate-x-1/2 lg:h-2 lg:top-1/2 lg:right-0 lg:-translate-x-0 lg:left-0 lg:w-full"></div>
        <div className="flex flex-col space-y-16 lg:flex-row justify-between gap-5 lg:space-y-0">
          <InfoCard icon={brandRecog} title="Brand Recognition" subTitle="Boost your brand recognition with each click. Genertic links don't mean a thing. Branded links help instil confidence in your content." />
          <div className="lg:pt-14 lg:h-full">
            <InfoCard icon={detailRec} title="Detailed Records" subTitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
          </div>
          <div className="lg:pt-28 lg:h-full">
            <InfoCard icon={fullyCustom} title="Fully Customizable" subTitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
