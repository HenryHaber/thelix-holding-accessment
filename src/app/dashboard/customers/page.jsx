"use client";

import { useState, useEffect } from "react";
import { Box, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import customers from "@/data/customers.json";
import Loading from "@/components/Loading";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setCustomerData(customers);
  }, []);

  return (
      <Box overflowX="auto" border="1px solid #e2e8f0" borderRadius="md" p={4} bg="white">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full">
            <thead className="text-xs md:text-sm">
            <tr>
              <th className="p-2 text-left font-light">Name</th>
              <th className="p-2 text-left font-light">Email</th>
              <th className="p-2 text-left font-light">Phone</th>
              <th className="p-2 text-left font-light">Address</th>
              <th className="p-2 text-left font-light">Orders</th>
              <th className="p-2 text-left font-light">Total Spent</th>
              <th className="p-2 text-left font-light">Joined Date</th>
            </tr>
            </thead>
            <tbody>
            {customerData.map((customer, idx) => (
                <tr
                    key={customer.id}
                    className={`text-[.7rem] rounded ${
                        idx % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                    }`}
                >
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td>{customer.orders}</td>
                  <td>${customer.totalSpent.toFixed(2)}</td>
                  <td>{customer.joinedDate}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Box>
  );
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <Box>
        {loading ? (
            <Loading />
        ) : (
            <Box>
              <Heading as="h1" size="lg" mb={4}>
                Customers
              </Heading>
              <CustomerTable />
            </Box>
        )}
      </Box>
  );
}