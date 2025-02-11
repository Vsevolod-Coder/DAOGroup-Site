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
      <h2>Наши сотрудники</h2>
      <div className="employees-wrapper">
        {employees &&
          employees.map((employer) => {
            return (
              <div className="employer" key={employer.id}>
                {/* Обновили путь для изображения */}
                <h2 className="employer-name"> {employer.position}</h2>
                <h2> {employer.name}</h2>
                <div className="emploer-image-block">
                  <img
                    className="employ-image"
                    src={
                      employer.image.startsWith("http")
                        ? employer.image
                        : `http://localhost:5000/uploads/${employer.image}`
                    }
                    alt={employer.name}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Employees;
