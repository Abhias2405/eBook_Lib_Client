import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types';

const BookList = async () => {
    try {
        // Fetch data
        const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('An error occurred while fetching the books');
        }
        
        const result = await response.json();
        
        // Properly access the nested books array and ensure it's an array
        const books = Array.isArray(result?.data?.books) 
            ? result.data.books 
            : Array.isArray(result?.books) 
                ? result.books 
                : [];

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 py-8 max-w-7xl mx-auto">
                {books.length > 0 ? (
                    books.map((book: Book) => (
                        <BookCard key={book._id} book={book} />
                    ))
                ) : (
                    <p className="text-center text-gray-600">No books available</p>
                )}
            </div>
        );
    } catch (error) {
        console.error('Error fetching books:', error);
        return (
            <div className="text-center text-red-600">
                An error occurred while fetching the books
            </div>
        );
    }
};

export default BookList;