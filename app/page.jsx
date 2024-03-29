import { Button } from "@nextui-org/react";
import Link from "next/link";
export const metadata = {
  title: "Home | NoteVault",
};
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center justify-center w-full p-5 py-20 space-y-8">
        <h1 className="text-4xl font-extrabold text-center md:text-7xl ">
          College Notes Repo, But Better!
        </h1>
        <p className="w-full font-medium text-center md:w-1/2 ">
          <span className="text-[#ceff48] font-semibold">NoteVault</span> is
          here to elevate your learning journey with a comprehensive and
          user-friendly repository designed exclusively for St. Aloysius
          students by the students.
        </p>
        {/* <InputBox /> */}
        <div>
          <Link href="/semester">
            <Button className="bg-[#0071E3]" variant="shadow" auto>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <p className="font-semibold tracking-tight">
          Powered by{"  "}
          <a href="https://codex13.vercel.app">
            Code<span className="text-[#9747FF]">X</span>
          </a>
        </p>
      </div>
    </div>
  );
}
