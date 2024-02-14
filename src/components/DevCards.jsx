import React from "react";

function DevCards() {
  return (
    <div>
      <div className="py-4 font-sans text-3xl italic font-black">
        Daily Dev Profile
      </div>
      <div className="p-4">
        <a href="https://app.daily.dev/shaheerinit">
          <img
            src="https://api.daily.dev/devcards/478ed2c9a6ba461e9589b6b087f9e8a2.png?r=xws"
            width="300"
            alt="shaheerinit's Dev Card"
          />
        </a>
      </div>
    </div>
  );
}

export default DevCards;
