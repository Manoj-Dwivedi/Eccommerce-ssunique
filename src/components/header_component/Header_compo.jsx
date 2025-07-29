import { Link } from 'react-router-dom';
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiTwitterLine } from "react-icons/ri";
import { TbBrandInstagram } from "react-icons/tb";

export const Call=({phone})=>{
    
    return<>
        <Link to='tel:{phone}'><MdCall  className="inline-fontweight absolute "/> {phone}</Link>
    </>
}
export const Mail=({mail})=>{
    return<>
        <Link to='mailto:{mail}'><IoIosMail  className="inline-fontweight text-2xl"/>{mail}</Link>
    </>
}

export const Facebook=()=>{
    return<>
        <Link to='https://www.facebook.com/' target="_blank"><PiFacebookLogoBold className="text-2xl opacity-75 hover:opacity-100" /></Link>
    </>

}

export const Twitter=()=>{
    return<>
        <Link to='https://x.com/' target="_blank"><RiTwitterLine className="text-2xl opacity-75 hover:opacity-100" /></Link>
    </>
}
export const Instagram=()=>{
    return<>
        <Link to='https://www.instagram.com/' target="_blank"><TbBrandInstagram className="text-2xl opacity-75 hover:opacity-100" /></Link>
    </>
}