import { useState } from "react";

function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMessage("กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น");
        setSelectedImage(null);
        return;
      }

      const maxSizeInBytes = 5 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setErrorMessage("ไฟล์มีขนาดใหญ่เกินไป (สูงสุด 5MB)");
        setSelectedImage(null);
        return;
      }

      setErrorMessage(null);

      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setSelectedImage(null);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productData.name || !productData.price || !productData.description || !productData.quantity) {
      setErrorMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setErrorMessage(null);

    // Submit the data (e.g., API call)
    console.log("Product added:", productData, selectedImage);

    // Optionally reset the form
    setProductData({
      name: "",
      price: "",
      description: "",
      quantity: "",
    });
    setSelectedImage(null);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure price is a valid number and format it
    const formattedPrice = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
    setProductData((prevData) => ({
      ...prevData,
      price: formattedPrice,
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-md mx-auto">
      <h2 className="font-bold text-xl text-center mb-4">จัดการสินค้า</h2>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อสินค้า
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Category Select */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            ประเภทสินค้า
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleSelectChange}
            className="mt-1 block w-full text-sm text-gray-500 border rounded-md shadow-sm focus:ring focus:ring-red-400 focus:outline-none"
          >
            <option value="">กรุณาเลือกประเภทสินค้า</option>
            <option value="electronics">อุปกรณ์อิเล็กทรอนิกส์</option>
            <option value="clothing">เสื้อผ้า</option>
            <option value="furniture">เฟอร์นิเจอร์</option>
          </select>
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            รายละเอียดสินค้า
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Product quantity */}
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            คลัง
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            ราคา
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handlePriceChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
            step="0.01" 
            min="0"
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-center mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
          />
          {errorMessage && (
            <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
          )}
          {selectedImage && (
            <div className="mt-4 relative">
              <img
                src={selectedImage}
                alt="Uploaded Preview"
                className="w-64 h-64 object-cover border rounded-lg shadow-md"
              />
              <button
                onClick={handleReset}
                className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded hover:bg-red-700"
              >
                ลบรูป
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500"
          >
            เพิ่มสินค้า
          </button>
        </div>
      </form>
    </div>
  );
}

export default Products;
