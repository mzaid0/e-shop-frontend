import image1 from '../assets/category/gaming.png'
import image2 from '../assets/category/vr.png'
import image3 from '../assets/category/speaker.png'
import Button from './Shared/Button'
function Category() {
    return (
        <div className='py-8 px-4'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-col-2 gap-8'>

                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-100'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img src={image1} alt="" className='w-[200px] sm:w-[300px] absolute right-3 bottom-1' />
                    </div>

                    <div className='overflow-hidden py-10 pl-5 bg-gradient-to-br from-brandgreen/90 to-brandgreen/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-100'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Virtual Reality</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-white"}
                                    textColor={"text-brandgreen"}
                                />
                            </div>
                        </div>
                        <img src={image2} alt="" className='w-[230px] absolute bottom-0 right-0' />
                    </div>

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandblue to-brandblue/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-100'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speakers</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-white"}
                                    textColor={"text-brandblue"}
                                />
                            </div>
                        </div>
                        <img src={image3} alt="" className='w-[150px] sm:w-[220px] absolute  top-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category