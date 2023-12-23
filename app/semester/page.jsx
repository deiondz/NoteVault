import React from "react";
import data from "@data/semester.json";
import Card from "@components/Card";
export const metadata = {
  title: "Semester ",
};
function SemesterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[87vh]">
      <div className="grid items-center justify-center h-full grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((e, index) => (
          <Card key={index} e={e}></Card>
        ))}
      </div>
    </div>
  );
}

export default SemesterPage;
