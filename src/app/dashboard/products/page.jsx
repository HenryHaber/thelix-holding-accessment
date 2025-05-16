"use client";

import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Loading from "@/components/Loading";
import SearchForm from "@/components/SearchForm";
import ProductTable from "@/components/ProductTable";
import CategoryFilter from "@/components/CategoryFilter";
import Pagination from "@/components/Pagination";
import CreateProductModal from "@/components/CreateProductModal";
import { useSearch } from "@/context/SearchContext";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([
    {
      id: "",
      name: "",
      price: "",
      status: "",
      categories: []
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30); // Updated to 30 items per page
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // Mocking product structure
        const mockProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: `$${(Math.random() * 100).toFixed(2)}`,
          status: "In Stock",
          categories: [{ name: "Category 1" }, { name: "Category 2" }],
        }));

        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and search logic
  const filteredProducts = products
    ? products.filter((product) => {
        const matchesCategory =
          selectedCategory === "All" ||
          product.categories.some((cat) => cat.name === selectedCategory);
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : null;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page
  };

  const handleCreateProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]); // Add new product to the list
  };

  return (
    <PublicLayout
      className="bg-gray-300"
      breadcrumbTitle={"Products"}
      breadcrumb={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Products", path: "/dashboard/products/" },
      ]}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="p- max-w-full overflow-x-auto">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)} // Open the modal
              className="flex items-center bg-[#ed5b1b] text-white px-4 py-2 rounded-md text-[.7rem] gap-3"
            >
              <FaPlus />
              <span>Create a Product</span>
            </button>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={["All", "Category 1", "Category 2"]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <main className="p-2 bg-white">
            <div className="md:flex md:justify-between items-center gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <SearchForm />
              </div>
            </div>

            {/* Product Table */}
            <ProductTable products={paginatedProducts} />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      )}

      {/* Create Product Modal */}
      {isModalOpen && (
        <CreateProductModal
          onClose={() => setIsModalOpen(false)} // Close the modal
          onCreate={handleCreateProduct} // Handle product creation
        />
      )}
    </PublicLayout>
  );
}
