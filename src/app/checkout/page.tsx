// src/app/checkout/page.tsx
"use client";
import React, { useState } from 'react';

const CheckoutPage: React.FC = () => {
    const [bankTransferVisible, setBankTransferVisible] = useState(false);
    const [chequePaymentVisible, setChequePaymentVisible] = useState(false);
    const [paypalVisible, setPaypalVisible] = useState(false);

    const toggleVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter(prev => !prev);
    };

    return (
        <>
            <section
                className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-8xl font-bold">Checkout</h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="py-4 text-white">
                        <ol className="flex space-x-2 text-gray-200 font-semibold text-sm md:text-base">
                            <li><a href="#" className="hover:text-amber-600">Home</a></li>
                            <li>.</li>
                            <li><a href="#" className="hover:text-amber-600">Checkout</a></li>
                        </ol>
                    </nav>
                </div>
            </section>
            <div className="bg-white text-gray-800">
                <div className="max-w-7xl mx-auto p-8 pt-[100px] pb-[100px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
                            <form>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2" htmlFor="country">Country *</label>
                                    <div className="relative">
                                        <select id="country" className="block appearance-none w-full bg-white border border-gray-300 px-4 py-3 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                                            <option>United States</option>
                                            <option>Algeria</option>
                                            <option>Afghanistan</option>
                                            <option>Ghana</option>
                                            <option>Albania</option>
                                            <option>Colombia</option>
                                            <option>Dominican Republic</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="first-name">First Name *</label>
                                        <input id="first-name" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                                    </div>
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="last-name">Last Name *</label>
                                        <input id="last-name" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[#191919] mb-2" htmlFor="company-name">Company Name</label>
                                    <input id="company-name" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[#191919] mb-2" htmlFor="address">Address *</label>
                                    <input id="address" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200 mb-4" placeholder="Street address" required />
                                    <input type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder="Apartment, suite, unit etc. (optional)" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[#191919] mb-2" htmlFor="town/city">Town / City*</label>
                                    <input id="town/city" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder="Town / City" required />
                                </div>
                                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="state/county">State / County *</label>
                                        <input id="state/county" type="text" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                                    </div>
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="postcode/zip">Postcode / Zip *</label>
                                        <input id="postcode/zip" type="tel" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder="Postcode / Zip" required />
                                    </div>
                                </div>
                                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="email-address">Email Address *</label>
                                        <input id="email-address" type="email" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                                    </div>
                                    <div>
                                        <label className="block text-[#191919] mb-2" htmlFor="phone">Phone *</label>
                                        <input id="phone" type="tel" className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                                    </div>
                                </div>
                                <div className="mb-6 border-b-2 pb-4">
                                    <input type="checkbox" id="create-account" className="mr-2" />
                                    <label htmlFor="create-account" className="text-gray-700">Create an account?</label><br />
                                    <input type="checkbox" id="different-address" className="mr-2" />
                                    <label htmlFor="different-address" className="text-gray-700">Ship to a different address?</label>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700">Order Notes</label>
                                    <textarea className="w-full border border-gray-300 p-4 max-h-32 overflow-y-auto" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="border border-gray-300 p-6">
                                <h2 className="text-2xl p-2 font-bold mb-6 border-b-2">Your order</h2>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 text-[#191919] text-left font-bold">Product</th>
                                            <th className="border-b-2 text-[#191919] text-left font-bold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-b-2 text-[#575757] text-left py-4">Alexander Sofa × <b className="font-bold">1</b></td>
                                            <td className="border-b-2 text-[#575757] text-left py-4">$24.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border-b-2 text-[#575757] text-left py-4">Curaskin Lippgel × <b className="font-bold">1</b></td>
                                            <td className="border-b-2 text-[#575757] text-left py-4">$14.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border-b-2 text-[#575757] text-left py-4">Subtotal</td>
                                            <td className="border-b-2 text-[#575757] text-left py-4">$50.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border-b-2 text-[#575757] text-left py-4">Shipping</td>
                                            <td className="border-b-2 text-[#575757] text-left py-4">$0.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border-b-2 text-[#575757] text-left py-4 font-bold">Total</td>
                                            <td className="border-b-2 text-[#575757] text-left py-4 font-bold">$50.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-6">
                                    <h2 className="text-2xl p-2 font-bold mb-6 border-b-2">Payment Method</h2>
                                    <div className="mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={!bankTransferVisible}
                                            onChange={() => toggleVisibility(setBankTransferVisible)}
                                        />
                                        <label>Direct Bank Transfer</label>
                                    </div>
                                    {bankTransferVisible && (
                                        <div className="bg-gray-100 p-4 rounded">
                                            <p className="text-sm">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={!chequePaymentVisible}
                                            onChange={() => toggleVisibility(setChequePaymentVisible)}
                                        />
                                        <label>Cheque Payment</label>
                                    </div>
                                    {chequePaymentVisible && (
                                        <div className="bg-gray-100 p-4 rounded">
                                            <p className="text-sm">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode / Zip.</p>
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={!paypalVisible}
                                            onChange={() => toggleVisibility(setPaypalVisible)}
                                        />
                                        <label>PayPal</label>
                                    </div>
                                    {paypalVisible && (
                                        <div className="bg-gray-100 p-4 rounded">
                                            <p className="text-sm">You can pay via your PayPal account.</p>
                                        </div>
                                    )}
                                </div>
                                <button className="bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600 transition duration-200">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
