import Image from 'next/image';

// Định nghĩa interface cho sản phẩm
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const BestSellers = () => {
  // Sử dụng interface Product cho mảng sản phẩm
  const products: Product[] = [
    {
      id: 1,
      name: 'Stylish Grey Chair',
      price: 'USD 66.00',
      image: '/img/product2/fs-01.png', // Đường dẫn từ thư mục public
      alt: 'Stylish Grey Chair',
    },
    {
      id: 2,
      name: 'Chair Pillow',
      price: 'USD 66.00',
      image: '/img/product2/fs-02.png',
      alt: 'Chair Pillow',
    },
    {
      id: 3,
      name: 'Alexander Roll ..',
      price: 'USD 66.00',
      image: '/img/product2/fs-03.png',
      alt: 'Alexander Roll Chair',
    },
    {
      id: 4,
      name: 'Wooden Chair',
      price: 'USD 66.00',
      image: '/img/product2/fs-04.png',
      alt: 'Wooden Chair',
    },
    {
      id: 5,
      name: 'Chair Pillow',
      price: 'USD 66.00',
      image: '/img/product2/fs-05.png',
      alt: 'Chair Pillow',
    },
    {
      id: 6,
      name: 'Seater Gray Sofa',
      price: 'USD 66.00',
      image: '/img/product2/fs-06.png',
      alt: 'Seater Gray Sofa',
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      {/* Phần tiêu đề */}
      <div className="mb-8 pl-4">
        <span className="bg-[#F5F1E6] text-[#B18B5E] px-4 py-2 text-sm font-semibold">
          THIS WEEK
        </span>
        <h1 className="text-5xl font-bold mt-4">Best Sellers</h1>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="flex items-center mb-4">
            <div className="w-1/3 h-auto mb-4 mr-4">
              <Image
                src={product.image}
                alt={product.alt}
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold hover:text-[#B18B5E] transition duration-500 ease-in-out cursor-pointer">
                {product.name}
              </h2>
              <p className="text-[#B18B5E]">{product.price}</p>
              <div className="text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
