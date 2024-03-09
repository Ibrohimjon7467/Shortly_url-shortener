"use client";

import { useState } from "react";
import Card from "./Card";
import axios from "axios";

function ShortenedUrlCard() {

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchedUrl, setSearchedUrl] = useState("");
  const [toggleCopy, setToggleCopy] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    try {
      if (!searchString) return;
      setSearchedUrl(searchString);
      const response = await axios.post("/api/shorten", { url: searchString });
      const shortenedUrl = response.data;
      console.log("Shortened URL:", shortenedUrl);
      setShortenedUrl(shortenedUrl.result_url);
    } catch (error) {
      console.error(error);
    };

  };

  return (
    <div className="md:w-full px-4 xl:px-0">
      <div className="bg-violet-950 w-full -mt-20 mx-auto p-8 md:-mt-14 rounded-xl  md:py-10 bg-shorten-mobile bg-no-repeat bg-cover xl:px-16 xl:py-[3.25rem] xl:bg-shorten-desktop xl:bg-left-bottom">
        <form className="flex flex-col space-y-5 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-10">
          <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} className="rounded-md p-3 md:flex-1" placeholder="Shorten a link here..." />
          <button type="submit" onClick={handleSearch} className="bg-[#2BD0D0] text-white font-bold p-3 rounded-md hover:bg-[#9AE3E3] md:px-10">
            Shorten It!
          </button>
        </form>
      </div>

      {!searchedUrl ? null : (
        <Card shortenedUrl={shortenedUrl}
          searchString={searchedUrl}
          toggleCopy={toggleCopy}
          setToggleCopy={setToggleCopy}
        />
      )}
    </div>
  );
}

export default ShortenedUrlCard;
