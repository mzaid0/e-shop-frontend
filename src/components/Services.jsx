import { FaCarSide,FaHeadphonesAlt,FaWallet,FaCheckCircle } from "react-icons/fa";
const ServiceData = [
    {
        id:1,
        icon:<FaCarSide className="text-4xl md:text-5xl text-primary"/>,
        title:"Free Shipping",
        description:"Free shipping on all orders"
    },
    {
        id:2,
        icon:<FaHeadphonesAlt className="text-4xl md:text-5xl text-primary"/>,
        title:"Safe Money",
        description:"Free shipping on all orders"
    },
    {
        id:3,
        icon:<FaWallet className="text-4xl md:text-5xl text-primary"/>,
        title:"Secure Payment",
        description:"Free shipping on all orders"
    },
    {
        id:4,
        icon:<FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
        title:"Online Shipping 24/7",
        description:"Free shipping on all orders"
    },
]
function Services() {
  return (
    <div>
        <div className="container my-10 px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServiceData.map((data)=>(
                        <div key={data.id} className="flex text-black flex-col items-start sm:flex-row gap-4">
                            {data.icon}
                            <div>
                                <h1 className="lg:text-xl font-bold dark:text-white">{data.title}</h1>
                                <h1 className="text-gray-500 text-sm">{data.description}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services