import { Book } from '@/types';
import React from 'react';
import BookCard from './BookCard';

const BookList = async () => {
    // data fetching
    const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('An error occurred while fetching the books');
    }
    const books = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 py-8 max-w-7xl mx-auto">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
