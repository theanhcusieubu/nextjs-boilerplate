export default function Home() {
  const products = [
    {
      name: "Tai nghe Bluetooth",
      price: "299.000đ",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltuwxzt7xw7p20",
      link: "https://shopee.vn/mylink1"
    },
    {
      name: "Đồng hồ thông minh",
      price: "499.000đ",
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-p5z1c5hjmykv0c",
      link: "https://shopee.vn/mylink2"
    },
    {
      name: "Giày thể thao nam",
      price: "399.000đ",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljoxu8qz9a2e18",
      link: "https://shopee.vn/mylink3"
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-500">🛒 Sell Tổng Hợp</h1>
        <p className="text-gray-300 mt-2">Chọn ngay sản phẩm hot nhất - Giá tốt - Hoa hồng affiliate 🚀</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-400">{p.name}</h2>
              <p className="mt-2 text-lg font-bold">{p.price}</p>
              <a href={p.link} target="_blank" className="inline-block mt-4 w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg">
                🔗 Mua ngay
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center text-gray-400 mt-10 text-sm">
        © 2025 Sell Tổng Hợp | Liên kết affiliate Shopee / Lazada / Tiki
      </footer>
    </main>
  );
}
