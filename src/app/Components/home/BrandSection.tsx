"use client";

// Định nghĩa interface cho Brand
interface BrandProps {
  id: number;
  alt: string;
  src: string;
}

const brandData: BrandProps[] = [
  { id: 1, alt: 'Award badge 2', src: '/img/brand/brand-01.png' },
  { id: 2, alt: 'Award badge 3', src: '/img/brand/brand-02.png' },
  { id: 3, alt: 'Award badge 4', src: '/img/brand/brand-03.png' },
  { id: 4, alt: 'Award badge 5', src: '/img/brand/brand-04.png' },
  { id: 5, alt: 'Award badge 6', src: '/img/brand/brand-05.png' },
];

const BrandSection = () => {
  return (
    <div className="container mx-auto px-8 py-10">
      <div className="flex justify-around items-center flex-wrap">
        {brandData.map((brand) => (
          <img
            key={brand.id}
            alt={brand.alt}
            src={brand.src}
            width={100}
            height={100}
            className="m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
