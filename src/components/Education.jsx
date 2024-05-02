import React from "react";

function Education() {
  return (
    <div id="education">
      <div className="py-6 font-sans text-3xl italic font-black">Education</div>
      <div className="flex flex-col gap-4 p-4 font-mono rounded-lg cursor-pointer project">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-sans text-xl font-bold">
            <h1>PUCIT, Old Campus</h1>
            <span className="px-2 py-1 font-mono text-xs font-medium rounded bg-neutral-300">
              2020-Present
            </span>
          </div>
          <div className="text-lg">B.S. Information Technology</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
