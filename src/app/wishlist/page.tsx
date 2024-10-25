
"use client";

import { useEffect, useState } from 'react';

// Define the structure of a cart item
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 'alexander',
            name: 'Alexander Sofa',
            price: 24.0,
            quantity: 1,
            image: '/img/details-04.png', // Ensure the path is correct for Next.js
        },
        {
            id: 'curaskin',
            name: 'Curaskin Lipgel',
            price: 12.0,
            quantity: 1,
            image: '/img/details-05.png',
        },
        {
            id: 'leather',
            name: 'Leather Chair',
            price: 42.0,
            quantity: 1,
            image: '/img/details-06.png',
        },
    ]);

    useEffect(() => {
        // Any additional logic can go here
    }, []);

    // Add type annotations for parameters
    const updateQuantity = (productId: string, change: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === productId) {
                    const newQuantity = Math.max(item.quantity + change, 1);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (productId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto p-6 pt-[120px] pb-[120px]">
                <div className="overflow-x-auto p-2">
                    <table id="cart-table" className="min-w-full table-auto border-collapse border-spacing-0 border p-4">
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
                        <tbody id="cart-body">
                            {cartItems.map((item) => {
                                const total = (item.price * item.quantity).toFixed(2);
                                return (
                                    <tr className="border-b" key={item.id}>
                                        <td className="px-5 py-5 text-center border">
                                        <img
  src={item.image}
  alt={item.name}
  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 max-w-full h-auto mx-auto object-cover"
/>

                                        </td>
                                        <td className="px-5 py-5 text-center border">{item.name}</td>
                                        <td className="px-5 py-5 text-center border">${item.price.toFixed(2)}</td>
                                        <td className="px-5 py-5 text-center border">
                                            <div className="flex items-center justify-center">
                                                <button className="px-2 py-1 border" onClick={() => updateQuantity(item.id, -1)}>
                                                    −
                                                </button>
                                                <span className="px-4">{item.quantity}</span>
                                                <button className="px-2 py-1 border" onClick={() => updateQuantity(item.id, 1)}>
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-center border">${total}</td>
                                        <td className="px-5 py-5 text-center text-black-600 cursor-pointer border" onClick={() => removeItem(item.id)}>
                                            ✖
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-lg font-bold">ADDINA</h3>
                            <p className="mt-2">
                                It helps designers plan out where the content will sit, the content to be written and approved.
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h4 className="font-bold">Services</h4>
                            <ul className="mt-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Log In</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Return Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Shipping</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold">Subscribe to our newsletter</h4>
                            <p className="mt-2">Enter your email below to receive our latest news and updates.</p>
                            <form className="mt-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-gray-400 p-2 w-full"
                                    required
                                />
                                <button type="submit" className="mt-2 bg-[#CAA472] text-white py-2 px-4 rounded">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p>© 2024 ADDINA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Cart;
