"use client";

// Định nghĩa interface cho Card
interface CardProps {
  id: number;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  backgroundColor: string;
  images?: string[];
}

const cardsData: CardProps[] = [
  {
    id: 1,
    title: 'Exclusive offers for you',
    description: 'Get weekly deals, valuable health information and more.',
    linkText: 'SIGN UP >',
    linkUrl: '#',
    backgroundColor: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Join Our Community',
    description: 'Get weekly deals, valuable health information and more.',
    linkText: 'JOIN FREE NOW >',
    linkUrl: '#',
    backgroundColor: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Get our FREE app Now!',
    description: 'Get weekly deals, valuable health information and more.',
    backgroundColor: 'bg-pink-100',
    images: [
      'https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/app/play-store.png',
      'https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/app/apple-store.png',
    ],
  },
];

const InfoCards = () => {
  return (
    <div className="container mx-auto px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <div key={card.id} className={`${card.backgroundColor} p-10 rounded-lg shadow-md`}>
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="mb-4">{card.description}</p>
            
            {card.linkText && card.linkUrl && (
              <a
                href={card.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-600 px-4 py-2 hover:bg-gray-100 transition-all duration-300"
              >
                {card.linkText}
              </a>
            )}

            {card.images && (
              <div className="flex justify-center space-x-4 mt-4">
                {card.images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-black p-3 m-1 hover:scale-105 duration-300 rounded"
                  >
                    <img
                      src={image}
                      alt={`Store ${index + 1}`}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
