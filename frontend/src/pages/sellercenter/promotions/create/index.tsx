import { useState } from "react";

function PromotionsCreate() {
  const [promotionData, setPromotionData] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ฟังก์ชันในการจัดการการเปลี่ยนแปลงค่าของ input fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPromotionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ฟังก์ชันในการตรวจสอบและส่งข้อมูล
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลที่กรอกให้ครบถ้วน
    if (
      !promotionData.title ||
      !promotionData.description ||
      !promotionData.discount ||
      !promotionData.startDate ||
      !promotionData.endDate
    ) {
      setErrorMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // รีเซ็ตข้อความ error
    setErrorMessage(null);

    // ส่งข้อมูลโปรโมชันไปยังเซิร์ฟเวอร์ (หรือประมวลผลตามที่ต้องการ)
    console.log("Promotion created:", promotionData);

    // รีเซ็ตฟอร์มหลังจากการส่งข้อมูล
    setPromotionData({
      title: "",
      description: "",
      discount: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-md mx-auto">
      <h2 className="font-bold text-xl text-center mb-4">สร้างโปรโมชั่นใหม่</h2>

      <form onSubmit={handleSubmit}>
        {/* Promotion Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อโปรโมชั่น
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={promotionData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Promotion Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            รายละเอียดโปรโมชั่น
          </label>
          <textarea
            id="description"
            name="description"
            value={promotionData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Discount Percentage */}
        <div className="mb-4">
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            ส่วนลด (%) 
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={promotionData.discount}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
            min="0"
            max="100"
          />
        </div>

        {/* Promotion Start Date */}
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            วันที่เริ่มโปรโมชั่น
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={promotionData.startDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Promotion End Date */}
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            วันที่สิ้นสุดโปรโมชั่น
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={promotionData.endDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500"
          >
            สร้างโปรโมชั่น
          </button>
        </div>
      </form>
    </div>
  );
}

export default PromotionsCreate;
