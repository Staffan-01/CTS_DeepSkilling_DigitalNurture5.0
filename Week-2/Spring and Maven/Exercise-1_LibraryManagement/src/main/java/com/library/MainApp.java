package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = context.getBean(BookService.class);

        System.out.println("Book by ID: " + bookService.getBook(1));
        System.out.println("All Books: " + bookService.getAllBooks());

        context.close();
    }
}
