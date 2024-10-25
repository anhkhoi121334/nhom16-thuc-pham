// pages/faq.js
"use client";
import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Will I have to pay international taxes & duties?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar risus sit amet elit maximus, venenatis dignissim tortor ultricies. Sed lorem arcu, elementum sit amet leo vitae, bibendum congue tortor. Donec efficitur rutrum placerat. Aenean sollicitudin auctor finibus. Cras nec enim id lorem venenatis ultrices. Etiam nisl turpis, rutrum vitae ultricies in, pulvinar et turpis. Morbi tellus dolor, dignissim nec enim id, volutpat cursus enim."
  },
  {
    id: 2,
    question: "Size guides what size should I order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar risus sit amet elit maximus, venenatis dignissim tortor ultricies. Sed lorem arcu, elementum sit amet leo vitae, bibendum congue tortor. Donec efficitur rutrum placerat. Aenean sollicitudin auctor finibus. Cras nec enim id lorem venenatis ultrices. Etiam nisl turpis, rutrum vitae ultricies in, pulvinar et turpis. Morbi tellus dolor, dignissim nec enim id, volutpat cursus enim."
  },
  {
    id: 3,
    question: "The color looks slightly different than the pictures?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar risus sit amet elit maximus, venenatis dignissim tortor ultricies. Sed lorem arcu, elementum sit amet leo vitae, bibendum congue tortor. Donec efficitur rutrum placerat. Aenean sollicitudin auctor finibus. Cras nec enim id lorem venenatis ultrices. Etiam nisl turpis, rutrum vitae ultricies in, pulvinar et turpis. Morbi tellus dolor, dignissim nec enim id, volutpat cursus enim."
  },
  {
    id: 4,
    question: "How do I track my order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar risus sit amet elit maximus, venenatis dignissim tortor ultricies. Sed lorem arcu, elementum sit amet leo vitae, bibendum congue tortor. Donec efficitur rutrum placerat. Aenean sollicitudin auctor finibus. Cras nec enim id lorem venenatis ultrices. Etiam nisl turpis, rutrum vitae ultricies in, pulvinar et turpis. Morbi tellus dolor, dignissim nec enim id, volutpat cursus enim."
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar risus sit amet elit maximus, venenatis dignissim tortor ultricies. Sed lorem arcu, elementum sit amet leo vitae, bibendum congue tortor. Donec efficitur rutrum placerat. Aenean sollicitudin auctor finibus. Cras nec enim id lorem venenatis ultrices. Etiam nisl turpis, rutrum vitae ultricies in, pulvinar et turpis. Morbi tellus dolor, dignissim nec enim id, volutpat cursus enim."
  },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify the type for openIndex

    const toggleAccordion = (index: number) => { // Specify the type for index
      setOpenIndex(openIndex === index ? null : index);
    };
  

  return (
    <>
      <section
        className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-8xl font-bold">Faq</h1>
          <nav className="py-4 text-white">
            <ol className="flex space-x-2 text-gray-200 font-semibold text-sm md:text-base">
              <li><a href="/" className="hover:text-amber-600">Home</a></li>
              <li>.</li>
              <li><a href="#" className="hover:text-amber-600">Faq</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="max-w-7xl mx-auto p-8 pt-10 mt-11 mb-11">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-slate-200 mt-4">
            <button onClick={() => toggleAccordion(item.id)} className="w-full flex justify-between items-center py-2 px-4 text-slate-800 border border-slate-800" style={{ borderRadius: '30px' }}>
              <span className="flex items-center">
                <span className="border border-slate-800 bg-slate-200 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">{item.id < 10 ? `0${item.id}` : item.id}</span>
                <span className="text-lg font-bold">{item.question}</span>
              </span>
              <span className={`text-slate-800 transition-transform duration-300 ${openIndex === item.id ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              </span>
            </button>
            <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === item.id ? 'max-h-40' : ''}`}>
              <div className="pb-5 text-base text-slate-500">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Faq;
