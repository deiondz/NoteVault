/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const AboutTeam = [
  {
    name: "Jonathan Correa",
    role: "Backend Developer",
    description:
      "Contributed in the REST API development.Fast and efficent REST api developed using Flask Python.",
    image: "/john.jpg",
    github: "",
  },
  {
    name: "Deion D'Souza",
    role: "Front-End developer",
    description:
      "Contributed in the Front-End development. Developed the UI using Next.js and Tailwind CSS.",
    image: "/deion.jpg",
    github: "",
  },
  {
    name: "Manvith M",
    role: "UI/UX Designer",
    description:
      "Contributed in the UI/UX design. Designed the UI using Figma and collabratively worked with the Front-End team.",
    image: "/manvith.jpg",
    github: "",
  },
];

function Page() {
  return (
    <div className="flex w-full px-5  py-10 md:px-32 flex-col items-center justify-center min-h-[87vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">About Us</h1>
        <p className="mb-6 text-gray-300">
          Welcome to NoteVault, your centralized haven for academic notes! We, a
          group of first-year students from St. Aloysius Degree College.
        </p>
        <p className="mb-6 text-gray-300">
          NoteVault was created to tackle the problem of scattered notes across
          WhatsApp. Our goal is to provide an unified platform where you can
          seamlessly access and organize all your essential study materials
          without the hassle of multiple sources.
        </p>
        <p className="mb-6 text-gray-300">
          Note Vault is powered by Next.js. It&apos;s the product of thoughtful
          design and user-centricity, aimed at simplifying your academic
          journey.
        </p>

        <div className="mt-8">
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">Our Team</h2>
          <div className="grid max-w-full grid-cols-12 grid-rows-2 gap-5 ">
            {AboutTeam.map((e, index) => (
              <Card
                key={index}
                className="h-full col-span-12 p-0 sm:col-span-12"
              >
                <CardBody className="w-full p-0">
                  <div className="flex flex-col items-stretch justify-between w-full h-full md:flex-row ">
                    <div className="w-full h-full md:w-1/2">
                      <Image
                        unoptimized
                        src={e.image}
                        className="object-cover w-full h-full rounded-none "
                        width={500}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col w-full gap-5 p-5 py-10 md:py-5">
                      <div className="space-y-3">
                        <h1 className="text-3xl font-semibold">{e.name}</h1>
                        <Chip
                          classNames={{
                            base: "bg-gradient-to-br from-cyan-600 to-cyan-500 border-small border-white/50 shadow-cyan-500/30",
                            content: "drop-shadow shadow-black text-white",
                          }}
                          size="sm"
                        >
                          {e.role}
                        </Chip>
                      </div>

                      <p className="font-normal text-default-600">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
