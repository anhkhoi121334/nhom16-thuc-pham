module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      '@next/next/no-img-element': 'off', // Tắt cảnh báo cho <img>
      '@typescript-eslint/no-unused-vars': 'off', // Tắt cảnh báo biến không sử dụng
      '@typescript-eslint/no-explicit-any': 'off', // Tắt cảnh báo kiểu any
      '@next/next/no-sync-scripts': 'off', // Tắt cảnh báo script đồng bộ
      "react/no-unescaped-entities": "off"

    },
  };
  