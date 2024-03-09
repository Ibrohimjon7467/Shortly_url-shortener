import Link from "next/link";

function CallToAction() {
  return (
    <div className="bg-violet-950 mt-20 bg-very-dark-purple px-4 py-[5.625rem] text-center text-[#FFFFFF] bg-bg-boost-mobile bg-no-repeat bg-cover xl:mt-44 xl:px-10 xl:py-14 xl:bg-bg-boost-desktop xl:bg-center">
      <h1 className="text-h4 leading-h4 font-bold tracking-[-1] xl:text-h3 xl:leading-h3">
        Boost your links today
      </h1>
      <Link href="#" className="bg-[#2BD0D0] inline-block mt-4 rounded-full hover:bg-[#9AE3E3] px-10 py-[0.8125rem] font-bold text-h6 leading-h6 xl:mt-8 transition-colors">
        Get Started
      </Link>
    </div>
  );
}

export default CallToAction;
