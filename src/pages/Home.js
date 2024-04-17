import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext'; // Assuming ProductContext is exported as default

// Import components
import Product from '../components/Product';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Blogs from '../components/Blogs';
import Repair from '../components/Repair';

const Home = () => {
  // Get products and filter function from product context
  const { products, filter, setFilter } = useContext(ProductContext);
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("all");

  const filterProduct = (cat) => {
    // Filter products based on category
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
    setActiveCategory(cat); // Set active category
  };

  return (
    <div>
      <Hero />
      <Feature />
      <section className='py-24 px-0 lg:px-20 xl:px-40'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[25px] lg:text-[30px] font-bold'>Latest Products</h2>
            <div className='mt-7 mb-5'>
              <ul className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
                <li className={`cursor-pointer uppercase text-[15px] hover:text-pink-500 transition font-medium font-secondary ${activeCategory === "all" ? "text-pink-500" : ""}`} onClick={() => { setFilter(products); setActiveCategory("all") }}>All</li>
                <li className={`cursor-pointer uppercase text-[15px] hover:text-pink-500 transition font-medium font-secondary ${activeCategory === "men's clothing" ? "text-pink-500" : ""}`} onClick={() => filterProduct("men's clothing")}>Men's Clothing</li>
                <li className={`cursor-pointer uppercase text-[15px] hover:text-pink-500 transition font-medium font-secondary ${activeCategory === "women's clothing" ? "text-pink-500" : ""}`} onClick={() => filterProduct("women's clothing")}>Women's Clothing</li>
                <li className={`cursor-pointer uppercase text-[15px] hover:text-pink-500 transition font-medium font-secondary ${activeCategory === "jewelery" ? "text-pink-500" : ""}`} onClick={() => filterProduct("jewelery")}>Jewelry</li>
                <li className={`cursor-pointer uppercase text-[15px] hover:text-pink-500 transition font-medium font-secondary ${activeCategory === "electronics" ? "text-pink-500" : ""}`} onClick={() => filterProduct("electronics")}>Electronics</li>
              </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mx-auto max-w-sm md:max-w-none md:mx-0'>
              {filter.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <Repair />
      <Blogs />
    </div>
  );
};

export default Home;
