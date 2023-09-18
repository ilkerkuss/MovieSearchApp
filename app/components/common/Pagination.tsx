export const Pagination = ({
  pageNumber,
  pageCount,
  totalRecord,
  pageSize,
  onNext,
  onPrev,
}: {
  pageNumber: number;
  pageCount: number;
  totalRecord: number;
  pageSize: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="flex flex-col items-center my-10">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(pageNumber - 1) * pageSize + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pageNumber * pageSize}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalRecord}
        </span>{" "}
        Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={pageNumber === 1}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          disabled={pageNumber === pageCount}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
