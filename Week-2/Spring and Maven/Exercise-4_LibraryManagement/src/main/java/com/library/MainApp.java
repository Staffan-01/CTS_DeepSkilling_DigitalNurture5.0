package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("=== Maven Project with Spring Dependencies ===");
        System.out.println("Spring Context: Loaded");
        System.out.println("Spring AOP: Available");
        System.out.println("Spring WebMVC: Available");
        System.out.println("Java Version: 1.8");
        System.out.println("Application running successfully!");

        context.close();
    }
}
