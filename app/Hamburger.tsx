import { FC, useEffect } from "react"


interface NavbarProps {
toggleMenu:React.MouseEventHandler<HTMLDivElement>;
isOpen:boolean;
}
  
const Hamburger:FC<NavbarProps>=({toggleMenu,isOpen})=>{
    useEffect(()=>{
        console.log(isOpen)
      },[isOpen])


    return(
        <div className="div-container z-[99] " onClick={toggleMenu}>
            <div className={`top-bar ${isOpen&&'bar-open-top'}`} />
            <div className={`mid-bar ${isOpen&&'bar-open-middle'}`} />
            <div className={`bottom-bar ${isOpen&&'bar-open-bottom'}`} />
        </div>
       )
}
export default Hamburger