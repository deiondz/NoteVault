import { Button, Input } from "@nextui-org/react";
import { SendHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] ">
      <div className="flex flex-col items-center justify-center w-full p-5 py-20 space-y-8">
        <h1 className="text-4xl font-semibold tracking-tight text-center md:text-6xl ">
          College note repo, but better.
        </h1>
        <div className="flex items-center justify-center w-[60%] gap-3">
          <Input
            placeholder="Find Notes for your subject..."
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "text-black/90 dark:text-white/90",
                "placeholder:text-[#61686E]",
                "placeholder:font-medium placeholder:text-sm",
              ],
              inputWrapper: [
                "bg-[#242C2F]", // Updated background color here
                "group-hover:bg-[#27272A]", // Updated group hover background color here
                "focus-within:bg-[#242C2F]", // Updated focus background color here
                "!cursor-text",
              ],
            }}
            endContent={
              <Button isIconOnly className="bg-[#242C2F]">
                <SendHorizontal
                  size={24}
                  className="text-[#61686E]"
                  strokeWidth={1.25}
                />
              </Button>
            }
          />
        </div>
        <div>
          <Button className="bg-[#0071E3]" variant="shadow" auto>
            Get Started
          </Button>
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
