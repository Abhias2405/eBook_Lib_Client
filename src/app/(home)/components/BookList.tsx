import ClientBookList from './ClientBookList';

const BookList = async () => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('An error occurred while fetching the books');
        }
        
        const result = await response.json();
        
        const books = Array.isArray(result?.data?.books) 
            ? result.data.books 
            : Array.isArray(result?.books) 
                ? result.books 
                : [];

        return <ClientBookList books={books} />;
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