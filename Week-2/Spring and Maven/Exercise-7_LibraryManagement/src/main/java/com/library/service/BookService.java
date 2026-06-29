package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String libraryName;

    // Constructor Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Constructor Injection: BookRepository injected");
    }

    // Setter Injection
    public void setLibraryName(String libraryName) {
        this.libraryName = libraryName;
        System.out.println("Setter Injection: LibraryName set to " + libraryName);
    }

    public String getLibraryName() {
        return libraryName;
    }

    public String getBook(int id) {
        return bookRepository.findBookById(id);
    }

    public String getAllBooks() {
        return bookRepository.findAllBooks();
    }
}
