"use client";

// Định nghĩa interface cho BlogPost
interface BlogPostProps {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  description: string;
}

const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: "Arrangement That's Nearly Perfect",
    author: 'Alex Manie',
    date: '07 Jan, 2024',
    category: 'Chair Design',
    imageUrl: 'https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/blog/blog-image1.jpg',
    description: 'A beautifully designed chair',
  },
  {
    id: 2,
    title: "Eworkstation Arrangement That's",
    author: 'Alex Manie',
    date: '07 Jan, 2024',
    category: 'Sofa Design',
    imageUrl: 'https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/blog/blog-image2.jpg',
    description: 'A beautifully designed sofa',
  },
];

const BlogSection = () => {
  return (
    <div className="w-full py-16 mt-10 my-16 bg-[#F5F1E6]">
      <div className="text-center mb-12">
        <button className="bg-[#B18B5E26] text-[#B18B5E] px-4 py-2 uppercase text-sm font-semibold">
          Read Blog
        </button>
        <h1 className="text-6xl font-bold mt-4">Recent Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 flex flex-col md:flex-row-reverse"
          >
            <img
              alt={post.description}
              src={post.imageUrl}
              className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 md:ml-4 flex-shrink-0"
            />
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-[#B18B5E26] text-[#B18B5E] px-3 py-1 rounded-full text-sm hover:text-[#000000]">
                    {post.category}
                  </span>
                </div>
                <p className="text-gray-500 mb-2">
                  By {post.author} <span className="mx-2">|</span> {post.date}
                </p>
                <div className="hover:text-[#B18B5E] transition duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    {post.title}
                  </h2>
                </div>
              </div>
              <button className="w-16 h-16 bg-[#B18B5E26] text-[#B18B5E] p-3 rounded-full mt-4 hover:bg-[#B18B5E] hover:text-white transition duration-300 ease-in-out">
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
