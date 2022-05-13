import Image from "next/image";
import Link from "next/link";
import MottoCard from "../components/mottoCard";
const Home = () => (
  <div className="mb-20">
    <div className="bg-purple-300 flex flex-col lg:flex-row">
      <div className="py-20 mx-2 lg:mx-10 my-auto">
        <div className="text-5xl font-semibold ">Welcome to Tecna</div>
        <div className="text-xl">
          An organization dedicated to making rich, complete, fully open-sourced
          applications.
        </div>
        <div className="my-2">
          <button className="btn">Explore</button>
        </div>
      </div>
      <div className="mx-3 lg:mx-20 pb-2 rounded-lg filter drop-shadow-md my-5 bg-white">
        <div>
          <img
            src={"/media/img/home_password_manager.png"}
            className="h-full w-fit"
          />
        </div>

        <div className="flex justify-center text-sm    transition px-2 py-1  rounded-md hover:text-gray-800 w-fit mx-auto btn-ghost">
          <Link href={"https://github.com/SiddhantMadhur/passwordmanager"}>
            <a target={"_blank"}>Sid's Password Manager</a>
          </Link>
        </div>
      </div>
      {/**
        
     */}
    </div>
    <div className="">
      <div className="my-5 mx-2 lg:mx-10">
        <div className="text-5xl text-center py-3">Our Idealogy</div>
        <div className="flex flex-col lg:flex-row gap-5">
          <MottoCard
            title={"Software should be honest."}
            body="We are fully committed to an Open-Source Mentality. All our products aim to reach a status of being 100% open, including any dependency used, and all codes (including this websites) are available on GitHub."
            HeroSVG={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            )}
          />
          <MottoCard
            title={"Communication should be easy."}
            body={
              "You shouldn't have to jump through fifteen hurdles to report an issue. Found an error in the code? Or just a typo? You can simply admit an issue on Github and it will be addressed as soon as possible."
            }
            HeroSVG={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            )}
          />
        </div>
        <div className="my-5 flex flex-col lg:flex-row gap-5">
          <MottoCard
            title="Free Open-Sourced Software doesn't have to look bad."
            body="We believe that FOSS doesn't need to look bad in order to perform well, or perform bad in order to look good. We use a bare-bones stack without Electron so performant apps are produced. "
            HeroSVG={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            )}
          />
          <MottoCard
            title="Your privacy should be ensured."
            body={"Every app produced by Tecna will include an \"Offline\" mode. This means you can use every service produced by us without providing any data or creating accounts. Do note some apps might require an online account for full functionality."}
            HeroSVG={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            )}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
