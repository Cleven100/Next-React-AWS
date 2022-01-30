import TopBar from "./TopBar";
import MenuSite from "./MenuSite";


export default function Header(){

 return (
         <div className="header">
             <TopBar className="top-bar"/>
             <MenuSite />
         </div>      
 )
}