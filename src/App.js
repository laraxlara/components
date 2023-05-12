import "./App.css";
import iphone from "./images/iphone.png";
import card from "./images/card.svg";
import bg from "./images/bg.jpg";
import banner from "./images/banner.svg";

function App() {
  return (
    <div className="App">
      <section className="relative max-w-screen-2xl flex flex-col md:flex-row justify-between items-center min-h-[700px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="absolute bottom-0 left- w-[650px] h-[650px] bg-transparent z-0">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path id="blob" fill="#19FFBD">
              <animate
                attributeName="d"
                dur="9700ms"
                repeatCount="indefinite"
                values="M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z;
                
                M410,351Q367,452,259.5,435.5Q152,419,123.5,334.5Q95,250,111.5,144Q128,38,233,68Q338,98,395.5,174Q453,250,410,351Z;
                
                M418,356.5Q373,463,272.5,423.5Q172,384,102.5,317Q33,250,90.5,161Q148,72,238,93.5Q328,115,395.5,182.5Q463,250,418,356.5Z;
                
                M405.83955,332.68579Q345.63899,415.37158,240.07214,432.62034Q134.50528,449.8691,73.11225,349.93455Q11.71921,250,87.45989,174.6805Q163.20056,99.36101,268.90781,66.64568Q374.61505,33.93034,420.32758,141.96517Q466.04011,250,405.83955,332.68579Z;
                
                M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z"
              ></animate>
            </path>
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-transparent z-0">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path id="blob" fill=" #19FFBD">
              <animate
                attributeName="d"
                dur="9400ms"
                repeatCount="indefinite"
                values="M421,330.5Q343,411,252.5,407Q162,403,118.5,326.5Q75,250,111,161Q147,72,250.5,70.5Q354,69,426.5,159.5Q499,250,421,330.5Z;
                
                M410,351Q367,452,259.5,435.5Q152,419,123.5,334.5Q95,250,111.5,144Q128,38,233,68Q338,98,395.5,174Q453,250,410,351Z;
                
                M379.5,337Q351,424,255,415.5Q159,407,97.5,328.5Q36,250,93,163.5Q150,77,246,83.5Q342,90,375,170Q408,250,379.5,337Z;
                
                M405.83955,332.68579Q345.63899,415.37158,240.07214,432.62034Q134.50528,449.8691,73.11225,349.93455Q11.71921,250,87.45989,174.6805Q163.20056,99.36101,268.90781,66.64568Q374.61505,33.93034,420.32758,141.96517Q466.04011,250,405.83955,332.68579Z;
                
                M421,330.5Q343,411,252.5,407Q162,403,118.5,326.5Q75,250,111,161Q147,72,250.5,70.5Q354,69,426.5,159.5Q499,250,421,330.5Z"
              ></animate>
            </path>
          </svg>
        </div>

        <div class="flex justify-between items-center flex-col xl:flex-row relative z-1 w-full">
          <div class="flex flex-1 flex-col sm:text-center py-12 lg:items-start">
            <h1 class="text-black-800 mb-8 text-4xl font-bold font-sans sm:text-5xl md:mb-12 md:text-7xl md:text-start tracking-wide">
              Lorem ipsum doloret sit amet
            </h1>

            <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg md:text-start">
              This is a div of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-0 text-black flex-1">
            <div class="w-full rounded-lg bg-gray-400 flex flex-col p-6 bg-opacity-50 shadow-xl sm:w-1/2 sm:p-8">
              <div class="mb-4 flex flex-col items-start justify-between gap-4">
                <h3 class="text-2xl font-semibold text-black sm:text-3xl">
                  Pro Bundle
                </h3>
                <svg
                  version="1.0"
                  className="w-10 my-4"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#3d3d3d"
                        d="M60,52H4c-2.211,0-4,1.789-4,4s1.789,4,4,4h56c2.211,0,4-1.789,4-4S62.211,52,60,52z"
                      ></path>{" "}
                      <path
                        fill="#3d3d3d"
                        d="M60,8c0-2.211-1.789-4-4-4H8C5.789,4,4,5.789,4,8v40h56V8z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p class="text-gray-700">
                  This is a div of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random.{" "}
                </p>
              </div>
              <ul class="mb-6 space-y-2 text-gray-700 mx-auto">
                <li class="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Ebook</span>
                </li>
                <li class="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Video course</span>
                </li>
                <li class="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Multiple examples</span>
                </li>
              </ul>
              <form class="flex w-full my-4 gap-2 md:max-w-md">
                <input
                  placeholder="Email"
                  class="w-full flex-1 rounded border bg-gray-50 px-1 py-2 text-gray-800 placeholder-gray-500 outline-none ring-[#19FFBD3] transition duration-100 focus:ring"
                />
                <button class="inline-block rounded bg-[#19FFBD] px-2 py-2 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Sign up
                </button>
              </form>
            </div>

            <div class="rounded-lg flex flex-col bg-gray-300 bg-opacity-50 p-6 sm:w-1/2 sm:rounded-l-none sm:p-8">
              <h3 class="text-2xl font-semibold sm:text-3xl">Free Program</h3>
              <svg
                version="1.0"
                className="w-10 my-6"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xmlSpace="preserve"
                fill="#000000"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="#3d3d3d"
                      d="M60,52H4c-2.211,0-4,1.789-4,4s1.789,4,4,4h56c2.211,0,4-1.789,4-4S62.211,52,60,52z"
                    ></path>{" "}
                    <path
                      fill="#3d3d3d"
                      d="M60,8c0-2.211-1.789-4-4-4H8C5.789,4,4,5.789,4,8v40h56V8z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p class="text-black">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
              <form class="flex w-full my-4 gap-2 md:max-w-md">
                <input
                  placeholder="Email"
                  class="w-full flex-1 rounded border bg-gray-50 px-1 py-2 text-gray-800 placeholder-gray-500 outline-none ring-[#19FFBD] transition duration-100 focus:ring"
                />
                <button class="inline-block rounded bg-[#19FFBD] px-2 py-2 text-center text-sm font-semibold text-black outline-none ring-[#19FFBD] transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-md mx-auto my-12">
        <div class="w-full rounded-lg bg-white shadow-2xl flex flex-col relative">
          {/* <div className='absolute z-0 top-0 left-0 w-[400px]'>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <path id="blob" d="M385.5,285.5Q372,321,359,369Q346,417,298,406Q250,395,211.5,389Q173,383,123.5,367Q74,351,81.5,300.5Q89,250,109,215Q129,180,138,126Q147,72,198.5,90.5Q250,109,288.5,112.5Q327,116,351.5,146.5Q376,177,387.5,213.5Q399,250,385.5,285.5Z" fill="#00cec9"></path>
          </svg>
        </div> */}
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover rounded-t-lg"
          />

          <div class="mb-4 flex flex-col items-start justify-between gap-4 relative z-1 p-6">
            <h3 class="text-2xl font-semibold text-black sm:text-3xl">
              Pro Bundle
            </h3>
            <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
            <p class="text-gray-700">
              This is a div of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random.{" "}
            </p>
            <a
              href="#"
              className="w-full rounded bg-[#19FFBD] px-8 py-2 text-center text-sm font-semibold text-black outline-none text-center mt-4"
            >
              See More
            </a>
          </div>
        </div>
      </section>

      <section className="max-screen-md mx-auto my-[10rem] min-h-screen">
        <div class="mb-6 px-12 flex flex-col justify-center items-center">
          <h1 class="text-black-800 mb-8 text-4xl font-bold font-sans sm:text-5xl md:mb-12 md:text-6xl tracking-wider">
            Lorem ipsum doloret sit amet
          </h1>
          <p class="mb-8 max-w-4xl text-gray-500 lg:text-lg text-center">
            This is a div of some simple filler text, also known as placeholder
            text. It shares some characteristics of a real written text but is
            random. This is a div of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random. This is a div of some simple filler text, also
            known as placeholder text. It shares some characteristics of a real
            written text but is random.
          </p>
        </div>

        <div class="grid place-items-center mx-12 gap-x-2 gap-y-6 sm:grid-cols-1 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 relative">
          <div className="flex flex-col gap-12">
            <div className="absolute bottom-0 left- w-[650px] h-[650px] bg-transparent z-[-1]">
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                id="blobSvg"
              >
                <path id="blob" fill="#19FFBD">
                  <animate
                    attributeName="d"
                    dur="9700ms"
                    repeatCount="indefinite"
                    values="M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z;
                
                M410,351Q367,452,259.5,435.5Q152,419,123.5,334.5Q95,250,111.5,144Q128,38,233,68Q338,98,395.5,174Q453,250,410,351Z;
                
                M418,356.5Q373,463,272.5,423.5Q172,384,102.5,317Q33,250,90.5,161Q148,72,238,93.5Q328,115,395.5,182.5Q463,250,418,356.5Z;
                
                M405.83955,332.68579Q345.63899,415.37158,240.07214,432.62034Q134.50528,449.8691,73.11225,349.93455Q11.71921,250,87.45989,174.6805Q163.20056,99.36101,268.90781,66.64568Q374.61505,33.93034,420.32758,141.96517Q466.04011,250,405.83955,332.68579Z;
                
                M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z"
                  ></animate>
                </path>
              </svg>
            </div>
            <div className="grid justify-items-end gap-4 text-end border-2 border-gray-100 shadow-lg p-4 bg-white bg-opacity-50">
              <div className="w-24 h-24 flex justify-center items-center bg-[#19FFBD] rounded-lg text-3xl">
                1
              </div>
              <h5 className="text-3xl">Lorem ipsum</h5>
              <p>
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>

            <div className="grid justify-items-end gap-4 text-end border-2 border-gray-100 shadow-lg p-4 bg-white bg-opacity-50">
              <div className="w-24 h-24 flex justify-center items-center bg-[#19FFBD] rounded-lg text-3xl">
                1
              </div>
              <h5 className="text-3xl">Lorem ipsum</h5>
              <p>
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div>
            <img src={iphone} alt="phone" />
          </div>

          <div className="flex flex-col gap-12">
            <div className="grid justify-items-start gap-4 text-start border-2 border-gray-100 shadow-lg p-4 bg-white bg-opacity-50">
              <div className="w-24 h-24 flex justify-center items-center bg-[#19FFBD] rounded-lg text-3xl">
                1
              </div>
              <h5 className="text-3xl">Lorem ipsum</h5>
              <p>
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>

            <div className="grid justify-items-start gap-4 text-start border-2 border-gray-100 shadow-lg p-4 bg-white bg-opacity-50">
              <div className="w-24 h-24 flex justify-center items-center bg-[#19FFBD] rounded-lg text-3xl">
                1
              </div>
              <h5 className="text-3xl">Lorem ipsum</h5>
              <p>
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl  mx-auto my-[10rem]">
        <div className="rounded-lg bg-white shadow-2xl flex justify-center items-center p-6 relative z-1">
          <div className="flex flex-col gap-4">
            <h3 class="text-2xl font-semibold text-black sm:text-5xl">
              Something about the app
            </h3>
            <p class="mb-8 max-w-4xl text-gray-500 lg:text-lg text-start">
              This is a div of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random. This is a div of some simple filler text, also
              known as placeholder text. It shares some characteristics of a
              real written text but is random. This is a div of some simple
              filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random.
            </p>
            <div className="flex gap-6">
              <div class="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
                <div class="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-xs">Download on the</div>
                  <div class="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>

              <div class="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                <div class="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-xs">GET IT ON</div>
                  <div class="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-2 hidden md:block">
            <img src={card} alt="/" />
          </div>

          <div className="absolute z-1 w-full bottom-0">
            <svg
              className="rounded-b-lg object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#19FFBD"
                fill-opacity="1"
                d="M0,32L48,37.3C96,43,192,53,288,101.3C384,149,480,235,576,240C672,245,768,171,864,133.3C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl flex justify-center items-center mx-auto h-screen relative">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl text-black">
            We invest in the world’s potential
          </h1>
          <p class="mb-8 max-w-4xl text-gray-500 lg:text-lg text-center">
            This is a div of some simple filler text, also known as placeholder
            text. It shares some characteristics of a real written text but is
            random. This is a div of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random. This is a div of some simple filler text, also
            known as placeholder text. It shares some characteristics of a real
            written text but is random.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 rounded-lg bg-[#19FFBD] hover:bg-[#19FFBD] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
        </div>

        <div className="absolute z-1 bottom-0 w-full left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#19FFBD"
              fill-opacity="1"
              d="M0,32L34.3,48C68.6,64,137,96,206,117.3C274.3,139,343,149,411,165.3C480,181,549,203,617,181.3C685.7,160,754,96,823,85.3C891.4,75,960,117,1029,154.7C1097.1,192,1166,224,1234,218.7C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="max-w-5xl  mx-auto my-[10rem]">
        <div className="rounded-lg bg-[#19FFBD] shadow-2xl flex justify-between items-center p-6 relative z-1">
          <div className="absolute bottom-0 z-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFFFFF "
                fill-opacity="1"
                d="M0,224L34.3,208C68.6,192,137,160,206,165.3C274.3,171,343,213,411,208C480,203,549,149,617,149.3C685.7,149,754,203,823,202.7C891.4,203,960,149,1029,112C1097.1,75,1166,53,1234,37.3C1302.9,21,1371,11,1406,5.3L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="relative z-1 flex flex-col gap-12">
            <h4 class="text-2xl font-semibold sm:text-3xl text-gray-700">
              Lorem ipsum doloret sit amet
            </h4>
            <button class="w-1/2 inline-block rounded bg-gray-700 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-gray-700 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Download now
            </button>
          </div>

          <div className="relative hidden sm:block">
            <img src={banner} alt="/" className="h-48 relative z-1" />
          </div>
        </div>
      </section>

      <div className="bg-white py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-10">
            <div className="md:pt-8">
              <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-6xl md:mb-6 md:text-left">
                <span className="block mb-2">Gallerie Nazionali</span>
                <span>Barberini Corsini</span>
              </h1>
              <span className="block h-[0.02rem] bg-gray-400 my-4"></span>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The history of Palazzo Barberini as a national museum, open
                regularly to the public, began in 1953 when the palazzo became
                the second venue of the National Gallery of Antique Art, along
                with Palazzo Corsini, where the Gallery had first opened in
                1895.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                While the collection in the Galleria Corsini is still organized
                and displayed in keeping with the 18th century inventory, at
                Palazzo Barberini the display follows the development of the
                principal Italian schools of painting from the 1200s to the
                1700s. Unlike the historical display in the Galleria Corsini, at
                Palazzo Barberini the museum installation may be supplemented by
                new acquisitions or reorganized according to different criteria.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-2">
                Over the years, the national collection on display in Palazzo
                Corsini had expanded through acquisitions and donations, like
                the collections of the Torlonia family and the Monte di Pietà in
                1892, the bequest of Henriette Hertz in 1915 and the acquisition
                of the Chigi family collection in 1918. The growth of the
                collection made it necessary to find a new exhibition venue, and
                the choice fell on Palazzo Barberini.
              </p>
            </div>

            <img
              src={bg}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-6 mt-8">
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            While the collection in the Galleria Corsini is still organized and
            displayed in keeping with the 18th century inventory, at Palazzo
            Barberini the display follows the development of the principal
            Italian schools of painting from the 1200s to the 1700s. Unlike the
            historical display in the Galleria Corsini, at Palazzo Barberini the
            museum installation may be supplemented by new acquisitions or
            reorganized according to different criteria.
          </p>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            While the collection in the Galleria Corsini is still organized and
            displayed in keeping with the 18th century inventory, at Palazzo
            Barberini the display follows the development of the principal
            Italian schools of painting from the 1200s to the 1700s. Unlike the
            historical display in the Galleria Corsini, at Palazzo Barberini the
            museum installation may be supplemented by new acquisitions or
            reorganized according to different criteria.
          </p>
        </div>
      </div>

      <section className="max-w-5xl  mx-auto my-[10rem]">
        <div className="rounded-lg bg-white shadow-2xl flex flex-col md:flex-row justify-between items-center border-2 border-gray-100 relative z-1">
          <div class="mb-4 flex flex-col items-start justify-between gap-4 relative z-1 p-6 ">
            <h3 class="text-2xl font-semibold text-black sm:text-3xl">
              Pro Bundle
            </h3>
            <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
            <p class="text-gray-700">
              This is a div of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random.{" "}
            </p>
            <a
              href="#"
              className="w-1/2 rounded bg-[#19FFBD] px-8 py-2 text-center text-sm font-semibold text-black outline-none text-center mt-4"
            >
              See More
            </a>
          </div>

          <img
            src={bg}
            alt="/"
            className="h-full w-full md:w-2/5 object-cover md:object-cover rounded-lg md:rounded-l-none md:rounded-r-lg"
          />
        </div>
      </section>

      <section className="max-w-screen-xl flex justify-center items-center mx-auto relative">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center border-2 border-[#19FFBD] relative z-1">
            <img src={bg} alt="/" className="rounded-full w-40 h-40 mt-4" />
            <div class="mb-4 flex flex-col items-center justify-between gap-4 relative z-1 p-6 text-center">
              <h1 class="text-center text-black text-2xl">Name Surname</h1>
              <p class="text-gray-700">CEO</p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <span className="block h-[0.5px] bg-gray-300 w-full my-2"></span>
              <p class="text-gray-700">
                This is a div of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
