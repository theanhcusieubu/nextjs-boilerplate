import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Navbar */}
        <nav className="flex items-center justify-center gap-6 p-4 bg-gray-900 shadow-md">
          <Link href="/" className="hover:text-red-500">🏠 Home</Link>
          <Link href="/login" className="hover:text-red-500">🔑 Login</Link>
          <Link href="/register" className="hover:text-red-500">📝 Register</Link>
          <Link href="/address" className="hover:text-red-500">📦 Address</Link>
        </nav>

        {/* Nội dung trang */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
