import toast, { Toaster } from 'react-hot-toast';
export const getBooks = (items) => {
    let detailBooks = [];
    const storeBooks = localStorage.getItem(items)
    if (storeBooks) {
        detailBooks = JSON.parse(storeBooks)
    }
    return detailBooks

}


const setBooks = (setName, book) => {
    let storedBooks = getBooks(setName)
    // console.log(storedBooks);
    const isExist = storedBooks.find(bk => bk.bookId === book.bookId)
    if (isExist) {
        return toast.error('You already Readd it ')
    }
    storedBooks.push(book)
    localStorage.setItem(setName, JSON.stringify(storedBooks))
    toast.success('Successfully add to read list')
}

// save function
export const wishlistBooks = (book) => {
    setBooks('wishlistBooks', book);

}




export const readBooks = (book) => {
    setBooks('readBooks', book);
}