"use client";
import RouteMap from "@/components/RouteMap";
import InventoryCard from "@/components/InventoryCard";
import ForecastChart from "@/components/ForecastChart";
import { useState, useEffect } from "react";
import  mockInventory  from "@/data/mockInventory";

export type InventoryItem = {
  product: string;
  quantity: number;
};

export default function Dashboard() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    setInventory(mockInventory);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setInventory((prev) =>
        prev.map((item) => ({
          ...item,
          quantity: Math.max(0, item.quantity - Math.floor(Math.random() * 3)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">
          📊 Smart Demand Forecasting Dashboard
        </h1>

        {/* Inventory Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📦 Current Inventory
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {inventory.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              >
                <InventoryCard product={item.product} quantity={item.quantity} />
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📈 Demand Forecast
          </h2>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <ForecastChart />
          </div>
        </div>

        {/* Route Map Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚚 Optimized Delivery Route
          </h2>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <RouteMap />
          </div>
        </div>
      </div>
    </div>
  );
}
