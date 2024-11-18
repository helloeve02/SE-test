import React from 'react';

function Dashboard() {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        {/* ส่วนของโฆษณา */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-center mb-4'>โฆษณาของเรา</h2>
          <div className='flex justify-center'>
            <img
              src="https://via.placeholder.com/800x250?text=โฆษณาที่น่าสนใจ"
              alt="Banner Ad"
              className='w-full h-auto rounded-md'
            />
          </div>
        </div>

        {/* ส่วนแสดงสินค้า */}
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold text-center mb-4'>สินค้าของเรา</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* สินค้า 1 */}
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src="https://via.placeholder.com/300x300?text=Product+1"
                alt="Product 1"
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold'>สินค้าชิ้นที่ 1</h3>
              <p className='text-gray-600'>ราคา: ฿1,200</p>
            </div>

            {/* สินค้า 2 */}
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src="https://via.placeholder.com/300x300?text=Product+2"
                alt="Product 2"
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold'>สินค้าชิ้นที่ 2</h3>
              <p className='text-gray-600'>ราคา: ฿1,500</p>
            </div>

            {/* สินค้า 3 */}
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src="https://via.placeholder.com/300x300?text=Product+3"
                alt="Product 3"
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold'>สินค้าชิ้นที่ 3</h3>
              <p className='text-gray-600'>ราคา: ฿800</p>
            </div>

            {/* สินค้า 4 */}
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src="https://via.placeholder.com/300x300?text=Product+4"
                alt="Product 4"
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold'>สินค้าชิ้นที่ 4</h3>
              <p className='text-gray-600'>ราคา: ฿1,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
