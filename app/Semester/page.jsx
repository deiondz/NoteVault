import React from "react";
import data from "@data/semester.json";
import Link from "next/link";

function Card(props) {
  return (
    <Link
      href={props.e.href}
      className="flex hover:ring-2 cursor-pointer flex-col w-full md:w-[350px] lg:w-[400px] h-full brightness-90 hover:brightness-100 transition-all bg-[#242C2F] p-10 rounded-lg aspect-video items-start space-y-4"
    >
      <h1 className="text-3xl font-extrabold tracking-[-1%]">
        {props.e.title}
      </h1>
      <p className="font-semibold ">Information :</p>
      <ul className="space-y-2 list-disc list-inside">
        {props.e.courses.map((e, index) => (
          <li
            key={index}
            className="font-normal  text-[#BEB8B8]  text-xs md:text-sm "
          >
            {e.name}
          </li>
        ))}
      </ul>
    </Link>
  );
}

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
