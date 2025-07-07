export default function InventoryCard({ product, quantity }) {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <p className="text-lg font-semibold text-gray-800">{product}</p>
      <p className="text-sm text-gray-600">Stock: {quantity}</p>
    </div>
  );
}
