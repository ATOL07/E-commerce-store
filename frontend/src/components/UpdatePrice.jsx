import { useState } from "react";
import { useProductStore } from "../stores/useProductStore";

const UpdatePrice = ({ productId }) => {
  const { updateProductPrice } = useProductStore();
  const [newPrice, setNewPrice] = useState("");

  const handleUpdate = () => {
    if (newPrice && !isNaN(newPrice)) {
      updateProductPrice(productId, parseFloat(newPrice));
      setNewPrice("");
    } else {
      alert("Please enter a valid price");
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
        placeholder="New Price"
        className="px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-sm text-white"
      />
      <button
        onClick={handleUpdate}
        className="ml-2 px-3 py-1 bg-emerald-600 text-white rounded-md"
      >
        Update Price
      </button>
    </div>
  );
};

export default UpdatePrice;
