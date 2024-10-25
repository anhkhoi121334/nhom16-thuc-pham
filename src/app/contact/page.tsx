// pages/ContactPage.js

const ContactPage = () => {
  return (
    <>
      <section
        className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-8xl font-bold">Contact</h1>

          {/* Breadcrumb Navigation */}
          <nav className="py-4 text-white">
            <ol className="flex space-x-2 text-gray-200 font-bold text-sm md:text-base">
              <li><a href="#" className="hover:text-amber-600">Home</a></li>
              <li>.</li>
              <li><a href="#" className="hover:text-amber-600">Contact</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <main>
  <div className="contact-area section-space mt-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="contact-info-item text-center">
          <div className="contact-info-icon bg-[#b18b5e] rounded-full p-4 w-12 h-12 flex items-center justify-center mx-auto">
            <span className="text-3xl text-white">
              <i className="fa-solid fa-location-dot"></i>
            </span>
          </div>
          <div className="contact-info-content mt-2">
            <h4 className="text-lg font-semibold">Our Location</h4>
            <p>
              <a href="#" className="text-gray-700 hover:text-blue-600 block">
                House #5, Street Number #98,<br /> Brasilia - 70000-000, Brazil.
              </a>
            </p>
          </div>
        </div>

        <div className="contact-info-item text-center">
          <div className="contact-info-icon bg-[#b18b5e] rounded-full p-4 w-12 h-12 flex items-center justify-center mx-auto">
            <span className="text-3xl text-white"><i className="fa-regular fa-envelope"></i></span>
          </div>
          <div className="contact-info-content">
            <h4 className="text-lg font-semibold">Our Email Address</h4>
            <span className="block">
              <a href="mailto:contact@DOGRI.com" className="text-gray-700 hover:text-blue-600">contact@DOGRI.com</a>
            </span>
            <span className="block">
              <a href="mailto:support@DOGRI.com" className="text-gray-700 hover:text-blue-600">support@DOGRI.com</a>
            </span>
          </div>
        </div>

        <div className="contact-info-item text-center">
          <div className="contact-info-icon bg-[#b18b5e] rounded-full p-4 w-12 h-12 flex items-center justify-center mx-auto">
            <span className="text-3xl text-white"><i className="fa-solid fa-phone"></i></span>
          </div>
          <div className="contact-info-content">
            <h4 className="text-lg font-semibold">Contact Phone Number</h4>
            <span className="block">
              <a href="tel:+380961381876" className="text-gray-700 hover:text-blue-600">+380961381876</a>
            </span>
            <span className="block">
              <a href="tel:+380961381877" className="text-gray-700 hover:text-blue-600">+380961381877</a>
            </span>
          </div>
        </div>
      </div>

      <div className="contact-wrapper pt-20 mb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="contact-map">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4216.433331900906!2d90.36996032419312!3d23.83718617432321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1693682874850!5m2!1sen!2sbd"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div className="custom-bg bg-[#b18b5e] p-6 border border-gray-300">
            <div className="contact-form">
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="0">Pediatric Clinic</option>
                      <option value="2">DOGRIsis Clinic</option>
                      <option value="3">Cardiac Clinic</option>
                      <option value="1">Medical Pharmacy</option>
                      <option value="1">Rehabilitation Therapy</option>
                      <option value="1">Laryngological Clinic</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="0">Choose Doctor</option>
                      <option value="2">Dr. Jalen Kothenbeutel</option>
                      <option value="3">Dr. Jade Dayal</option>
                      <option value="1">Dr. Zander Nishida</option>
                      <option value="1">Dr. Mattie Tellers</option>
                      <option value="1">Dr. Jade Dayal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    name="Message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="fill-btn w-1/4 p-3 text-white transition duration-200"
                    type="submit"
                  >
                    <span className="fill-btn-inner">
                      <span className="fill-btn-normal text-1xl flex items-center">
                        send now<i className="fa-solid fa-angle-right ml-2"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
};

export default ContactPage;
