import Heading from './Shared/Heading'
import img1 from '../assets/blogs/blog-1.jpg'
import img2 from '../assets/blogs/blog-2.jpg'
import img3 from '../assets/blogs/blog-3.jpg'


const blogData = [
    {
        title: "Hwo to choose perfect Smart Watch",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aperiam sed quam ex voluptatem explicabo, velit nesciunt cum omnis error!",
        published: "20 Jan 2024 by Z Shop",
        image: img1,
        aosDelay: "0"
    },
    {
        title: "Hwo to choose perfect Smart Watch",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aperiam sed quam ex voluptatem explicabo, velit nesciunt cum omnis error!",
        published: "20 Jan 2024 by Z Shop",
        image: img2,
        aosDelay: "200"
    },
    {
        title: "Hwo to choose perfect Smart Watch",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aperiam sed quam ex voluptatem explicabo, velit nesciunt cum omnis error!",
        published: "20 Jan 2024 by Z Shop",
        image: img3,
        aosDelay: "400"
    },
]
const Blog = () => {
    return (
        <div className='container px-4'>
            <Heading
                title="Recent News"
                subtitle="Explore our Blogs"
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {
                    blogData.map((data) => (
                        <div
                            key={data.title}
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            className='bg-white dark:text-white dark:bg-gray-900'>
                                
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer' />
                            </div>

                            <div className='space-y-2'>
                                <p className='text-sm text-gray-500'>{data.title}</p>
                                <p className='font-bold line-clamp-2'>{data.subtitle}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.published}</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog