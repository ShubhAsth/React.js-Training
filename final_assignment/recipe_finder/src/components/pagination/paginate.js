import React from 'react';

const Paginate = ({currentPage, totalPage, paginate}) => {
    return (
        <div className="pagination-container">
            <ul className="pagination flex">
                {currentPage > 4 && totalPage > 10 && (
                    <li onClick={() => paginate(0)}
                        className="page-number cursor-pointer mx-1 py-1 px-3 bg-gray-200 hover:bg-gray-400 rounded">
                        {'<<'}
                    </li>
                )}
                {currentPage !== 0 && (
                    <li onClick={() => paginate(currentPage - 1)}
                        className="page-number cursor-pointer mx-1 py-1 px-3 bg-gray-200 hover:bg-gray-400 rounded">
                        Previous
                    </li>
                )}

                {totalPage <= 10 && (
                    Array.from({length: totalPage}, (_, i) => i).map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={`page-number cursor-pointer mx-1 py-1 px-3 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-400'} rounded`}
                        >
                            {number + 1}
                        </li>
                    ))
                )}
                {currentPage <= 4 && totalPage > 10 && (
                    Array.from({length: 10}, (_, i) => i).map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={`page-number cursor-pointer mx-1 py-1 px-3 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-400'} rounded`}
                        >
                            {number + 1}
                        </li>
                    ))
                )}
                {/*[max(0, offset - 4) to min(totalPage - 1, offset + 5)]*/}
                {currentPage > 4 && currentPage < totalPage - 5 && totalPage > 10 && (
                    Array.from({length: Math.min(totalPage - 1 - Math.max(0, currentPage - 4) + 1, Math.min(totalPage - 1, currentPage + 5) - Math.max(0, currentPage - 4) + 1)}, (_, i) => i + Math.max(0, currentPage - 4)).map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={`page-number cursor-pointer mx-1 py-1 px-3 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-400'} rounded`}
                        >
                            {number + 1}
                        </li>
                    ))
                )}
                {/*[totalPage - 10 to totalPage - 1]*/}
                {currentPage >= totalPage - 5 && totalPage > 10 && (
                    Array.from({length: 10}, (_, i) => totalPage - 10 + i).map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={`page-number cursor-pointer mx-1 py-1 px-3 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-400'} rounded`}
                        >
                            {number + 1}
                        </li>
                    ))
                )}

                {currentPage !== totalPage - 1 && (
                    <li onClick={() => paginate(currentPage + 1)}
                        className="page-number cursor-pointer mx-1 py-1 px-3 bg-gray-200 hover:bg-gray-400 rounded">
                        Next
                    </li>
                )}
                {totalPage > 10 && currentPage < totalPage - 6 && (
                    <li onClick={() => paginate(totalPage - 1)}
                        className="page-number cursor-pointer mx-1 py-1 px-3 bg-gray-200 hover:bg-gray-400 rounded">
                        {'>>'}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Paginate;