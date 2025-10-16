import React, { useEffect, useState } from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'

const API_URL = 'http://localhost:3001/books'

export default function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [editingBook, setEditingBook] = useState(null)

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setBooks(data)
  }

  const addBook = async (book) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
    await fetchBooks()
  }

  const updateBook = async (book) => {
    await fetch(`${API_URL}/${book.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
    await fetchBooks()
    setEditingBook(null)
  }

  const deleteBook = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    await fetchBooks()
  }

  const filteredBooks = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Library Management System</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <BookForm onAdd={addBook} onUpdate={updateBook} editingBook={editingBook} />
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={deleteBook} />
    </div>
  )
}