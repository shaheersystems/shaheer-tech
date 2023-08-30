import React from "react";
function Stack({ icon, link, name }) {
  return (
    <div className='group relative p-2 cursor-pointer rounded hover:bg-gray-200 flex items-center gap-2'>
      <div className='max-w-fit min-w-fit whitespace-nowrap bg-neutral-300 scale-0 left-0 right-0 text-center shadow-lg z-10 group-hover:scale-100 transition-all px-2 py-1 rounded font-mono text-xs absolute -top-7 min-w-fit'>
        {name}
      </div>
      <a href={link} target='_blank'>
        {icon}
      </a>
    </div>
  );
}

export default Stack;
