import React, { useState, useRef, useEffect,memo} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import style from './Nav_dropdown/dropdown.module.css'
function Nav({value}) {
    const [menu, setMenu] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const menuRef = useRef(null);
    const dropdownRef = useRef(null)
    //console.log(value)
    // toggle menu onClick finction
    const menuhHandle = () => {
        setMenu(!menu);
    }

    //product toggle dropdown  function onClick
    const productHandle = (e) => {
        // e.stopPropagation();
        setDropdown(prev => !prev);

    }
    // hendel Scroll

    const handleScroll = () => {
        setMenu(true); // Close menu on scroll

    };

    const dropdownScroll = () => {
        setDropdown(false); // Close dropdown menu
    };

    // Close menu And dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(true);
                // setDropdown(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Close menu And dropdown when clicking outside
    useEffect(() => {

        const dropdownClickOutside = (event) => {

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

                setDropdown(false);

            }
        };

        document.addEventListener('mousedown', dropdownClickOutside);
        window.addEventListener('scroll', dropdownScroll);
        return () => {
            document.removeEventListener('mousedown', dropdownClickOutside);
            window.removeEventListener('scroll', dropdownScroll);
        }
    }, []);


    let logostyle = {
        width: '80px',
        height: '90px'
    }
    const number = {
        marginLeft: '-6px',
        marginTop: '-15px',
        backgroundColor: 'green',
        width: '25px',
        padding: '0px',
        height: '25px',
        textAlign: 'center',
        borderRadius: '50%'
    }
    return (
        <div className='z-40 sticky top-0 bg-amber-50 border-b'>
            <div className='container-custom '>
                <div className="flex flex-row">
                    <div className="flex-[40%] md:flex-[15%]">
                        <img style={logostyle} src={logo} alt="loto" />
                    </div>
                    <div className="flex-[20%] md:flex-[70%]" ref={menuRef}>
                        <div className='lg:hidden text-center'>
                            <Link to='' className='inline-block menu-margin' onClick={menuhHandle} >{menu ? <TiThMenuOutline className='text-2xl' /> : <GrFormClose className='text-4xl' />}</Link>
                        </div>
                        <ul className={`${menu ? 'grid py-7' : ''} grid-cols-5 gap-2 text-center z-60 ${menu ? "hidden" : "block ul_width"} lg:grid `}>
                            <li>
                                <Link to='' id={`${menu ? '' : 'menu'}`} >Home</Link>
                            </li>
                            <li>
                                <Link to='/about' id={`${menu ? '' : 'menu'}`}>About</Link>
                            </li>
                            <li ref={dropdownRef}>
                                <Link to='#' className='drop-down' id={`${menu ? '' : 'menu'}`} onClick={productHandle}>Products <span><IoIosArrowDown className='inline-fontweight' /></span>

                                </Link>
                                <div >
                                    {dropdown && (
                                        <div id="dropdown" >
                                            <ul className={`${style.ul} menu-margin`} >
                                                {/* <li>
                                                    <Link className={`${style.anchor}  relative hover:bg-gray-200`} onClick={productHandle} to='/collection'>Shop by Collection</Link>
                                                </li> */}
                                                <li>
                                                    <Link className={`${style.anchor} relative hover:bg-gray-200`} onClick={productHandle} to='/dlac'>DCAL Water softener</Link>
                                                </li>
                                                <li>
                                                    <Link className={`${style.anchor} relative  hover:bg-gray-200`} onClick={productHandle} to='/daddy'>Daddy’s Road</Link>
                                                </li>
                                                <li>
                                                    <Link className={`${style.anchor} relative  hover:bg-gray-200`} onClick={productHandle} to=''>MNFLYNIL</Link>
                                                </li>
                                                <li>
                                                    <Link className={`${style.anchor} relative  hover:bg-gray-200`} onClick={productHandle} to=''>MN gas safety hose pipe</Link>
                                                </li>
                                                <li>
                                                    <Link className={`${style.anchor} relative  hover:bg-gray-200`} onClick={productHandle} to=''>Tyre sealant anti puncture solution</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            </li>
                            <li>
                                <Link to='/daddy' id={`${menu ? '' : 'menu'}`}>Daddy’s Road</Link>
                            </li>
                            <li>
                                <Link to='/contact' id={`${menu ? '' : 'menu'}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-[40%] md:flex-[15%] py-7 text-center ">
                        <Link to='/cart' className='text-2xl  p-4 text-green-700 rounded-md   relative'><FaCartArrowDown className='inline' id='cart_logo' />
                            <span className=' absolute text-white text-sm' style={number} id='cart_number'>{value}</span>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Nav);