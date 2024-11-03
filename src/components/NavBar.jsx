import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DarkMode from './DarkMode';


function NavBar({handleOrderPopup}) {

    const MenuItems = [
        {
            id: 1,
            name: "Home",
            link: "/#"
        },
        {
            id: 2,
            name: "Shop",
            link: "/shop"
        },
        {
            id: 3,
            name: "About",
            link: "/about"
        },
        {
            id: 4,
            name: "Blogs",
            link: "/blogs"
        },
    ]

    const DropDownLinks = [
        {
            id: 1,
            name: "Trading Products",
            link: "/#"
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/#"
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/#"
        },

    ]

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-10">
            <div className="py-4 px-4">
                <div className=" container flex justify-between">

                    <div className=" flex items-center gap-4">
                        <div>
                            <a className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl" href="#">Eshop</a>
                        </div>

                        <div className="hidden lg:block">
                            <ul className="flex gap-4 items-center">
                                {
                                    MenuItems.map((data, index) => (
                                        <li key={index}>
                                            <a className="inline-block px-4 font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white duration-200" href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                                <li className='relative cursor-pointer group'>
                                    <a href="" className='flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white duration-200'>Quick Links
                                        <span>
                                            <IoMdArrowDropdown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>

                                    <div className='absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropDownLinks.map((data, index) => (
                                                    <li key={index}>
                                                        <a className='text-gray-500 hover:text-gray-900 dark:hover:text-white inline-block rounded-md font-semibold duration-200 p-2 hover:bg-primary/20 w-full' href={data.link}>{data.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder="Search" className="search-bar" />
                            <CiSearch className='text-gray-500 text-xl dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200 cursor-pointer' />
                        </div>

                        <button className='relative p-3'>
                            <FaShoppingCart onClick={handleOrderPopup} className='text-gray-600 dark:text-gray-400 text-xl' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>

                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar