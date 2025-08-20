export default function Home() {
  const products = [
    {
      name: "Tai nghe Bluetooth",
      image: "https://via.placeholder.com/300x200.png?text=Tai+Nghe",
      link: "https://shopee.vn/tai-nghe-bluetooth", // đổi sang link affiliate của anh
    },
    {
      name: "Giày thể thao",
      image: "https://via.placeholder.com/300x200.png?text=Giay+The+Thao",
      link: "https://shopee.vn/giay-the-thao", // đổi link
    },
    {
      name: "Đồng hồ thông minh",
      image: "https://via.placeholder.com/300x200.png?text=Dong+Ho+Thong+Minh",
      link: "https://shopee.vn/dong-ho-thong-minh", // đổi link
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">🛒 Sản phẩm nổi bật</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <a
              href={p.link}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Mua ngay
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
