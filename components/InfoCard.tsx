import Image from "next/image";

type Props = {
  icon: any;
  title: string;
  subTitle: string;
};

function InfoCard({ icon, title, subTitle }: Props) {
  return (
    <div className="bg-white relative rounded-md md:h-full md:p-2 lg:p-4 shadow-md">
      <div className="bg-[#3A3054] h-24 w-24 left-1/2 -top-12 absolute rounded-full -translate-x-1/2 lg:left-24 flex items-center justify-center">
        <Image src={icon} alt="icon" />
      </div>
      <div className="p-8 pt-16 text-center flex flex-col space-y-4 md:text-start w-64 xl:w-80">
        <h1 className="font-bold text-[#34313D] text-2xl">{title}</h1>
        <p className="text-[#9E9AA8] text-lg">{subTitle}</p>
      </div>
    </div>
  );
}

export default InfoCard;
