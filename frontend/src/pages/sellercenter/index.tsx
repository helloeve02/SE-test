import { Link } from "react-router-dom";

const SellerCenter = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-red-600 text-white p-6">
        <div className="text-2xl font-bold mb-8">Seller Center</div>
        <div className="flex flex-col space-y-4">
          <Link to="/sellercenter/products" className="hover:text-gray-300">
            จัดการสินค้า
          </Link>
          <Link to="/seller/orders" className="hover:text-gray-300">
            คำสั่งซื้อ
          </Link>
          <Link to="/seller/analytics" className="hover:text-gray-300">
            รายงานการขาย
          </Link>
          <Link to="/sellercenter/promotions/create" className="hover:text-gray-300">
            สร้างโปรโมชั่น
          </Link>
          <Link to="/seller/settings" className="hover:text-gray-300">
            การตั้งค่า
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Dashboard */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">ยอดขายวันนี้</h3>
              <p className="text-lg">฿5,000</p>
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">คำสั่งซื้อที่รอดำเนินการ</h3>
              <p className="text-lg">12</p>
            </div>
            <div className="bg-yellow-600 text-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">สินค้าขายดี</h3>
              <p className="text-lg">50</p>
            </div>
          </div>
        </div>

        {/* Product Management */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">จัดการสินค้า</h2>
          <div className="flex justify-between items-center mb-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              เพิ่มสินค้าใหม่
            </button>
            <input
              type="text"
              placeholder="ค้นหาสินค้า"
              className="w-1/3 p-2 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example Product Card */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">สินค้า 1</h3>
              <p className="text-gray-500 mt-2">฿199.99</p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  แก้ไข
                </button>
                <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                  ลบ
                </button>
              </div>
            </div>
            {/* More product cards... */}
          </div>
        </div>

        {/* Order Management */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">คำสั่งซื้อ</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">รหัสคำสั่งซื้อ</th>
                <th className="px-4 py-2 border">ลูกค้า</th>
                <th className="px-4 py-2 border">สถานะ</th>
                <th className="px-4 py-2 border">การกระทำ</th>
              </tr>
            </thead>
            <tbody>
              {/* Example order */}
              <tr>
                <td className="px-4 py-2 border">#12345</td>
                <td className="px-4 py-2 border">ลูกค้าชื่อ A</td>
                <td className="px-4 py-2 border">รอดำเนินการ</td>
                <td className="px-4 py-2 border">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    ดูรายละเอียด
                  </button>
                </td>
              </tr>
              {/* More orders... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerCenter;
