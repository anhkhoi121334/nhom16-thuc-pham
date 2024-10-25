import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image từ Next.js

const Portfolio = () => {
  return (
    <>
      <div className='bg-[#f5f1e6] min-h-screen flex flex-col'>
        <section
          className="relative min-h-[400px] bg-cover bg-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Portfolio</h1>

            {/* Breadcrumb Navigation */}
            <nav className="py-4 text-white">
              <ol className="flex space-x-2 text-gray-200 font-bold text-sm md:text-base">
                <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
                <li>.</li>
                <li><Link href="/portfolio" className="hover:text-amber-600">Portfolio</Link></li>
              </ol>
            </nav>
          </div>
        </section>

        <main className="mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Project Item 1 */}
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="project-item group relative">
                  <div className="project-thumb w-img">
                    <Image
                      src="/img/project-01.jpg"
                      alt="Project Image"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <div
                    className="project-content-inner p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0"
                    style={{
                      background: 'linear-gradient(0deg, #b18b5e 0%, rgba(235, 117, 59, 0) 100%)',
                      backgroundColor: 'rgba(177, 139, 94, 0.5)',
                    }}
                  >
                    <div className="project-content">
                      <span className="text-xl text-white">Decoration</span>
                      <h4 className="text-2xl font-semibold">
                        <Link href="portfolio-details">
                          <span className="text-white cursor-pointer">Mestre Beardom</span>
                        </Link>
                      </h4>
                    </div>
                    <Link href="portfolio-details">
                      <div className="round-link-40 flex items-center justify-center w-20 h-20 border border-white rounded-full text-white hover:bg-[#B18B5E] hover:text-white transition duration-200">
                        <i className="fa-solid fa-chevron-right text-3xl"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-10 mb-10">
            <div className="pagination__wrapper">
              <div className="bd-basic__pagination flex items-center justify-center">
                <nav>
                  <ul className="flex space-x-4">
                    <li>
                      <Link href="/page/1" className="flex font-bold items-center justify-center w-12 h-12 border border-[rgba(85,85,85,0.2)] rounded-full text-blue-600 hover:bg-white hover:text-blue-600 transition duration-200">1</Link>
                    </li>
                    <li>
                      <Link href="/page/2" className="flex font-bold items-center justify-center w-12 h-12 border border-[rgba(85,85,85,0.2)] rounded-full text-blue-600 hover:bg-white hover:text-blue-600 transition duration-200">2</Link>
                    </li>
                    <li>
                      <Link href="/page/3" className="flex font-bold items-center justify-center w-12 h-12 border border-[rgba(85,85,85,0.2)] rounded-full text-blue-600 hover:bg-white hover:text-blue-600 transition duration-200">3</Link>
                    </li>
                    <li>
                      <Link href="/page/next" className="flex items-center justify-center w-12 h-12 border border-[rgba(85,85,85,0.2)] rounded-full text-blue-600 hover:bg-white hover:text-blue-600 transition duration-200">
                        <i className="fa-solid fa-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
