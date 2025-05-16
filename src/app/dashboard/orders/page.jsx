"use client";

import { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import orders from "@/data/orders.json";
import Loading from "@/components/Loading";
import PublicLayout from "@/components/PublicLayout";

const OrdersTable = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setOrderData(orders);
  }, []);

  return (
      <Box overflowX="auto" border="1px solid #e2e8f0" borderRadius="md" p={4} bg="white">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full">
            <thead className="text-xs md:text-sm">
            <tr>
              <th className="p-2 text-left font-light">Order ID</th>
              <th className="p-2 text-left font-light">Customer ID</th>
              <th className="p-2 text-left font-light">Total</th>
              <th className="p-2 text-left font-light">Date</th>
              <th className="p-2 text-left font-light">Items</th>
            </tr>
            </thead>
            <tbody>
            {orderData.map((order, idx) => (
                <tr
                    key={order.id}
                    className={`text-[.7rem] rounded ${
                        idx % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                    }`}
                >
                  <td>{order.id}</td>
                  <td>{order.customerId}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.items.map((item, index) => (
                        <div key={index}>
                          Product ID: {item.productId}, Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
                        </div>
                    ))}
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Box>
  );
};

export default function OrdersPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <PublicLayout
          className="bg-gray-300"
          breadcrumbTitle={"Orders"}
          breadcrumb={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Orders", path: "/dashboard/orders/" },
          ]}
      >
        {loading ? (
            <Loading />
        ) : (
            <Box>
              <Heading as="h1" size="lg" mb={4}>
                Orders
              </Heading>
              <OrdersTable />
            </Box>
        )}
      </PublicLayout>
  );
}