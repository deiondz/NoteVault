import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Sidebar({ courseSelected }) {
  return (
    <Card className="aspect-video h-full  flex  flex-col items-start py-4  rounded-lg w-full bg-[#242C2F]">
      <CardHeader className="flex flex-col gap-3 px-10 pb-10 ">
        <h1 className="w-full text-2xl font-semibold">{courseSelected.name}</h1>
        <p>{courseSelected.description}</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-3 px-10">
        <p className="text-sm"></p>
        <p className="flex flex-col gap-2 text-sm">
          <span className="font-bold ">Disclaimer:</span> The notes on our
          website are user-submitted and may contain errors; users are advised
          to verify information independently.
        </p>
      </CardBody>
      <CardFooter className="flex justify-between w-full px-10">
        <Link href={courseSelected.href} target="_blank" className="w-full">
          <Button variant="shadow" className="w-full bg-blue-600">
            Notes & Question papers
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Sidebar;
