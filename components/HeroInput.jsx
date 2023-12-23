import { Button, Input } from "@nextui-org/react";
import { SendHorizontal } from "lucide-react";

export default function InputBox() {
  return (
    <div className="flex items-center justify-center w-full md:w-[60%] gap-3">
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
  );
}
