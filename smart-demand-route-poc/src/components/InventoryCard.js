export default function InventoryCard({ product, quantity }) {
  return (
    <div className="p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-800">{product}</h3>
        <span className="text-sm font-medium text-gray-500">
          🛒 In Stock
        </span>
      </div>
      <div className="text-gray-700 text-sm">
        Quantity Available:{" "}
        <span className="font-semibold text-gray-900">{quantity}</span>
      </div>
      <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            quantity > 20
              ? "bg-green-500"
              : quantity > 10
              ? "bg-yellow-400"
              : "bg-red-500"
          } transition-all`}
          style={{ width: `${Math.min(quantity, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}
