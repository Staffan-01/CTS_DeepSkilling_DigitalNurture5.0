-- Scenario 1: Process monthly interest for all savings accounts (1% interest rate)
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'Savings';

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
END;
/

-- Scenario 2: Update employee bonus for a given department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percentage / 100)
    WHERE department_id = p_department_id;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percentage || '% applied to department ' || p_department_id);
END;
/

-- Scenario 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account_id IN NUMBER,
    p_dest_account_id IN NUMBER,
    p_amount IN NUMBER
) AS
    v_source_balance NUMBER;
BEGIN
    SELECT balance INTO v_source_balance
    FROM accounts
    WHERE account_id = p_source_account_id
    FOR UPDATE;

    IF v_source_balance >= p_amount THEN
        UPDATE accounts
        SET balance = balance - p_amount
        WHERE account_id = p_source_account_id;

        UPDATE accounts
        SET balance = balance + p_amount
        WHERE account_id = p_dest_account_id;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transferred $' || p_amount || ' from account ' ||
                             p_source_account_id || ' to account ' || p_dest_account_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account ' || p_source_account_id);
    END IF;
END;
/
