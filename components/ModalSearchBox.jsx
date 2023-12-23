/* eslint-disable react-hooks/exhaustive-deps */
"use cleint";
import {
  Divider,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import subjectData from "@data/subject.json";
import Link from "next/link";

export default function ModalSearchBox(props) {
  const [value, setValue] = useState("");
  const [active, setActive] = useState([]);
  const handleSearch = () => {
    if (value == "") {
      setActive([]);
      return false;
    } else {
      let filtered = subjectData.filter((e) => {
        return e.name.toLowerCase().includes(value.toLowerCase());
      });
      setActive(filtered);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [value]);
  console.log(active);
  return (
    <Modal
      hideCloseButton
      size="3xl"
      className="max-h-[80vh]"
      isOpen={props.isOpen}
      onClose={props.onClose}
      scrollBehavior="inside"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Input
                aria-label="Search"
                value={value}
                onValueChange={setValue}
                endContent={
                  <Kbd className="hidden lg:inline-block" keys={["Esc"]}>
                    Esc
                  </Kbd>
                }
                placeholder="Search..."
                startContent={
                  <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
                }
                type="text"
              />
            </ModalHeader>
            <Divider />
            <ModalBody>
              <div className="flex flex-col items-start justify-start w-full gap-5 py-5">
                {active.length == 0 ? (
                  <p className="py-5 text-default-500 text-small">
                    {value == "" ? "Search for a subject" : "No results found"}
                  </p>
                ) : (
                  <div className="grid w-full grid-cols-1 gap-2">
                    {active.map((e, index) => (
                      <Link
                        key={index}
                        href={e.href}
                        className="flex flex-col items-start justify-between p-2 transition-all rounded-lg hover:brightness-125 hover:ring-1 bg-default-100"
                      >
                        <p className="font-bold text-default-500 text-small">
                          {e.name}
                        </p>
                        <p className="text-xs font-normal text-default-400">
                          {e.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
