"use client";
import { useState, FormEvent } from "react";

// Kiểu dữ liệu cho các tab
type Tab = "description" | "additional" | "reviews";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState<string>(
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/product/details/details-05.png"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [saveInfo, setSaveInfo] = useState<boolean>(false);

  const thumbnails = [
    "details-04.png",
    "details-05.png",
    "details-06.png",
  ];

  // Hàm thay đổi hình ảnh chính
  const changeMainImage = (src: string) => {
    setMainImage(src);
  };

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Hàm thay đổi tab
  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Xử lý form đánh giá
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", { name, email, review, rating, saveInfo });
    // Đặt lại các giá trị trong form
    setReview("");
    setName("");
    setEmail("");
    setRating(0);
    setSaveInfo(false);
  };

  return (
    <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row lg:items-center mb-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4 mb-2 md:mb-0 justify-start">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                className={`w-24 h-24 border rounded cursor-pointer ${mainImage.includes(img) ? "border-[#B18B5E]" : "border-transparent"
                  }`}
                src={`https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/product/details/${img}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() =>
                  changeMainImage(
                    `https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/product/details/${img}`
                  )
                }
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              id="mainImage"
              className="w-full h-auto object-cover rounded-lg"
              src={mainImage}
              alt="Main Product Image"
            />
          </div>
        </div>

        <div>
  {/* Category Badge */}
  <div className="flex items-center space-x-2">
    <span className="bg-orange-300 text-white px-3 py-1 rounded text-xs font-semibold">
      CONSTRUCTION
    </span>
    <div className="flex items-center ml-2">
      <span className="text-yellow-500">★★★★☆</span>
      <span className="text-gray-500 ml-2 text-sm">(10 Reviews)</span>
    </div>
  </div>

  {/* Product Title */}
  <h1 className="text-3xl font-bold mt-4 text-gray-900">Alexander Roll Arm Sofa</h1>

  {/* Price */}
  <div className="flex items-center space-x-4 mt-2">
    <span className="text-sm text-gray-400 line-through">$30.35</span>
    <span className="text-2xl font-bold text-[#B18B5E]">$19.25</span>
  </div>

  {/* Product Description */}
  <p className="text-gray-600 mt-4">
    Priyoshop has brought you the Hijab 3 Pieces Combo Pack PS23. It is a completely modern design and you feel comfortable to put on this hijab. Buy it at the best price.
  </p>

  {/* Quantity Selector and Add to Cart Button */}
  <div className="flex items-center space-x-4 mt-6">
    {/* Quantity Selector */}
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <input
        type="number"
        className="w-12 text-center text-gray-600 focus:outline-none"
        value={quantity}
        readOnly
      />
      <button
        className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>

    {/* Add to Cart Button */}
    <button className="flex items-center bg-[#B18B5E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#9e7a4d]">
      <span className="mr-2">🛒</span>
      Add to Cart
    </button>

    {/* Wishlist Button */}
    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-[#B18B5E] transition-colors duration-300">
      <span className="text-gray-500 hover:text-white">❤️</span>
    </button>
  </div>

  {/* SKU, Categories, and Tags */}
  <div className="mt-6">
    <p className="text-gray-700">
      <strong>SKU:</strong> BO1D0MX8SJ
    </p>
    <p className="text-gray-700 mt-2">
      <strong>Categories:</strong> Milk, Cream, Fermented.
    </p>
    <p className="text-gray-700 mt-2">
      <strong>Tags:</strong> Cheese, Custard, Frozen
    </p>
  </div>

  {/* Share Icons */}
  <div className="flex items-center mt-4 space-x-3">
    <span className="text-gray-700 font-semibold">Share:</span>
    <a href="#" className="text-gray-500 hover:text-[#B18B5E] transition-colors">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-[#B18B5E] transition-colors">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-[#B18B5E] transition-colors">
      <i className="fab fa-behance"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-[#B18B5E] transition-colors">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-[#B18B5E] transition-colors">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
</div>

      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Tabs */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col border-b md:border-r pr-4">
            {(["description", "additional", "reviews"] as Tab[]).map((tab) => (
              <button
                key={tab}
                className={`w-full m-2 py-4 px-6 text-lg font-semibold text-left border ${activeTab === tab
                  ? "bg-[#B18B5E] text-white"
                  : "bg-white text-gray-800"
                  } hover:bg-[#B18B5E] hover:text-white transition-colors duration-300 ease-in-out rounded`}
                onClick={() => switchTab(tab)}
              >
                {tab === "description" ? "Description" : ""}
                {tab === "additional" ? "Additional Information" : ""}
                {tab === "reviews" ? "Reviews (3)" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full md:w-3/4 pl-6">
          {activeTab === "description" && (
            <div className="tab-content">
              { /* eslint-disable react/no-unescaped-entities */}

              <p className="mt-4 text-xl sm:text-lg lg:text-xl text-gray-700">
              In marketing a product is an object or system made available for consumer use it is anything that can be offered to a market to the desire or need of a retailing, products are often referred to as merchandise, and in manufacturing, products are bought as materials and then sold as finished goods. A service regarded to as a type of product. Commodities are usually raw materials metals and agricultural products, but a commodity can also be anything wide the open market. In project management, the formal definition of the project deliverables
              </p>

              <p className="mt-4 text-xl sm:text-lg text-gray-700">
              A product can be classified as tangible or intangible. A tangible product is a physical object that can be perceived by touch building, vehicle, gadget, An intangible product is a product that can only be perceived indirectly such as an insurance policy. can be broadly classified under intangible be durable or non durable. A product line is "a group of products that are closely either because they function in a similar manner, are sold to the same customergroups
              </p>


            </div>
          )}
          {activeTab === "additional" && (
            <div className="tab-content">
              <h2 className="text-2xl font-bold text-black">Additional Information</h2>
              <ul className="mt-4 space-y-2 text-black">
                <li className="flex bg-[#f5f1e6] p-4 rounded-md">
                  <strong className="w-40">Weight:</strong> <span>2 lbs</span>
                </li>
                <li className="flex bg-white p-4 rounded-md">
                  <strong className="w-40">Dimensions:</strong> <span>12 × 16 × 19 in</span>
                </li>
                <li className="flex bg-[#f5f1e6] p-4 rounded-md">
                  <strong className="w-40">Product:</strong> <span>Purchase this product on rag-bone.com</span>
                </li>
                <li className="flex bg-white p-4 rounded-md">
                  <strong className="w-40">Color:</strong> <span>Gray, Black</span>
                </li>
                <li className="flex bg-[#f5f1e6] p-4 rounded-md">
                  <strong className="w-40">Size:</strong> <span>S, M, L, XL</span>
                </li>
                <li className="flex bg-white p-4 rounded-md">
                  <strong className="w-40">Model:</strong> <span>Model</span>
                </li>
                <li className="flex bg-[#f5f1e6] p-4 rounded-md">
                  <strong className="w-40">Shipping:</strong> <span>Standard shipping: $5.95</span>
                </li>
                <li className="flex bg-white p-4 rounded-md">
                  <strong className="w-40">Care Info:</strong> <span>Machine Wash up to 40°C/86°F Gentle Cycle</span>
                </li>
                <li className="flex bg-[#f5f1e6] p-4 rounded-md">
                  <strong className="w-40">Brand:</strong> <span>Kazen</span>
                </li>
              </ul>

            </div>



          )}
          {activeTab === "reviews" && (
            <div className="tab-content">
              <h2 className="text-2xl font-bold  text-[#B18B5E]">Reviews</h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 sm:p-2 rounded-lg flex space-x-4">
                  <img
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/user/user-01.png"
                    alt="Profile Image"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold  text-[#B18B5E]">Siarhei Dzenisenka</p>
                        <p className="text-sm text-gray-500">March 27, 2018 9:51 AM</p>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`fa fa-star cursor-pointer text-lg ${star <= rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            onClick={() => setRating(star)}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm sm:text-base">
                      This cardigan is a comfortable warm classic piece...
                    </p>
                  </div>
                </div>

                {/* Form thêm đánh giá */}
                <div className="p-4 sm:p-2 bg-white rounded-lg">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#B18B5E]" >ADD A REVIEW</h2>
                  <p className="text-gray-600 mb-4">
                    Your email address will not be published. Required fields are marked{" "}
                    <span className="text-red-500">*</span>
                  </p>

                  {/* Form đánh giá */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <textarea
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#b18b5e] resize-none"
                        rows={4}
                        placeholder="Your review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        className="p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#b18b5e]"
                        placeholder="Your Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        className="p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#b18b5e]"
                        placeholder="Your Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        id="save-info"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-[#b18b5e] focus:ring-[#b18b5e]"
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                      />
                      <label htmlFor="save-info" className="ml-2 text-gray-600 text-sm">
                        Save my name, email, and website in this browser for the next time I
                        comment.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#b18b5e] text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-[#9e7a4d] transition-colors duration-300"
                    >
                      SUBMIT NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
