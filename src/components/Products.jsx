import ProductsCard from "./ProductsCard"
import Heading from "./Shared/Heading"
import img1 from '../assets/products/p-1.jpg'
import img2 from '../assets/products/p-2.jpg'
import img3 from '../assets/products/p-3.jpg'
import img4 from '../assets/products/p-4.jpg'
import img5 from '../assets/products/p-5.jpg'
import img7 from '../assets/products/p-7.jpg'
import img9 from '../assets/products/p-9.jpg'

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Boat Headphones",
    price: "120",
    aosDelay: "0"
  },
  {
    id: 1,
    img: img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 2,
    img: img3,
    title: "Googles",
    price: "220",
    aosDelay: "400"
  },
  {
    id: 3,
    img: img4,
    title: "Printed",
    price: "200",
    aosDelay: "600"
  },
]

const ProductsData2 = [
  {
    id: 1,
    img: img5,
    title: "Boat Headphones",
    price: "120",
    aosDelay: "0"
  },
  {
    id: 2,
    img: img7,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 3,
    img: img9,
    title: "Googles",
    price: "120",
    aosDelay: "400"
  },
  {
    id: 4,
    img: img4,
    title: "Printed",
    price: "200",
    aosDelay: "600"
  },
]
const Products = () => {
  return (
    <div>
      <div className="container">
        <Heading
          title="Our Products"
          subtitle="Explore our products"
        />
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData2} />
      </div>
    </div>
  )
}

export default Products