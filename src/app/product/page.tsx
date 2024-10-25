"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/shop.css';
import Image from 'next/image';

// Tùy chọn bộ lọc
const filterOptions = ['Show 20', 'This Past Week', 'This Past Month', 'This Past Year', 'Show All'];

const ProductCard = () => {
  const [products, setProducts] = useState([]); // Danh sách tất cả sản phẩm
  const [visibleProducts, setVisibleProducts] = useState([]); // Sản phẩm hiển thị
  const [selectedFilter, setSelectedFilter] = useState('Show All'); // Bộ lọc hiện tại
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const productsPerPage = 20; // Số sản phẩm trên mỗi trang

  // Gọi API để lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setVisibleProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    setCurrentPage(1); // Đặt lại trang về 1 khi thay đổi bộ lọc
  
    // Lọc sản phẩm theo bộ lọc đã chọn
    let filteredProducts = products;
  
    if (selectedValue === 'Show 20') {
      filteredProducts = products; // Không giới hạn số lượng sản phẩm, sẽ phân trang
    } else if (selectedValue === 'This Past Week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      // filteredProducts = products.filter((product) => new Date(product.created_at) >= oneWeekAgo);
    } else if (selectedValue === 'This Past Month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      // filteredProducts = products.filter((product) => new Date(product.created_at) >= oneMonthAgo);
    } else if (selectedValue === 'Show All') {
      filteredProducts = products;
    }
  
    setVisibleProducts(filteredProducts);
  };
  
  // Tính tổng số trang
  const totalPages = Math.ceil(visibleProducts.length / productsPerPage);

  // Chia sản phẩm theo trang
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = visibleProducts.slice(startIndex, endIndex);

  // Hàm thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto py-6 mt-10">
      {/* Phần đếm sản phẩm và bộ lọc */}
      <div className="flex flex-col md:flex-row justify-between items-left mb-4 p-6">
        <div className="mb-2 md:mb-0">
        <h3 className="font-sora font-semibold text-2xl">
  {selectedFilter === 'Show 20' 
    ? `${Math.min(visibleProducts.length, 20)} Items` 
    : `${visibleProducts.length}  Item On List`
  }
</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-black">
            <i className="fa-solid fa-bars"></i>
            <span className="font-semibold">FILTER</span>
          </button>
          <span className="border-l h-6"></span>
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="border border-gray-300 p-2"
          >
            {filterOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8">
        {currentProducts.map((product: any) => (
          <div
            key={product.id}
            className="product-item border rounded-md overflow-hidden transition-shadow duration-300 relative group"
          >
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-yellow-400 text-white text-xs font-semibold py-1 px-2 rounded">
                {product.discount}
              </span>
            </div>

            {/* Product Image */}
            <div className="product-thumb relative p-4 sm:p-8 lg:p-10 pb-8 overflow-hidden max-w-[370px] mx-auto group">
            <Link href={`product-details/${product.id}`} className="relative group">
            <Image
  src={product.images ? product.images[0] : '/default-image.jpg'} // Cung cấp đường dẫn mặc định
  alt="Product Image"
  width={500} // Đặt chiều rộng cố định
  height={500} // Đặt chiều cao cố định
  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
/>

                {/* Product Actions (Add to Cart, Quick View, Wishlist) */}
                <div className="product-action-item flex justify-center absolute bottom-2 sm:bottom-[-20px] left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-x-8">
                  {/* Add to Cart Button */}
                  <div className="relative product-action-btn">
                    <button
                      type="button"
                      className="relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md"
                    >
                      <i className="fa-solid fa-cart-shopping text-white"></i>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[12px] sm:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100 whitespace-nowrap">
                        Add to Cart
                      </span>
                    </button>
                  </div>

                  {/* Quick View Button */}
                  <div className="relative product-action-btn">
                    <button
                      type="button"
                      className="relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md"
                    >
                      <i className="fa-solid fa-eye text-white"></i>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[12px] sm:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100">
                        Quick View
                      </span>
                    </button>
                  </div>

                  {/* Wishlist Button */}
                  <div className="relative product-action-btn">
                    <button
                      type="button"
                      className="relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md"
                    >
                      <i className="fa-regular fa-heart text-white"></i>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[12px] sm:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100 whitespace-nowrap">
                        Add to Wishlist
                      </span>
                    </button>
                  </div>
                </div>
                </Link>
            </div>

            {/* Product Details */}
            <div className="product-content p-4 sm:p-6 pt-4 sm:pt-6 border-t border-gray-200 mt-4">
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-medium uppercase text-[#b18b5e] mb-1 block">{product.category}</span>
                <h4 className="text-lg sm:text-xl font-bold mb-1 capitalize transition-colors duration-300 hover:text-[#b18b5e]">
  {product.name}
</h4>
                <div className="product-price flex mt-1 items-center">
                  <span className="text-sm sm:text-base text-gray-500 line-through mr-2">
                    <del>${product.price}</del>
                  </span>
                  <span className="text-lg sm:text-xl text-[#b18b5e] font-medium">
                    ${product.price_sale}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      {selectedFilter === 'Show 20' && visibleProducts.length > productsPerPage && (
  <div className="bd-basic__pagination flex items-center justify-center mt-11">
    <nav>
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageIndex = index + 1; // Tính chỉ số trang
          const isActive = currentPage === pageIndex; // Kiểm tra trang hiện tại
          
          return (
            <li key={index}>
              <button
                onClick={() => handlePageChange(pageIndex)}
                className={`w-12 h-12 flex items-center justify-center font-semibold text-lg border border-gray-300 rounded-full 
                  ${isActive 
                    ? 'bg-[#b18b5e] text-white' 
                    : 'bg-white text-gray-500 hover:bg-[#b18b5e] hover:text-white'
                  }`}
              >
                {pageIndex}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
)}


    </div>
  );
};

export default ProductCard;
