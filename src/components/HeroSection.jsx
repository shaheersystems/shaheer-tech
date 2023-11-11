import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col gap-6 font-mono">
      <h1 className="font-sans text-3xl font-black sm:italic md:text-4xl lg:text-5xl">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          M. Shaheer
        </span>
      </h1>
      <span className="font-mono">
        Passionate Software Engineer & Freelancer
      </span>
      <p className="font-mono">
        🚀 Code maestro sculpting digital dreams with elegance and precision.
        From pixels to algorithms, I turn ideas into seamless realities. Let's
        redefine the future, one line of code at a time. 💻✨
      </p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-gray-200">
          <svg
            width="18"
            height="18"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path
              d="M18 28.5C16.7953 28.5 15.7412 28.0419 14.9882 27.1257L6.70588 17.0479C5.95294 16.1317 5.80235 14.7575 6.25412 13.6886C6.70588 12.6198 7.76 11.8563 8.96471 11.8563H12.4282V6.51198C12.4282 4.52695 14.0847 3 16.0424 3H20.1082C22.0659 3 23.5718 4.52695 23.5718 6.51198V11.8563H27.0353C28.24 11.8563 29.2941 12.4671 29.7459 13.6886C30.1976 14.7575 30.0471 15.979 29.2941 16.8952L21.0118 27.1257C20.2588 28.0419 19.2047 28.5 18 28.5ZM8.96471 15.0629L17.2471 25.1407C17.5482 25.4461 17.8494 25.4461 18 25.4461C18.1506 25.4461 18.4518 25.4461 18.7529 25.1407L27.0353 15.0629H22.0659C21.1624 15.0629 20.56 14.4521 20.56 13.5359V6.51198C20.56 6.20659 20.2588 6.05389 20.1082 6.05389H16.0424C15.7412 6.05389 15.44 6.35928 15.44 6.51198V13.3832C15.44 14.2994 14.8376 14.9102 13.9341 14.9102H8.96471V15.0629Z"
              fill="black"
            />
            <path
              d="M27.6269 33H8.22388C5.23881 33 3 30.75 3 27.75V24C3 23.1 3.59701 22.5 4.49254 22.5C5.38806 22.5 5.98507 23.1 5.98507 24V27.75C5.98507 28.95 7.02985 30 8.22388 30H27.7761C28.9701 30 30.0149 28.95 30.0149 27.75V24C30.0149 23.1 30.6119 22.5 31.5075 22.5C32.403 22.5 33 23.1 33 24V27.75C32.8507 30.75 30.6119 33 27.6269 33Z"
              fill="black"
            />
          </svg>
          Download Resume
        </button>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5896 1.55057C24.5911 0.883256 31.3315 6.90354 31.5001 14.666L31.5004 14.6985C31.5004 17.4119 30.6505 19.9478 29.1441 22.1255L29.1291 22.1468L21.5156 32.7541C21.5005 32.7752 21.4849 32.7958 21.4687 32.8161C19.7187 35.0053 16.2768 35.14 14.5952 32.7476L6.97928 22.1367C4.99404 19.3221 3.95082 15.7686 4.79446 12.0078C5.83472 6.3688 10.7516 2.21758 16.5438 1.5551C16.559 1.55336 16.5743 1.55185 16.5896 1.55057ZM16.8618 4.5383C12.2259 5.07795 8.50294 8.37822 7.74025 12.5763C7.73635 12.5977 7.73199 12.6191 7.72716 12.6403C7.09152 15.4394 7.83782 18.1466 9.42737 20.4026L17.0478 31.0197C17.4539 31.6002 18.4667 31.7362 19.1046 30.9684L26.684 20.4084C27.857 18.7087 28.4971 16.772 28.5004 14.7148C28.3615 8.74743 23.1753 4.02423 16.8618 4.5383Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0004 11.8496C16.4264 11.8496 15.1504 13.1256 15.1504 14.6996C15.1504 16.2736 16.4264 17.5496 18.0004 17.5496C19.5744 17.5496 20.8504 16.2736 20.8504 14.6996C20.8504 13.1256 19.5744 11.8496 18.0004 11.8496ZM12.1504 14.6996C12.1504 11.4687 14.7695 8.84961 18.0004 8.84961C21.2313 8.84961 23.8504 11.4687 23.8504 14.6996C23.8504 17.9305 21.2313 20.5496 18.0004 20.5496C14.7695 20.5496 12.1504 17.9305 12.1504 14.6996Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0004 11.8496C16.4264 11.8496 15.1504 13.1256 15.1504 14.6996C15.1504 16.2736 16.4264 17.5496 18.0004 17.5496C19.5744 17.5496 20.8504 16.2736 20.8504 14.6996C20.8504 13.1256 19.5744 11.8496 18.0004 11.8496ZM12.1504 14.6996C12.1504 11.4687 14.7695 8.84961 18.0004 8.84961C21.2313 8.84961 23.8504 11.4687 23.8504 14.6996C23.8504 17.9305 21.2313 20.5496 18.0004 20.5496C14.7695 20.5496 12.1504 17.9305 12.1504 14.6996Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0004 11.8496C16.4264 11.8496 15.1504 13.1256 15.1504 14.6996C15.1504 16.2736 16.4264 17.5496 18.0004 17.5496C19.5744 17.5496 20.8504 16.2736 20.8504 14.6996C20.8504 13.1256 19.5744 11.8496 18.0004 11.8496ZM12.1504 14.6996C12.1504 11.4687 14.7695 8.84961 18.0004 8.84961C21.2313 8.84961 23.8504 11.4687 23.8504 14.6996C23.8504 17.9305 21.2313 20.5496 18.0004 20.5496C14.7695 20.5496 12.1504 17.9305 12.1504 14.6996Z"
              fill="black"
            />
          </svg>
          <span className="font-mono text-xs md:text-sm">Lahore, Pakistan</span>
        </div>
        <div className="flex items-center gap-3">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-xs md:text-sm">
            Available for work
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
