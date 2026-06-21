package com.spring;
public class Student {
    private int id;
    private String name;
    private Course course;
    private Address address;
    public Student(int id, String name, Course course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    public void setAddress(Address address) {
        this.address = address;
    }
    public void display() {
        System.out.println("Student Id : " + id);
        System.out.println("Student Name : " + name);
        course.display();
        address.display();

    }
}
