import { Book } from '@/types';
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }: { books: Book[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 py-8 max-w-7xl mx-auto">
            {books.map((book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
