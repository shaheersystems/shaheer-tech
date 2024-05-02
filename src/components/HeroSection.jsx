import React from "react";
import resume from "../assets/shaheer-resume.pdf";
function HeroSection() {
  return (
    <div className="flex flex-col gap-6 font-mono">
      <h1 className="font-sans text-3xl font-black sm:italic md:text-4xl lg:text-5xl">
        Howdy! I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Shaheer.
        </span>
      </h1>
      <span className="font-mono">
        Passionate Software Engineer & Freelancer
      </span>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="font-mono">Total Hours Coded (In record): </h2>
        <img
          src="https://wakatime.com/badge/user/b4765517-ceef-4698-b02b-fc23c33e2839.svg"
          alt="Wakatime stats"
        />
      </div>
      <p className="font-mono">
        🚀 Code maestro sculpting digital dreams with elegance and precision.
        From pixels to algorithms, I turn ideas into seamless realities. Let's
        redefine the future, one line of code at a time. 💻✨
      </p>
      <div className="flex items-center gap-4">
        <a
          download={true}
          href={resume}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded-md bg-neutral-900 hover:bg-neutral-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={18}
            height={18}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M3.09502 10C3.03241 10.457 3 10.9245 3 11.4C3 16.7019 7.02944 21 12 21C16.9706 21 21 16.7019 21 11.4C21 10.9245 20.9676 10.457 20.905 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 13L12 3M12 13C11.2998 13 9.99153 11.0057 9.5 10.5M12 13C12.7002 13 14.0085 11.0057 14.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download Resume
        </a>
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
