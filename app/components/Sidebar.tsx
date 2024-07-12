import {
    AiFillFile,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineMenu,
    AiOutlineClose,
  } from "react-icons/ai";


//"fixed  z-50 right-0 h-screen w-[200px]  flex md:hidden "

//bg-[#2f2c2d] flex-col justify-around pl-4 min-w-[200px] text-white.
interface Props{
    isOpen:boolean;
}
const SideBar = ({isOpen=false}:Props) => {
    return (
        <div className={`${isOpen?"flex":"hidden"} right-0 md:flex fixed md:relative w-[200px] h-screen z-50 bg-[#211d1f] flex-col justify-around pl-4 text-white min-w-[200px]`}>
        <div className="text-2xl font-bold">
          <div>
            <p>Steven</p>
          </div>
          <div>
            <p>Matthew</p>
          </div>
          <div>
            <p>Bautista</p>
          </div>
        </div>
  
        <div className="text-xl">
          <div>
            <p>Fullstack</p>
          </div>
          <div>
            <p>Developer</p>
          </div>
        </div>
  
        <div className="flex flex-col gap-2">
          <div className="grid align-middle justify-start">
            <a href={"/StevenMBautista.pdf"} target="_blank" download>
              <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2  w-[150px] cursor-pointer hover:bg-gray-600">
                <div>Resume</div>
                <div className="grid place-items-center">
                  <AiFillFile />
                </div>
              </div>
            </a>
          </div>
          <div className="grid align-middle justify-start">
            <a
              href={"https://www.linkedin.com/in/steven-bautista-04b283159/"}
              target="_blank"
            >
              <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2  w-[150px] cursor-pointer hover:bg-gray-600">
                <div>LinkedIn</div>
                <div className="grid place-items-center">
                  <AiOutlineLinkedin />
                </div>
              </div>
            </a>
          </div>
          <div className="grid align-middle justify-start">
            <a href={"https://github.com/ProgrammerSteve"} target="_blank">
              <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2 w-[150px] cursor-pointer hover:bg-gray-600">
                <div>Github</div>
                <div className="grid place-items-center">
                  <AiOutlineGithub />
                </div>
              </div>
            </a>
          </div>
        </div>
  
        <div className="flex flex-col align-middle gap-3">
          <div className="text-sm">
            <div>Email</div>
            <div className="text-xs">
              <a href="mailto:Stevenmb1995@gmail.com" className="hover:underline">
                Stevenmb1995@gmail.com
              </a>
            </div>
          </div>
          <div className="text-sm">
            <div>Location</div>
            <div className="text-xs">Los Fresnos, TX</div>
          </div>
          <div className="text-sm">
            <div>Phone</div>
            <div className="text-sm">{`(956)639-0218`}</div>
          </div>
        </div>
  
        <div className=""></div>
      </div>
    );
  };

  export default SideBar