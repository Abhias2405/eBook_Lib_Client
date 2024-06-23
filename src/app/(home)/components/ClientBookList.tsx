"use client";

import React, { useState } from 'react';
import BookCard from './BookCard';
import { Book } from '@/types';

const Pagination = ({ 
    totalItems, 
    itemsPerPage, 
    currentPage, 
    onPageChange 
}: { 
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisibleButtons = 5;

    const getPageNumbers = () => {
        let pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (endPage - startPage + 1 < maxVisibleButtons) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-4 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`h-10 rounded-md px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                    currentPage === 1
                        ? 'border border-gray-300 text-gray-400 cursor-not-allowed'
                        : 'border border-accent-500 text-accent-600 hover:bg-accent-100'
                }`}
            >
                &#171;
            </button>
            
            {getPageNumbers().map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`h-10 rounded-md px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                        currentPage === pageNumber
                            ? 'bg-accent-500 text-white shadow-md hover:bg-accent-600'
                            : 'border border-accent-500 text-accent-600 hover:bg-accent-100'
                    }`}
                >
                    {pageNumber}
                </button>
            ))}
            
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`h-10 rounded-md px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                    currentPage === totalPages
                        ? 'border border-gray-300 text-gray-400 cursor-not-allowed'
                        : 'border border-accent-500 text-accent-600 hover:bg-accent-100'
                }`}
            >
                &#187;
            </button>
        </div>
    );
};

interface ClientBookListProps {
    books: Book[];
}

const ClientBookList = ({ books }: ClientBookListProps) => {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate pagination
    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {books.length > 0 ? (
                    currentBooks.map((book: Book) => (
                        <BookCard key={book._id} book={book} />
                    ))
                ) : (
                    <p className="text-center text-gray-600">No books available</p>
                )}
            </div>
            
            {books.length > itemsPerPage && (
                <Pagination
                    totalItems={books.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </div>
    );
};

export default ClientBookList;