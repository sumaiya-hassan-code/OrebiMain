




const Pagination = ({ totalProducts, productsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t pt-6 gap-4">
    
    <div className="flex gap-2">
        {pageNumbers.map((number) => (
        <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 text-sm font-medium border transition-colors rounded ${
            currentPage === number
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}>
            {number}
        </button>
        ))}
    </div>

    <div className="text-sm text-gray-500">
        Products from {((currentPage - 1) * productsPerPage) + 1} to{' '}
        {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts}
    </div>

    </div>
  );
};

export default Pagination;