import image1 from '../assets/category/earphone.png'
import image2 from '../assets/category/watch.png'
import image3 from '../assets/category/macbook.png'
import Button from './Shared/Button'
function Category() {
    return (
        <div className='py-8 px-4'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
                    
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img src={image1} alt="" className=' sm:w-[320px] absolute bottom-0 left-1 top-1' />
                    </div>

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandyellow to-brandyellow/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-100'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-white"}
                                    textColor={"text-brandyellow"}
                                />
                            </div>
                        </div>
                        <img src={image2} alt="" className='w-[320px] absolute -right-0 top-4 ' />
                    </div>

                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-100'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-white"}
                                    textColor={"text-primary"}
                                />
                            </div>
                        </div>
                        <img src={image3} alt="" className='w-[250px] md:w-[350px] absolute top-0 right-0 -bottom-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category