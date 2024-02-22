import Logo from "./Images/Logo.svg";
import fbLogo from "./Images/fbLogo.svg";
import zkLogo from "./Images/zkLogo.svg";
import { ClockIcon} from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="App">
      <nav className=" flex flex-col justify-between w-[100vw] h-17 items-center">
        <div className="bg-[#1E1E2A] h-14 text-white w-full flex justify-center items-center">
          <div className="flex">
          <a href="#" ><img className="w-7 h-7 fill-white" src={fbLogo} alt="fb" /></a>
          <a href="https://zk.mk/neno-2?choice=Rw" ><img className="w-7 h-7 fill-white" src={zkLogo} alt="zk" /></a>
          </div>
          <ClockIcon className="w-4 h-4"/>
        </div>
        <div className="bg-[#eee] h-16 w-full"></div>
      </nav>
    </div>
  );
}

export default App;
