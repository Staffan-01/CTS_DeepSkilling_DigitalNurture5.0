package com.spring;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        Student s1 = context.getBean("studentSingleton", Student.class);
        Student s2 = context.getBean("studentSingleton", Student.class);
        System.out.println("Singleton Scope");
        System.out.println(s1.hashCode());
        System.out.println(s2.hashCode());
        Student p1 = context.getBean("studentPrototype", Student.class);
        Student p2 = context.getBean("studentPrototype", Student.class);
        System.out.println("\nPrototype Scope");
        System.out.println(p1.hashCode());
        System.out.println(p2.hashCode());

    }
}
