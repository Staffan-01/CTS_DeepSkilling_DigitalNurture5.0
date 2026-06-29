package com.library;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LibraryManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDatabase(BookRepository repository) {
        return args -> {
            repository.save(new Book("Spring in Action", "Craig Walls", "978-1617294947"));
            repository.save(new Book("Effective Java", "Joshua Bloch", "978-0134685991"));
            repository.save(new Book("Clean Code", "Robert C. Martin", "978-0132350884"));
            System.out.println("Database initialized with 3 books");
        };
    }
}
