import React, { useState } from "react";
import { BookOpen, Code2, Database, GitCompare, Table2 } from "lucide-react";

function RelationalSQL() {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", name: "Basic SQL", icon: <Database className="w-5 h-5" /> },
    { id: "joins", name: "Joins", icon: <GitCompare className="w-5 h-5" /> },
    {
      id: "aggregates",
      name: "Aggregates",
      icon: <Code2 className="w-5 h-5" />,
    },
    { id: "dml", name: "DML", icon: <Table2 className="w-5 h-5" /> },
    {
      id: "examples",
      name: "Examples",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const basicSqlContent = [
    {
      operation: "Select (σ)",
      sql: "SELECT * FROM table WHERE condition;",
      algebra: "σ_{condition} (R)",
    },
    {
      operation: "Projection (π)",
      sql: "SELECT column1, column2 FROM table;",
      algebra: "π_{column1, column2} (R)",
    },
    {
      operation: "Union (∪)",
      sql: "SELECT * FROM table1 UNION SELECT * FROM table2;",
      algebra: "R ∪ S",
    },
    {
      operation: "Intersection (∩)",
      sql: "SELECT * FROM table1 INTERSECT SELECT * FROM table2;",
      algebra: "R ∩ S",
    },
    {
      operation: "Difference (-)",
      sql: "SELECT * FROM table1 EXCEPT SELECT * FROM table2;",
      algebra: "R - S",
    },
    {
      operation: "Cartesian Product (×)",
      sql: "SELECT * FROM table1 CROSS JOIN table2;",
      algebra: "R × S",
    },
  ];

  const joinsContent = [
    {
      type: "Inner Join",
      sql: "SELECT * FROM table1 INNER JOIN table2 ON table1.col = table2.col;",
      algebra: "R ⋈ S",
    },
    {
      type: "Left Outer Join",
      sql: "SELECT * FROM table1 LEFT JOIN table2 ON table1.col = table2.col;",
      algebra: "R ⟕ S",
    },
    {
      type: "Right Outer Join",
      sql: "SELECT * FROM table1 RIGHT JOIN table2 ON table1.col = table2.col;",
      algebra: "R ⟖ S",
    },
    {
      type: "Full Outer Join",
      sql: "SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.col = table2.col;",
      algebra: "R ⟗ S",
    },
  ];

  const aggregatesContent = [
    {
      function: "Count",
      sql: "SELECT COUNT(*) FROM table;",
      algebra: "γ_{COUNT(*)} (R)",
    },
    {
      function: "Sum",
      sql: "SELECT SUM(column) FROM table;",
      algebra: "γ_{SUM(column)} (R)",
    },
    {
      function: "Average",
      sql: "SELECT AVG(column) FROM table;",
      algebra: "γ_{AVG(column)} (R)",
    },
    {
      function: "Min",
      sql: "SELECT MIN(column) FROM table;",
      algebra: "γ_{MIN(column)} (R)",
    },
    {
      function: "Max",
      sql: "SELECT MAX(column) FROM table;",
      algebra: "γ_{MAX(column)} (R)",
    },
    {
      function: "Grouping",
      sql: "SELECT column, COUNT(*) FROM table GROUP BY column;",
      algebra: "γ_{column, COUNT(*)} (R)",
    },
  ];

  const dmlContent = [
    {
      operation: "Insert",
      sql: "INSERT INTO table (col1, col2) VALUES (val1, val2);",
      algebra: "R ← R ∪ {tuple}",
    },
    {
      operation: "Delete",
      sql: "DELETE FROM table WHERE condition;",
      algebra: "R ← R - σ_{condition}(R)",
    },
    {
      operation: "Update",
      sql: "UPDATE table SET column = value WHERE condition;",
      algebra: "R ← π_{all}(R - σ_{condition}(R)) ∪ π_{updated}(R)",
    },
  ];

  const exampleQueries = [
    {
      title: "Division Operation",
      sql: `SELECT A.student_id
FROM Enrollments A
WHERE NOT EXISTS (
  SELECT B.course_id FROM Courses B
  WHERE NOT EXISTS (
    SELECT C.student_id FROM Enrollments C
    WHERE C.student_id = A.student_id 
    AND C.course_id = B.course_id
  )
);`,
    },
    {
      title: "Aggregates with GROUP BY",
      sql: `SELECT department, COUNT(*) AS num_employees
FROM Employees
GROUP BY department;`,
    },
    {
      title: "Using Joins",
      sql: `SELECT Employees.name, Departments.department_name
FROM Employees
INNER JOIN Departments ON Employees.dept_id = Departments.id;`,
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-20">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
            Relational SQL Cheat Sheet
          </h1>
          <p className="text-sm sm:text-base text-center mb-6 sm:mb-8 text-gray-600">
            A comprehensive guide to SQL operations and their relational algebra
            equivalents
          </p>

          <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
            <nav className="flex flex-wrap sm:flex-nowrap bg-white border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-3 sm:px-4 md:px-6 focus:outline-none transition-colors w-1/2 sm:w-auto justify-center ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.name}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 sm:p-6 bg-white">
              {activeTab === "basic" && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          Operation
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          SQL Syntax
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 hidden md:table-cell text-gray-800">
                          Relational Algebra
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {basicSqlContent.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-800">
                            {item.operation}
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm sm:text-base break-all sm:break-normal text-gray-800">
                              {item.sql}
                            </code>
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4 hidden md:table-cell">
                            <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                              {item.algebra}
                            </code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "joins" && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          Join Type
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          SQL Syntax
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 hidden md:table-cell text-gray-800">
                          Relational Algebra
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {joinsContent.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-800">
                            {item.type}
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm sm:text-base break-all sm:break-normal text-gray-800">
                              {item.sql}
                            </code>
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4 hidden md:table-cell">
                            <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                              {item.algebra}
                            </code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "aggregates" && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          Function
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          SQL Syntax
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 hidden md:table-cell text-gray-800">
                          Relational Algebra
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aggregatesContent.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-800">
                            {item.function}
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm sm:text-base break-all sm:break-normal text-gray-800">
                              {item.sql}
                            </code>
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4 hidden md:table-cell">
                            <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                              {item.algebra}
                            </code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "dml" && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          Operation
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 text-gray-800">
                          SQL Syntax
                        </th>
                        <th className="px-4 py-2 sm:px-6 sm:py-3 hidden md:table-cell text-gray-800">
                          Relational Algebra
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dmlContent.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-800">
                            {item.operation}
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm sm:text-base break-all sm:break-normal text-gray-800">
                              {item.sql}
                            </code>
                          </td>
                          <td className="px-4 py-2 sm:px-6 sm:py-4 hidden md:table-cell">
                            <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                              {item.algebra}
                            </code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "examples" && (
                <div className="space-y-4 sm:space-y-6">
                  {exampleQueries.map((example, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 sm:p-6"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                        {example.title}
                      </h3>
                      <pre className="bg-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto text-sm sm:text-base text-gray-800">
                        <code>{example.sql}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelationalSQL;
