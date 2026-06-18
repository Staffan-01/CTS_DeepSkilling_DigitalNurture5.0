-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old
DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, age, loan_interest_rate
        FROM customers
        WHERE age > 60;
BEGIN
    FOR rec IN customer_cursor LOOP
        UPDATE loans
        SET loan_interest_rate = loan_interest_rate - 1
        WHERE customer_id = rec.customer_id;

        DBMS_OUTPUT.PUT_LINE('Discount applied to customer ID: ' || rec.customer_id);
    END LOOP;
    COMMIT;
END;
/

-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000
DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, balance
        FROM customers;
BEGIN
    FOR rec IN customer_cursor LOOP
        IF rec.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'TRUE'
            WHERE customer_id = rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || rec.customer_id || ' promoted to VIP.');
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 3: Send reminders for loans due within the next 30 days
DECLARE
    CURSOR loan_cursor IS
        SELECT l.customer_id, c.customer_name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR rec IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || rec.customer_name ||
                             ' (ID: ' || rec.customer_id || ') is due on ' || rec.due_date);
    END LOOP;
END;
/
