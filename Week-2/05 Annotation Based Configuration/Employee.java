package com.spring;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Employee {
    @Autowired
    private Department department;
    public void display() {
        System.out.println("Employee Bean Created");
        department.showDepartment();
    }
}
