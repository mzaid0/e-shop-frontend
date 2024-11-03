import Button from "./Shared/Button"

const ProductsCard = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
                {
                    data.map((data,index) => (
                        <div className="group" key={index}>

                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            className="relative">

                                <img src={data.img} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
                                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 translate-x-1/2 group-hover:backdrop-blur-sm h-full items-center justify-center">
                                    <Button
                                        text={"Add to Cart"}
                                        textColor={"text-white"}
                                        bgColor={"bg-primary"}
                                    />
                                </div>
                            </div>

                            <div className="leading-7 mt-1">
                                <h2 className="font-semibold dark:text-white ">{data.title}</h2>
                                <h2 className="font-bold dark:text-gray-300">${data.price}</h2>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsCard