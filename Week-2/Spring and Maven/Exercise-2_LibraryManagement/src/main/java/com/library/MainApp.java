package com.library;

import com.library.service.BookService;
import com.library.repository.BookRepository;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = context.getBean(BookService.class);
        BookRepository bookRepository = context.getBean(BookRepository.class);

        System.out.println("=== Dependency Injection Verification ===");
        System.out.println("BookService injected with BookRepository: " + (bookService.getBookRepository() != null));
        System.out.println("Same instance: " + (bookService.getBookRepository() == bookRepository));
        System.out.println();
        System.out.println("Book by ID: " + bookService.getBook(1));
        System.out.println("All Books: " + bookService.getAllBooks());

        context.close();
    }
}
