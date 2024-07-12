import Hamburger from "./Hamburger";
interface Props{
    isNavOpen:boolean;
    toggleNav:React.MouseEventHandler<HTMLDivElement>;
}

const NavigationBar=({isNavOpen,toggleNav}:Props)=>{
    return(
        <div className="bg-[#211d1f] h-[75px] flex md:hidden items-center">
        <div className="flex-1 h-[45px]  text-xs sm:text-base grid place-items-center text-center text-white">
          <p className="text-sm">Steven Bautista,</p>
          <p className="text-sm">Fullstack Developer</p>
        </div>
         <Hamburger isOpen={isNavOpen} toggleMenu={toggleNav}/>
      </div>

    )
}
export default NavigationBar