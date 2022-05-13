import Image from "next/image";
import Link from "next/link";
const Home = () => (
  <div className="bg-blue-300 flex flex-col  lg:flex-row">
    <div className="py-20 mx-2 lg:mx-10">
      <div className="text-5xl font-bold">Welcome to Tecna</div>
      <div className="text-xl">
        An organization dedicated to making rich, complete, fully open-sourced
        applications.
      </div>
      <div className="my-2">
        <button className="btn">Explore</button>
      </div>
    </div>
    <div className="mx-20 pb-2 rounded-lg filter drop-shadow-md my-5 bg-white">
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
  </div>
);

export default Home;
