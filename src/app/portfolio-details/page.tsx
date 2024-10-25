// pages/portfolio.js
"use client";
import Image from 'next/image';

export default function Portfolio() {
    return (
        <>
        <section
        className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
            backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",

        }}
      >
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-8xl font-bold">Portfolio Details</h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="py-4 text-white">
                        <ol className="flex space-x-2 text-gray-200 font-semibold text-sm md:text-base">
                            <li>
                                <a href="#" className="hover:text-amber-600">Home</a>
                            </li>
                            <li>.</li>
                            <li>
                                <a href="#" className="hover:text-amber-600">Portfolio Details</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
                <div className="container mx-auto mt-10">
                    {/* Header Section */}
                    <div className="lg:text-left mb-9">
                        <h2 className="text-4xl font-bold mb-9">Portfolio Details</h2>
                        <p className="mt-2 text-gray-600 text-left">
                            Nulla faucibus malesuada. In placerat feugiat eros ac tempor. Integer euismod massa sapien, et consequat enim laoreet et. Nulla sit amet nisi dapibus, gravida turpis sit amet, accumsan nisl. Fusce vel semper risus. Morbi congue eros sagittis, sodales turpis venenatis, iaculis dui. Proin ac purus sed nibh dapibus neque. scelerisque sed quis ante eros suspendisse potenti. Mauris vitae sagittis diam. Vivamus imperdiet nulla ut nisi fermentum, vitae euismod mi egestas. In quis auctor magna. Maecenas sodales nunc tellus, non iaculis est iaculis placerat. Morbi suscipit,
                        </p>
                    </div>

                    <ul className="flex items-center justify-between flex-wrap gap-4 p-2 border-t-2 border-b-2 border-solid border-[#e3e3e3] font-bold p-3">
                        <li>
                            <span className="text-amber-600">Date:</span>
                            10, February 2024
                        </li>
                        <li>
                            <span className="text-amber-600">Category:</span>
                            Felix Art
                        </li>
                        <li>
                            <span className="text-amber-600">Client:</span>
                            Robert Fox
                        </li>
                        <li>
                            <span className="text-amber-600">Location:</span>
                            Fot Kde, USA
                        </li>
                    </ul>

                    {/* Image Section */}
                    <div className="mt-8">
                    <img
                            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/project/project-details.jpg"
                            alt="Portfolio Image"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="text-center lg:text-left mb-9 mt-8">
                        <p className="mt-2 text-gray-600 text-left">
                            Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
