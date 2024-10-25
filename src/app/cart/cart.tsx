"use client"; // Dùng trong Next.js 13+ với App Router
import { useState } from 'react';
import Image from 'next/image';

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  // Dữ liệu giỏ hàng ban đầu
  const initialCartItems: CartItem[] = [
    {
      id: "alexander",
      name: "Alexander Sofa",
      price: 24.0,
      quantity: 1,
      image: "/img/details-04.png",
    },
    {
      id: "curaskin",
      name: "Curaskin Lipgel",
      price: 12.0,
      quantity: 1,
      image: "/img/details-05.png",
    },
    {
      id: "leather",
      name: "Leather Chair",
      price: 42.0,
      quantity: 1,
      image: "/img/details-06.png",
    },
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (productId: string, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(item.quantity + change, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Tính tổng giá
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto p-6 pt-[120px] pb-2">
        <div className="overflow-x-auto p-2">
          <table className="min-w-full table-auto border-collapse border-spacing-0 border p-4">
            <thead className="border">
              <tr>
                <th className="text-center font-bold border">Images</th>
                <th className="text-center font-bold border">Product</th>
                <th className="text-center font-bold border">Unit Price</th>
                <th className="text-center font-bold border">Quantity</th>
                <th className="text-center font-bold border">Total</th>
                <th className="text-center font-bold border">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr className="border-b" key={item.id}>
                  <td className="px-5 py-5 text-center border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="max-w-full h-auto mx-auto object-cover"
                    />
                  </td>
                  <td className="px-5 py-5 text-center border">{item.name}</td>
                  <td className="px-5 py-5 text-center border">${item.price.toFixed(2)}</td>
                  <td className="px-5 py-5 text-center border">
                    <div className="flex items-center justify-center">
                      <button
                        className="px-2 py-1 border"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="px-2 py-1 border"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-center border">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td
                    className="px-5 py-5 text-center text-black-600 cursor-pointer border"
                    onClick={() => removeItem(item.id)}
                  >
                    ✖
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <main className="container mx-auto py-10 px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <input className="border w-full py-3 px-4 mb-4" placeholder="Coupon code" type="text"/>
            <button className="bg-[#b18b5e] text-white py-4 px-8 rounded-full">
              APPLY COUPON
            </button>
          </div>
          <button className="bg-[#b18b5e] text-white py-4 px-8 rounded-full sm:w-auto">
            UPDATE CART
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="border w-full sm:w-1/2 p-4 mb-4">
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
          <button className="bg-[#b18b5e] text-white py-4 px-8 rounded-full">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
