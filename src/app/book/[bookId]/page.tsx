import React from 'react';
import Image from 'next/image';
import { Book } from '@/types';

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
    console.log('params', params);
    let book: Book | null = null;

    try {
        const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookId}`);
        if (!response.ok) {
            throw new Error('Error fetching book');
        }
        book = await response.json();
    } catch (err: any) {
        throw new Error('Error fetching book');
    }

    if (!book) {
        throw new Error('Book not found');
    }

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-8 px-5 py-10">
            {/* Left Section */}
            <div className="md:col-span-2 text-primary-950">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-[1.2]">{book.title}</h1>
                <h3 className="text-lg font-semibold text-gray-700 mb-6">by {book.author.name}</h3>
                <p className="text-md leading-7 text-gray-700">{book.description}</p>
            </div>

            {/* Right Section (Image) */}
            <div className="flex justify-center md:justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-lg border shadow-md"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default SingleBookPage;
