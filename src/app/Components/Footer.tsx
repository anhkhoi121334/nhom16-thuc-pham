import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222222' }} className="text-white">
      <div className="p-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            {/* Footer Widget 1 */}
            <div className="footer-widget mr-10 flex-1 min-w-[250px] mb-8">
              <div className="footer-logo mb-8">
                <Link href="/">
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/logo/logo-light.svg"
                    alt="Logo"
                    width={160}
                    height={50}
                  />
                </Link>
              </div>
              <p className="text-gray-400 text-xl">
                It helps designers plan out where the content will sit, the content to be written and approved.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Icons */}
                <a className="text-white hover:text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]" href="#">
                  {/* Facebook Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a className="text-white hover:text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
                {/* Add more social icons similarly */}
                <a className="text-white hover:text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
                <a className="text-white hover:text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Widget 2 - Services */}
            <div className="footer-widget flex-1 min-w-[250px] mb-8">
              <h4 className="font-bold mb-4 text-2xl">Services</h4>
              <ul className="space-y-4 text-xl mb-4 font-semibold">
                <li>
                  <Link href="/login" className="text-gray-400 hover:text-white">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-gray-400 hover:text-white">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/return-policy" className="text-gray-400 hover:text-white">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    Shopping FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Widget 3 - Company */}
            <div className="footer-widget flex-1 min-w-[250px] mb-8">
              <h4 className="font-bold mb-4 text-2xl">Company</h4>
              <ul className="space-y-4 text-xl mb-4 font-semibold">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-gray-400 hover:text-white">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Widget 4 - Contact */}
            <div className="footer-widget flex-1 min-w-[250px] mb-8">
              <h3 className="font-bold mb-4 text-2xl">Contact</h3>
              <p className="mb-4 mt-4 text-xl" style={{ color: '#555555' }}>
                4517 Washington Ave.<br />
                Manchester, Kentucky 39495
              </p>
              <div className="flex items-start mb-4">
              <span className="mr-4 text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
              </span>
              <a className="text-gray-400 hover:text-white" href="tel:012-345-6789">711-2880 Nulla St.</a>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-4 text-white rounded-full p-2 bg-white transition-all duration-300 hover:bg-[#B18B5E]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
            </span>
            <div className="flex flex-col">
                <a className="text-gray-400 hover:text-white" href="tel:012-345-6789">+964 742 44 763</a>
                <a className="text-gray-400 hover:text-white" href="tel:012-345-6789">Mon - Sat: 9 AM - 5 PM</a>
            </div>
        </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 mt-8">
          <hr className="mb-4" />
          <div className="flex justify-between items-center">
            <div className="text-gray-400">
              <p className="text-lg">© 2023, Addina. All rights reserved.</p>
            </div>
            <div className="text-gray-400">
              <p>Terms · Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

