import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-red-600 px-4 py-1 text-white flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/sellercenter" className="hover:text-gray-300">
            Seller Centre
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            ติดต่อ
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/notification" className="hover:text-gray-300">
            แจ้งเตือน
          </Link>
          <Link to="/help" className="hover:text-gray-300">
            ช่วยเหลือ
          </Link>
          <Link to="/account" className="hover:text-gray-300">
            บัญชีผู้ใช้
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-red-600 p-4 text-white flex justify-between items-center">
        <div className="text-2xl font-bold">Shoppo</div>
        <input
          type="text"
          placeholder="ค้นหาสินค้าและร้านค้า"
          className="w-1/3 p-2 rounded focus:outline-none"
        />
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">เข้าสู่ระบบ</button>
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white rounded-full px-2">
              0
            </span>
            <button className="text-xl">🛒</button>
          </div>
        </div>
      </nav>

      {/* Banner 
      <div className="relative bg-white py-4">
        <div className="overflow-hidden relative">
          <img
            src="https://via.placeholder.com/1200x300"
            alt="Banner"
            className="mx-auto w-5/12 h-60 object-cover rounded"
          />
        </div>
      </div> */}

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <Outlet /> {/* Render หน้าเฉพาะ */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 Shoppo. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
