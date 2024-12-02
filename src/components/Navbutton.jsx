import React, {useState} from "react";
import { TypeAnimation } from 'react-type-animation';

const Navbutton = (text) => {
    
    const {content, href} = text;

    const[isHovered, setIsHovered] = useState(false);


        const handlehover = () => {
            setIsHovered(true);
        }

        const handlehoverout = () => {
            setIsHovered(false);
    }


    return(
        <div onMouseOver={handlehover} onMouseOut={handlehoverout} 
        className="flex items-center justify-center w-1 py-1 px-12 rounded-3xl 
        bg-[#050508] transition ease-in delay-100 hover:scale-105 hover:bg-[#4998A9] duration-200 "
        >
            <a className="text-white text-lg rounded-xl mx-auto" href={href}>
                {isHovered ? (
                    <TypeAnimation 
                        sequence={[
                            content,
                            1000,
                        ]}
                        
                        speed={20}
                        className="text-lg"
                    />): 
                (content)}
            </a>
        </div>
    );
}

export default Navbutton