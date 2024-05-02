import React from "react";
import arcCard from "../assets/arc-card.png";
function DevCards() {
  return (
    <div>
      <div className="py-4 font-sans text-3xl italic font-black">
        Cards for show-off
      </div>
      <div className="flex items-center gap-4 p-4">
        <a href="https://app.daily.dev/shaheerinit">
          <img
            src="https://api.daily.dev/devcards/478ed2c9a6ba461e9589b6b087f9e8a2.png?r=xws"
            alt="shaheerinit's Dev Card"
            className="transition-all rounded-md h-96 hover:skew-y-6"
          />
        </a>
        <img
          className="transition-all rounded-md hover:shadow-lg h-96 hover:skew-y-6"
          src={arcCard}
          alt="Arc Browser Card"
        />
      </div>
    </div>
  );
}

export default DevCards;
