import React from "react";
import data from "@data/semester.json";
import Content from "@components/Content";
export const metadata = {
  title: "Papers",
};
function Course({ params }) {
  const pageData = data.find((page) => page.slug === params.slug);
  return (
    <div className="flex w-full px-5  md:px-32 flex-col items-center justify-center min-h-[87vh]">
      <h1 className="self-start pb-10 text-4xl font-bold tracking-tight ">
        {pageData.title}
      </h1>
      <Content pageData={pageData} />
    </div>
  );
}

export default Course;
