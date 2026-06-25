package com.library.repository;

public class BookRepository {

    public String findBookById(int id) {
        return "Spring in Action - Craig Walls";
    }

    public String findAllBooks() {
        return "Spring in Action, Effective Java, Clean Code";
    }
}
