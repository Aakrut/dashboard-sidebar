import { useState } from "react";
import Logo from './assets/logo.png';
import Control from './assets/control.png'
import ChartFill from "./assets/Chart_fill.png"
import Chat from "./assets/Chat.png";
import User from "./assets/User.png";
import Calendar from "./assets/Calendar.png";
import Search from "./assets/Search.png";
import Chart from "./assets/Chart.png";
import Folder from "./assets/Folder.png";
import Settings from "./assets/Setting.png";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: ChartFill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart},
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Settings },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control} alt='control-logo'
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo} alt="logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt='menu' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;
