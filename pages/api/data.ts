import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = join(process.cwd(), 'public', 'db.json');
    
    // Log đường dẫn file
    console.log('Reading file from:', filePath);

    // Kiểm tra file có tồn tại không
    if (!existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    const data = readFileSync(filePath, 'utf8');

    // Kiểm tra nội dung file
    if (!data) {
      return res.status(404).json({ error: 'Data is empty' });
    }

    // Trả về nội dung JSON
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading file:', error); // Log chi tiết lỗi
    res.status(500).json({ error: 'Failed to read data' });
  }
}
