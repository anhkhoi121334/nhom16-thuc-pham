import React from 'react';

const FindStore = () => {
  return (
    <div>
      <section
        className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Find a Store</h1>

          {/* Breadcrumb Navigation */}
          <nav className="py-4 text-white">
            <ol className="flex space-x-2 text-gray-200 text-white font-bold">
              <li><a href="#" className="hover:text-amber-600">Home</a></li>
              <li>.</li>
              <li><a href="#" className="hover:text-amber-600">Find a Store</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col">
            <div className="bg-[#f5f1e6] p-12">
              <div className="fnd-head flex justify-between items-center mb-4">
                <h3 className="text-3xl text-gray-600 font-bold">California</h3>
                <h3 className="text-3xl text-gray-600 font-bold">01</h3>
              </div>
              <div className="fnd-head flex justify-between mb-4">
                <div className="flex-1">
                  <span className="text-sm text-gray-500">Address</span>
                  <p className="text-gray-700 mt-1">
                    4517 Washington Ave.<br />Manchester, Kentucky 39495
                  </p>
                </div>
                <div className="flex-1 ml-6 fnd-text text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus turpis.
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image2.jpg"
                alt="Store Image"
                className="rounded-lg shadow-md w-full h-full object-cover"
                style={{ marginTop: '95px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Image Content */}
          <div className="flex flex-col">
            <div className="flex-1 flex items-center">
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image1.jpg"
                alt="Furniture Design"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Content */}
          <div className="flex flex-col">
            <div className="flex-1 flex items-center">
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image1.jpg"
                alt="Furniture Design"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex flex-col">
            <div className="bg-[#f5f1e6] p-12">
              <div className="fnd-head flex justify-between items-center mb-4">
                <h3 className="text-3xl text-gray-600 font-bold">California</h3>
                <h3 className="text-3xl text-gray-600 font-bold">01</h3>
              </div>
              <div className="fnd-head flex justify-between mb-4">
                <div className="flex-1">
                  <span className="text-sm text-gray-500">Address</span>
                  <p className="text-gray-700 mt-1">
                    4517 Washington Ave.<br />Manchester, Kentucky 39495
                  </p>
                </div>
                <div className="flex-1 ml-6 fnd-text text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus turpis.
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image2.jpg"
                alt="Store Image"
                className="rounded-lg shadow-md w-full h-full object-cover"
                style={{ marginTop: '95px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindStore;
