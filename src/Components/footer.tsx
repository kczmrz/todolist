import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer()
{
    return (<>
    <footer className="bg-slate-900 text-white py-5">
    
    <p className="text-center text-2xl"><FontAwesomeIcon icon={faGithub} className="text-3xl" color={'white'}/> by Kczmrz</p>
    
   
   </footer>
    </>)
}