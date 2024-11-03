import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from "react-icons/fa"

const FooterLinks = [
    {
        title: "Home",
        link: "#home"
    },
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Contact",
        link: "#contact"
    },
    {
        title: "Blog",
        link: "#blog"
    },
]
const Footer = () => {
    return (
        <div className="dark:bg-gray-900 ">
            <div className="container">
                <div className="grid md:grid-cols-4 pt-5">

                    <div className="py-8 px-4">
                        <a className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl" href="#">Eshop</a>
                        <p className="text-gray-600 lg:pr-4 pt-3 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, culpa.</p>
                        <p className="text-gray-500 mt-4 dark:text-gray-400">Developed by Z...</p>
                        <a href="#" className="inline-block bg-primary/90 text-white py-2 px-4 text-sm rounded-full mt-4">Visit my instagram</a>
                    </div>

                    <div className="grid grid-cols-1 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3 sm:text-left dark:text-white ">Important Links</h1>
                            <ul className="space-y-2">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white duration-300" href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3 sm:text-left dark:text-white ">Quick  Links</h1>
                            <ul className="space-y-2">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white duration-300" href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="py-8 px-4 ">
                        <h1 className="text-xl font-bold mb-3 sm:text-left dark:text-white ">Address</h1>
                        <div className="dark:text-gray-100">
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Jamkey Cheema , Sialkot</p>
                                </div>

                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt className="animate-pulse " />
                                    <p>+92 331-*******</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-6 dark:text-gray-100">
                                <a href="#"><FaInstagram className=" animate-bounce text-3xl hover:text-primary duration-300" /></a>
                                <a href="#"><FaFacebook className="text-3xl hover:text-primary duration-300" /></a>
                                <a href="#"><FaTwitter className="text-3xl hover:text-primary duration-300" /></a>
                                <a href="#"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer