import { Button } from "@nextui-org/react";
import React from "react";

function Sidebar({ courseSelected }) {
  return (
    <div className="aspect-video h-full p-10 flex  flex-col items-start justify-between  rounded-lg w-full bg-[#242C2F]">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl font-semibold ">{courseSelected.name}</h1>
        <p>{courseSelected.description}</p>
      </div>
      <div className="w-full">
        <Button variant="shadow" className="w-full bg-blue-600">
          Find Resources
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
