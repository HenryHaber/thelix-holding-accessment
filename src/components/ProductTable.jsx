export default function ProductTable({ products }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full">
        <thead className="text-xs md:text-sm">
          <tr>
            <th className="p-2 text-left font-light">Product Name</th>
            <th className="p-2 text-left font-light">Price</th>
            <th className="p-2 text-left font-light">Status</th>
            <th className="p-2 text-left font-light">Categories</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr
              key={product.id}
              className={`text-[.7rem] rounded ${
                idx % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
              }`}
            >
              <td className="p-2 whitespace-nowrap">{product.name}</td>
              <td className="p-2 whitespace-nowrap">{product.price}</td>
              <td className="p-2 whitespace-nowrap">{product.status}</td>
              <td className="p-2 whitespace-nowrap">
                {product.categories.map((cat) => cat.name).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
