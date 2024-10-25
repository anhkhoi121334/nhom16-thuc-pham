import type { NextApiRequest, NextApiResponse } from 'next';

// Định nghĩa kiểu dữ liệu của sản phẩm (nếu cần)
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  price_sale: number;
  images: string;
  discount: string;
}

// API handler cho endpoint `/api/products`
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Chỉ cho phép phương thức GET
  if (req.method === 'GET') {
    try {
      // Gọi đến JSON Server
      const response = await fetch('http://localhost:3004/products');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: Product[] = await response.json();
      res.status(200).json(data); // Trả về dữ liệu JSON cho frontend
    } catch (error) {
      // Xử lý lỗi nếu có vấn đề khi gọi đến JSON Server
      res.status(500).json({ message: 'Error fetching products', error: (error as Error).message });//+
    }
  } else {
    // Chỉ cho phép phương thức GET, các phương thức khác sẽ trả về lỗi 405
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
