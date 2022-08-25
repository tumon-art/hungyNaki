interface Pagination {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}
const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
}: Pagination) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" flex justify-center gap-4 items-center my-5">
      <div
        className=" cursor-pointer hover:bg-red-800 
         bg-red-600 text-white px-1 pb-[2px]"
        onClick={() => {
          if (currentPage !== 1) paginate(currentPage - 1);
        }}
      >
        Prev
      </div>
      {pageNumbers.map((e) => (
        <div
          className={` hover:bg-red-800 hover:text-white transition-colors
          cursor-pointer px-2 ring-red-600 ring-2 text-sm
          ${currentPage == e && "bg-red-600 text-white"}`}
          key={e}
        >
          <a onClick={() => paginate(e)} className="page-link">
            {e}
          </a>
        </div>
      ))}
      <div
        className="  cursor-pointer hover:bg-red-800 
         bg-red-600 text-white px-1 pb-[2px]"
        onClick={() => {
          if (currentPage == pageNumbers.length - 1) {
            paginate(currentPage + 1);
          } else return;
        }}
      >
        Next
      </div>
    </div>
  );
};
export default Pagination;
