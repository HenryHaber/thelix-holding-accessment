export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex text-[.7rem] space-x-2 border-b border-gray-200 w-full text-sm my-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`${
            selectedCategory === category
              ? "text-[#ed5b1b] font-bold"
              : "text-gray-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
