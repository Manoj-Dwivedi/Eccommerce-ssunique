import {Call,Mail,Facebook,Twitter,Instagram} from './header_component/Header_compo'




const Header=()=>{
    
    return<>
        <div className=" bg-green-700 ">
            <div className="flex justify-between gap-4 container mx-auto text-white p-2">
                <div className=" text-md font-medium ml-2">
                    <div className='relative flex gap-2 flex-nowrap'>
                            <Call phone='+91-8669508451'/>
                            <Mail mail=' sonalbajpai89@gmail.com'/>
                            <input placeholder='Search for products' className='bg-white hidden text-black lg:block w-80 ms-20 rounded-sm focus:outline-sky-500 p-1 '  type="search" name="" id="search_bar"  />
                    </div>
                </div>
                <div className=" ">
                    <div className='flex gap-2'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Header;