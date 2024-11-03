import brand1 from '../assets/brands/br-1.png'
import brand2 from '../assets/brands/br-2.png'
import brand3 from '../assets/brands/br-3.png'
import brand4 from '../assets/brands/br-4.png'
import brand5 from '../assets/brands/br-5.png'

const brands = [
    {
        id: 1,
        img: brand1
    },
    {
        id: 2,
        img: brand2
    },
    {
        id: 3,
        img: brand3
    },
    {
        id: 4,
        img: brand4
    },
    {
        id: 5,
        img: brand5
    },
]
const Partners = () => {
    return (
        <div className='py-8 mt-20 hidden md:block bg-gray-200 dark:bg-slate-100'>
            <div className='container'>
                <div 
                data-aos="zoom-out"
                className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                    {
                        brands.map((data) => (
                            <div key={data.id}>
                                <img src={data.img} alt="" className='w-[80px]' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Partners