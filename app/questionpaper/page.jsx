import Card from "@components/Card";
import axios from "axios";
import React from "react";
async function getData() {
  try {
    const response = await axios.get(
      "https://expaper-api.onrender.com/exampapers?code=178"
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
    <div className="flex flex-col items-center justify-center min-h-[87vh]">
      <div className="grid items-center justify-center h-full grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ul>
          {Object.entries(data).map(([semester, papers]) => (
            <li key={semester}>
              <strong>{semester}</strong>
              <ul>
                {Object.entries(papers).map(([exam, link]) => (
                  <li key={exam}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {exam}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;
