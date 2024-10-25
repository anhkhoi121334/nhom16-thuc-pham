import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Stunning Furniture with Aesthetic Appeal',
      date: '03 Jan, 2024',
      author: 'Alex Manie',
      imgSrc: 'https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/grid/blog-1.jpg',
      alt: 'Furniture 1',
    },
    // You can add more blog posts here as needed
  ];

  return (
    <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
      <section className="container mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#f5f1e6] rounded-lg shadow-lg p-6 overflow-hidden">
              <div className="overflow-hidden rounded-md">
                <img
                  className="w-full h-62x object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={post.imgSrc}
                  alt={post.alt}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-600 text-sm">{`By ${post.author} | ${post.date}`}</h3>
                <h2 className="text-xl font-semibold text-gray-800 mt-2">{post.title}</h2>
                <a href="#" className="text-indigo-600 mt-2 block">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-1 mt-6">
          <div className="flex space-x-1">
            <button className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#b18b5e] hover:border-[#b18b5e] focus:text-white focus:bg-[#b18b5e] focus:border-[#b18b5e] active:border-[#b18b5e] active:text-white active:bg-[#b18b5e] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Prev
            </button>
            <button className="min-w-9 rounded-full bg-[#b18b5e] py-2 px-3.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#b18b5e] focus:shadow-none active:bg-[#b18b5e] hover:bg-[#b18b5e] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              1
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#b18b5e] hover:border-[#b18b5e] focus:text-white focus:bg-[#b18b5e] focus:border-[#b18b5e] active:border-[#b18b5e] active:text-white active:bg-[#b18b5e] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              2
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#b18b5e] hover:border-[#b18b5e] focus:text-white focus:bg-[#b18b5e] focus:border-[#b18b5e] active:border-[#b18b5e] active:text-white active:bg-[#b18b5e] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              3
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#b18b5e] hover:border-[#b18b5e] focus:text-white focus:bg-[#b18b5e] focus:border-[#b18b5e] active:border-[#b18b5e] active:text-white active:bg-[#b18b5e] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
