import React, { useEffect, useState } from "react";
import "./Employees.css";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState(null);
  const getEmployess = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/employees");
      setEmployees(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployess();
  }, []);

  return (
    <section className="employees">
      <div className="employees-wrapper">
        {employees &&
          employees.map((employer) => {
            return (
              <div className="employer">
                <h2>{employer.name}</h2>
                <h2>{employer.contacts}</h2>
                <img className="employ-image" src={employer.image} alt="" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Employees;