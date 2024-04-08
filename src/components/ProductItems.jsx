import React from 'react';
import { MdOutlineTimer } from "react-icons/md";

function ProductItems() {
  // Array of products
  const products = [
    {
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/be2b8d5d-1d96-4392-a3e7-a8df23933584.jpg?ts=1710313956",
      title: "English Oven Brown Bread",
      quantity: "400g",
      price: "₹50",
      time: "15 min"
    },
    {
        imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
        title: "Amul Fresh Malai Paneer",
        quantity: "400g",
        price: "₹80",
        time: "15 min"
      },
      {
        imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
        title: "Amul Masti Curd",
        quantity: "400g",
        price: "₹100",
        time: "15 min"
      },
      {
        imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317",
        title: "Mother Dairy Panee",
        quantity: "300g",
        price: "₹60",
        time: "15 min"
      },
      {
        imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/be2b8d5d-1d96-4392-a3e7-a8df23933584.jpg?ts=1710313956",
        title: "English Oven Brown Bread",
        quantity: "400g",
        price: "₹50",
        time: "15 min"
      },
      {
          imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
          title: "Amul Fresh Malai Paneer",
          quantity: "400g",
          price: "₹80",
          time: "15 min"
        },
        {
          imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
          title: "Amul Masti Curd",
          quantity: "400g",
          price: "₹100",
          time: "15 min"
        },
        {
          imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317",
          title: "Mother Dairy Panee",
          quantity: "300g",
          price: "₹60",
          time: "15 min"
        },
    // Add more product objects here...
  ];

  return (
    <div className='w-full h-auto px-[3%]  pb-7 relative'>
      <div className="top py-[5px] flex items-center justify-between">
        <h2 className='text-[1.5rem] font-bold max-[600px]:text-[.9rem]'>Dairy, Bread & Eggs</h2>
        <span className='text-[20px] text-green-600 font-semibold max-[600px]:text-[15px]'>see all</span>
      </div>
      <div className='whitespace-nowrap w-full overflow-y-hidden overflow-x-auto flex  gap-4 mt-3'>
        {products.map((product, index) => (
          <div key={index} className="product h-auto w-auto ">
            <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a className="relative mx-2 mt-2 flex h-40  w-[30vh] overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.imageUrl} alt="product image" />
              </a>
              <div className="px-2 pb-5">
                <span className='text-gray-600 text-[10px] bg-slate-200 px-2 py-[1px] rounded-full flex items-center w-fit'><MdOutlineTimer /> {product.time}</span>
                <a href="#">
                  <h5 className="text-[.9rem] mt-2 tracking-tight font-semibold text-slate-900">{product.title}</h5>
                </a>
                <span className='text-gray-600 text-[13px]'>{product.quantity}</span>
                <div className='flex items-center justify-between mt-5'>
                  <h2>{product.price}</h2>
                  <a href="#" className="flex items-center justify-center rounded-md bg-[#F7FFF9] px-5 py-2 text-center text-sm border-[1px] border-[#318616] text-[#318616]">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductItems;
