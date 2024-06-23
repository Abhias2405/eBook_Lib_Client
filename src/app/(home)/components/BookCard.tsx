import { Book } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="flex gap-6 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
            <Image
                src={book.coverImage}
                alt={book.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '12rem', objectFit: 'cover' }}
                className="rounded-md"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="line-clamp-2 text-2xl font-semibold text-gray-800 leading-tight">
                        {book.title}
                    </h2>
                    <p className="font-medium text-gray-600 mt-2">{book.writer}</p>
                </div>
                <Link
                    href={`/book/${book._id}`}
                    className="py-1.5 px-3 rounded border border-primary-500 text-primary-600 text-sm font-medium mt-4 self-start
                    hover:bg-primary-50 hover:border-primary-400 transition-colors duration-200">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
