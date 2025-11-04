import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { get } from "../../utils/api";

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("authToken");

      const response = await get("admin/orders", token);

      // Handle the response structure from your API
      if (response.orders && Array.isArray(response.orders)) {
        setOrders(response.orders);
      } else if (response.status && response.orders) {
        setOrders(response.orders);
      } else if (Array.isArray(response)) {
        setOrders(response);
      } else if (response.data) {
        setOrders(response.data);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError(err.message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status) => {
    const statusLower = status?.toLowerCase() || "";
    if (statusLower.includes("pending")) return "bg-yellow-100 text-yellow-800";
    if (statusLower.includes("completed") || statusLower.includes("delivered"))
      return "bg-green-100 text-green-800";
    if (statusLower.includes("cancelled") || statusLower.includes("rejected"))
      return "bg-red-100 text-red-800";
    if (statusLower.includes("processing") || statusLower.includes("shipping"))
      return "bg-blue-100 text-blue-800";
    return "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-gray-600">Loading orders...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div
        className="p-6 border-b border-gray-100"
        style={{
          background: "linear-gradient(135deg, #e1edfb 0%, #ffffff 100%)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-xl"
            style={{ backgroundColor: "#0f437f" }}
          >
            <ShoppingCart className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
            <p className="text-sm text-gray-600">
              {orders.length} total orders
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ backgroundColor: "#e1edfb" }}>
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                ORDER ID
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                CUSTOMER
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                DATE
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                TOTAL
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 px-6 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={order.id || index}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index === orders.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">
                      #{order.id || "N/A"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: "#064ea4" }}
                      >
                        {order.user?.name
                          ? order.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                          : "U"}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {order.user?.name || "Unknown"}
                        </div>
                        {order.user?.email && (
                          <div className="text-xs text-gray-500">
                            {order.user.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    {formatDate(order.created_at)}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">
                      ${order.total || "0.00"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersSection;
