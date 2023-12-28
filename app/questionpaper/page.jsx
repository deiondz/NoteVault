import { Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Question Papers",
};

async function getData() {
  try {
    const response = await axios.get(
      "https://alopapers.onrender.com/exampapers"
    );
    // handle success
    return response.data; // Assuming the response is a JSON object and you want to return its data
  } catch (error) {
    // handle error
    console.error("Failed to fetch data", error.message);
    throw new Error("Failed to fetch data");
  }
}

async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col px-5 py-10 gap-10  md:px-32 items-center justify-center min-h-[87vh]">
      {Object.entries(data).map(([semester, papers]) => (
        <div key={semester}>
          <h1 className="self-start pb-10 text-4xl font-bold tracking-tight ">
            {semester.toUpperCase()} Question papers
          </h1>

          <div>
            <div className="grid items-start justify-center h-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {Object.entries(papers).map(([exam, link]) => (
                <Link
                  href={link}
                  key={exam}
                  target="_blank"
                  className="h-full p-5 transition-all rounded-md hover:brightness-150 hover:ring-2 bg-slate-800"
                  rel="noopener noreferrer"
                >
                  <p>{exam}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
