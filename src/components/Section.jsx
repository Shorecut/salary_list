import React from "react";
import { employees } from "../Employees";
import SectionList from "./SectionList";

const Section = () => {
  return (
    <div>
      {employees.map((item) => (
        <SectionList keys={item.name} item={item} />
      ))}
    </div>
  );
};

export default Section;
