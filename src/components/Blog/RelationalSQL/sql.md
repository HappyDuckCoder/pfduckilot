# Relational SQL Cheat Sheet

## 1. Basic SQL Syntax

| Operation                 | SQL Syntax                                             | Relational Algebra                             |
| ------------------------- | ------------------------------------------------------ | ---------------------------------------------- |
| **Select (σ)**            | `SELECT * FROM table WHERE condition;`                 | \( \sigma\_{condition} (R) \)                  |
| **Projection (π)**        | `SELECT column1, column2 FROM table;`                  | \( \pi\_{column1, column2} (R) \)              |
| **Union (∪)**             | `SELECT * FROM table1 UNION SELECT * FROM table2;`     | \( R \cup S \)                                 |
| **Intersection (∩)**      | `SELECT * FROM table1 INTERSECT SELECT * FROM table2;` | \( R \cap S \)                                 |
| **Difference (-)**        | `SELECT * FROM table1 EXCEPT SELECT * FROM table2;`    | \( R - S \)                                    |
| **Cartesian Product (×)** | `SELECT * FROM table1 CROSS JOIN table2;`              | \( R \times S \)                               |
| **Division (÷)**          | Complex Query (See Example Below)                      | \( R \div S \)                                 |
| **Rename Relation (ρ)**   | `SELECT column1 AS new_name FROM table;`               | \( \rho\_{new_name}(R) \)                      |
| **Rename Attribute (ρ)**  | `SELECT column1 AS new_column FROM table;`             | \( \rho\_{old_name \rightarrow new_name}(R) \) |
| **Assignment (←)**        | `WITH temp_table AS (SELECT * FROM table1);`           | \( temp \leftarrow R \)                        |

## 2. Joins

| Join Type            | SQL Syntax                                                                | Relational Algebra          |
| -------------------- | ------------------------------------------------------------------------- | --------------------------- |
| **Inner Join**       | `SELECT * FROM table1 INNER JOIN table2 ON table1.col = table2.col;`      | \( R \bowtie S \)           |
| **Theta Join (⋈θ)**  | `SELECT * FROM table1 INNER JOIN table2 ON table1.col1 > table2.col2;`    | \( R \bowtie\_{\theta} S \) |
| **Left Outer Join**  | `SELECT * FROM table1 LEFT JOIN table2 ON table1.col = table2.col;`       | \( R \ltimes S \)           |
| **Right Outer Join** | `SELECT * FROM table1 RIGHT JOIN table2 ON table1.col = table2.col;`      | \( R \rtimes S \)           |
| **Full Outer Join**  | `SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.col = table2.col;` | \( R \bowtie\_{full} S \)   |

## 3. Grouping and Aggregates

| Aggregate Function | SQL Syntax                                            | Relational Algebra                    |
| ------------------ | ----------------------------------------------------- | ------------------------------------- |
| **Count**          | `SELECT COUNT(*) FROM table;`                         | \( \gamma\_{COUNT(\*)} (R) \)         |
| **Sum**            | `SELECT SUM(column) FROM table;`                      | \( \gamma\_{SUM(column)} (R) \)       |
| **Average**        | `SELECT AVG(column) FROM table;`                      | \( \gamma\_{AVG(column)} (R) \)       |
| **Min**            | `SELECT MIN(column) FROM table;`                      | \( \gamma\_{MIN(column)} (R) \)       |
| **Max**            | `SELECT MAX(column) FROM table;`                      | \( \gamma\_{MAX(column)} (R) \)       |
| **Grouping**       | `SELECT column, COUNT(*) FROM table GROUP BY column;` | \( \gamma\_{column, COUNT(\*)} (R) \) |

## 4. Data Manipulation (DML)

| Operation  | SQL Syntax                                            | Relational Algebra                                                             |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Insert** | `INSERT INTO table (col1, col2) VALUES (val1, val2);` | \( R \leftarrow R \cup \{tuple\} \)                                            |
| **Delete** | `DELETE FROM table WHERE condition;`                  | \( R \leftarrow R - \sigma\_{condition}(R) \)                                  |
| **Update** | `UPDATE table SET column = value WHERE condition;`    | \( R \leftarrow \pi*{all}(R - \sigma*{condition}(R)) \cup \pi\_{updated}(R) \) |

## 5. Example Queries

**1. Division Operation Example:**

```sql
SELECT A.student_id
FROM Enrollments A
WHERE NOT EXISTS (
  SELECT B.course_id FROM Courses B
  WHERE NOT EXISTS (
    SELECT C.student_id FROM Enrollments C
    WHERE C.student_id = A.student_id AND C.course_id = B.course_id
  )
);
```

**2. Using Aggregates with GROUP BY:**

```sql
SELECT department, COUNT(*) AS num_employees
FROM Employees
GROUP BY department;
```

**3. Using Joins in Queries:**

```sql
SELECT Employees.name, Departments.department_name
FROM Employees
INNER JOIN Departments ON Employees.dept_id = Departments.id;
```
