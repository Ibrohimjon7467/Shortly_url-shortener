"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  shortenedUrl: string;
  searchString: string;
  toggleCopy: boolean;
  setToggleCopy: Dispatch<SetStateAction<boolean>>;
};

function Card({ shortenedUrl, searchString, toggleCopy, setToggleCopy,
}: Props) {
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => console.log(shortenedUrl))
      .catch((error) => console.error(error))
      .finally(() => {
        setToggleCopy(true);
      });
  };

  return (
    <div className="bg-white flex justify-center flex-col items-center mx-auto mt-10 rounded-xl space-y-4 p-6 md:flex-row md:items-center md:space-y-0 md:space-x-10 shadow-sm">
      <div className="flex flex-col space-y-2 w-full font-bold md:flex-row md:items-center md:space-y-0 md:justify-between md:space-x-0 md:flex-wrap">
        <h1 className="truncate text-[#34313D] text-base w-[45%]">{searchString}</h1>
        <a href={`${shortenedUrl}`} className="text-[#2BD0D0] text-base" target="_blank">
          {shortenedUrl}
        </a>
      </div>
      <button onClick={handleCopyLink} className={ !toggleCopy ? "bg-[#2BD0D0] text-white text-base font-bold p-3 rounded-md hover:bg-[#9AE3E3] disabled:bg-teal-800 w-full md:w-auto md:px-10" : "bg-[#3A3054] text-white font-bold p-3 rounded-md w-full md:w-auto md:px-10"}>
        {!toggleCopy ? "Copy" : "Copied!"}
      </button>
    </div>
  );
}

export default Card;
