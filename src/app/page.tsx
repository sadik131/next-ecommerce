import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Sliders"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className='padding'>
        <h1 className="title">Featured Products</h1>
        <ProductList />
      </div>
      <div className="my-12 px-4">
        <h1 className="title">Category</h1>
        <CategoryList />
      </div>
      <div className='padding'>
        <h1 className="title">New Products</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage