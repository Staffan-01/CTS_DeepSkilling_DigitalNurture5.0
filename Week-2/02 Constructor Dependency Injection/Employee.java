package com.spring;

public class Employee {
    private Address address;
    public Employee(Address address) {
        this.address = address;
    }
    public void show() {
        System.out.println("Employee Details");
        address.display();
    }
}
