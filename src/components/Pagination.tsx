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
      {pageNumbers.map((e) => (
        <div
          className={` hover:bg-red-800 hover:text-white transition-colors
          cursor-pointer first-letter:ring-2 px-2 ring-red-600 text-sm
          ${currentPage == e && "bg-red-600 text-white"}`}
          key={e}
        >
          <a onClick={() => paginate(e)} className="page-link">
            {e}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Pagination;
