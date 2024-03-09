import Link from "next/link";
import Image from "next/image";
import InfoSection from "@/components/InfoSection";
import CallToAction from "@/components/CallToAction";
import ShortenedUrlCard from "@/components/ShortenedUrlCard";
import workingImg from "@/assets/illustration-working.svg";

export default function Home() {
  return (
    <>
      <div className="bg-white pb-40 md:pb-30 pt-20 md:pt-10 overflow-hidden">
        <div className="flex flex-col mt-6 xl:flex-row xl:items-center xl:mt-[4.875rem] max-w-container mx-auto">
          <Image src={workingImg} alt="hero" className=" min-w-[400px] xl:order-1 xl:min-w-[733px] xl:ml-[6.375rem] " />
          <div className="mt-9 text-center max-w-[670px] w-full mx-auto xl:mt-0 xl:text-left xl:flex-shrink-0 md:space-y-5">
            <h1 className="font-bold text-[#34313D] text-5xl md:text-6xl lg:text-7xl">
              More than just shorter links
            </h1>
            <p className="text-[#9E9AA8] text-xl lg:text-2xl">
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <Link href={"#"} className="inline-block mt-8 bg-[#2BD0D0] text-h6 leading-h6 text-white font-bold px-10 py-[0.8125rem] rounded-full xl:mt-[2.375rem] transition-colors hover:bg-[#9AE3E3]">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto">
        <ShortenedUrlCard />
        <InfoSection />
      </div>
      <CallToAction />
    </>
  );
}
