// components/BlogPost.js
import React from 'react';

const BlogPost = () => {
    return (
        <>
         <div
      className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-8xl font-bold">Blog Details</h1>

        {/* Breadcrumb Navigation */}
        <nav className="py-4 text-white">
          <ol className="flex space-x-2 text-gray-200 font-bold text-sm md:text-base">
            <li><a href="#" className="hover:text-amber-600">Home</a></li>
            <li>.</li>
            <li><a href="#" className="hover:text-amber-600">Blog Details</a></li>
          </ol>
        </nav>
      </div>
    </div>
        <main>
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                        <div className="col-span-2 bg-[#f6f6f6] p-[30px]">
                            <div className="p-6 rounded-lg">
                                <article className="mb-12">
                                    <div className="mb-6">
                                        <a href="blog-details.html">
                                            <img
                                                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-01.jpg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                                            <span className="flex items-center space-x-2">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                                                    ></path>
                                                </svg>
                                                <a href="#" className="hover:underline">By Alex Manie</a>
                                            </span>
                                            <span className="flex items-center space-x-2">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 8v4l3 2"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 20.485A8.5 8.5 0 113 9.5"
                                                    ></path>
                                                </svg>
                                                January 22, 2022
                                            </span>
                                            <span className="flex items-center space-x-2">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 20.485A8.5 8.5 0 113 9.5"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15.5 9.5a3 3 0 100 6 3 3 0 000-6z"
                                                    ></path>
                                                </svg>
                                                35
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4">
                                            <a href="blog-details.html" className="hover:text-blue-600">How to Make your Home a Showplace</a>
                                        </h3>
                                        <p className="text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum.
                                        </p>
                                    </div>
                                </article>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">
                                        <a href="#" className="hover:text-blue-600">Stunning Furniture with Aesthetic Appeal</a>
                                    </h3>
                                    <p className="text-gray-700 mb-6">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <img
                                            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-04.jpg"
                                            alt=""
                                            className="w-full rounded-md"
                                        />
                                        <img
                                            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-05.jpg"
                                            alt=""
                                            className="w-full rounded-md"
                                        />
                                    </div>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Reduced symptoms of anxiety and depression.</li>
                                        <li>Improved stress management: Mindfulness meditation has been shown.</li>
                                        <li>Better emotional regulation: Mindfulness practice.</li>
                                        <li>Increased self-awareness: Mindfulness meditation can help individuals.</li>
                                    </ul>
                                </div>

                                <div className="my-8 p-6 border border-gray-300">
                                    <blockquote className="text-xl italic">
                                        <p>“I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.”</p>
                                        <div className="mt-4 text-right">
                                            <h4 className="font-semibold">Keith Griffin</h4>
                                            <span className="text-gray-500 text-sm">Doctor</span>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start py-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 text-gray-500">
                                        <span>Tags:</span>
                                        <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 mt-1 inline-block w-20 text-center">Blog</a>
                                        <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 mt-1 inline-block w-20 text-center">Creative</a>
                                        <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 mt-1 inline-block w-20 text-center">Portfolio</a>
                                        <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 mt-1 inline-block w-20 text-center">Harry</a>
                                    </div>

                                    <div className="flex items-center space-x-4 text-gray-500 mt-4 md:mt-0">
                                        <span>Share On:</span>
                                        <div className="flex space-x-4">
                                            <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 inline-block w-10 text-center">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                            <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 inline-block w-10 text-center">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="hover:text-blue-600 border border-gray-300 p-1 inline-block w-10 text-center">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>



                                {/* Comments Section */}
                                <div className="postbox__comment mb-6">
                                    <h3 className="postbox__comment-title text-3xl font-semibold mb-4">Comments (2)</h3>
                                    <ul>
                                        <li>
                                            <div className="postbox__comment-box flex items-start mb-8">
                                                <div className="postbox__comment-info mr-4">
                                                    <div className="postbox__comment-avatar">
                                                        <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/user/user-01.png" alt="User Avatar" className="w-24 h-22" />
                                                    </div>
                                                </div>
                                                <div className="postbox__comment-text">
                                                    <div className="postbox__comment-name">
                                                        <span className="post-meta">July 14, 2022</span>
                                                        <h5><a href="#">Eleanor Fant</a></h5>
                                                    </div>
                                                    <p>One’s of the best template out of there. Design, code quality, updates, etc. Everything you need, guys, buy it you won’t regret it!</p>
                                                    <div className="postbox__comment-reply border border-gray-300 rounded-md p-2 mt-2 inline-block">
                                                        <a href="#" className="text-blue-600 hover:underline">Reply</a>
                                                    </div>

                                                    {/* Comment reply mới */}
                                                    <div className="postbox__comment-box flex items-start mt-8">
                                                        <div className="postbox__comment-info mr-4">
                                                            <div className="postbox__comment-avatar">
                                                                <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/user/user-02.png" alt="User Avatar" className="w-24 h-22" />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name">
                                                                <span className="post-meta">July 15, 2022</span>
                                                                <h5><a href="#">John Doe</a></h5>
                                                            </div>
                                                            <p>Thank you for the feedback! Glad you liked the template.</p>
                                                            <div className="postbox__comment-reply border border-gray-300 rounded-md p-2 mt-2 inline-block">
                                                                <a href="#" className="text-blue-600 hover:underline">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="children">
                                                <li>
                                                    <div className="postbox__comment-box flex items-start mb-4">
                                                        <div className="postbox__comment-info mr-4">
                                                            <div className="postbox__comment-avatar">
                                                                <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/user/user-01.png" alt="User Avatar" className="w-24 h-22" />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name">
                                                                <span className="post-meta">July 14, 2022</span>
                                                                <h5><a href="#">Eleanor Fant</a></h5>
                                                            </div>
                                                            <p>One’s of the best template out of there. Design, code quality, updates, etc. Everything you need, guys, buy it you won’t regret it!</p>
                                                            <div className="postbox__comment-reply border border-gray-300 rounded-md p-2 mt-2 inline-block">
                                                                <a href="#" className="text-blue-600 hover:underline">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>


                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold mb-4">Leave A Reply</h3>
                                    <h4 className="text-xl mb-4">Your email address will not be published. Required fields are marked *</h4>
                                    <form>
                                        <div className="flex flex-col md:flex-row gap-10 mb-4">
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    className="w-full p-5 border border-gray-300"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    type="email"
                                                    className="w-full p-5 border border-gray-300"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="mb-4">
                                            <textarea
                                                className="w-full p-4 border border-gray-300"
                                                rows={4}
                                                placeholder="Write your comment..."
                                            ></textarea>

                                        </div>
                                        <div className="mb-4">
                                            <label className="flex items-center">
                                                <input type="checkbox" className="mr-2" />
                                                <span className="text-gray-700">Save my name, email, and website in this browser for the next time I comment.</span>
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white w-full md:w-1/4 px-4 py-4 rounded-full"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#f6f6f6] p-[30px]'>
                            <div className="p-6 sticky top-6">
                                {/* Form tìm kiếm */}
                                <form action="#">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your keywords..."
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                        >
                                            <svg
                                                className="w-5 h-5 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 4.35z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>

                                {/* Phần Category */}
                                <div className="mt-20">
                                    <h3 className="text-lg font-semibold mb-4">Category</h3>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                            <span className="text-gray-700 font-medium">• Business</span>
                                            <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">10</span>
                                        </li>
                                        <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                            <span className="text-gray-700 font-medium">• Cleaning</span>
                                            <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">08</span>
                                        </li>
                                        <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                            <span className="text-gray-700 font-medium">• Consultant</span>
                                            <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">24</span>
                                        </li>
                                        <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                            <span className="text-gray-700 font-medium">• Creative</span>
                                            <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">37</span>
                                        </li>
                                        <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                            <span className="text-gray-700 font-medium">• Technology</span>
                                            <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">103</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Recent Post */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
                                    <div className="space-y-4">
                                        {/* Post 1 */}
                                        <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                            <img
                                                src="image1.jpg"
                                                alt="Business meeting 2021 in San Francisco"
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <div>
                                                <h4 className="text-gray-700 font-semibold">Business meeting 2021 in San Francisco</h4>
                                                <p className="text-sm text-gray-500 flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 7v2m4 8h8v2m-9-2h2V7m-4 0a9 9 0 110-18 9 9 0 0118 0 9 9 0 01-18 0zm4 0h4"
                                                        ></path>
                                                    </svg>
                                                    July 21, 2022
                                                </p>
                                            </div>
                                        </div>
                                        {/* Post 2 */}
                                        <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                            <img
                                                src="image2.jpg"
                                                alt="Developing privacy user-centric apps"
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <div>
                                                <h4 className="text-gray-700 font-semibold">Developing privacy user-centric apps</h4>
                                                <p className="text-sm text-gray-500 flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 7v2m4 8h8v2m-9-2h2V7m-4"
                                                        ></path>
                                                    </svg>
                                                    July 21, 2022
                                                </p>
                                            </div>
                                        </div>
                                        {/* Post 3 */}
                                        <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                            <img
                                                src="image3.jpg"
                                                alt="Starting and Growing Web Design in 2022"
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <div>
                                                <h4 className="text-gray-700 font-semibold">Starting and Growing Web Design in 2022</h4>
                                                <p className="text-sm text-gray-500 flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 7v2m4 8h8v2m-9-2h2V7m-4"
                                                        ></path>
                                                    </svg>
                                                    July 21, 2022
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-20">
                                    <h3 className="text-lg font-semibold mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Technology</span>
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Food</span>
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Personality</span>
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Life Style</span>
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Travel</span>
                                        <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Nature</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
        
    );
};

export default BlogPost;
