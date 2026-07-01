# Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)
- JSR 338 Specification for persisting, reading and managing data from Java objects
- Does not contain concrete implementation of the specification
- Hibernate is one of the implementation of JPA

## Hibernate
- ORM Tool that implements JPA
- Provides concrete implementation of JPA specification

## Spring Data JPA
- Does not have JPA implementation, but reduces boiler plate code
- Another level of abstraction over JPA implementation provider like Hibernate
- Manages transactions

---

## Code Comparison

### Hibernate Example
```java
/* Method to CREATE an employee in the database */
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;
    
    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee); 
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace(); 
    } finally {
        session.close(); 
    }
    return employeeID;
}
```

### Spring Data JPA Example

**EmployeeRepository.java**
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
```

**EmployeeService.java**
```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

## Key Differences
| Feature | Hibernate | Spring Data JPA |
|---------|-----------|-----------------|
| Boiler Plate Code | High | Low |
| Session Management | Manual | Automatic |
| Transaction Management | Manual | Automatic with @Transactional |
| Query Writing | HQL/SQL | Method naming conventions |
| Implementation | Direct ORM | Abstraction over ORM |
