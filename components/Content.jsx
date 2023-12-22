"use client";
import { useState } from "react";
import Sidebar from "./sidebar";
import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Drawer } from "antd";
import { MobileOnlyView, isDesktop } from "react-device-detect";

export default function Content(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [courseSelected, setCourseSelected] = useState(
    props.pageData.courses[0]
  );
  console.log(courseSelected);
  return (
    <div className="grid items-start justify-between w-full h-full grid-cols-1 md:grid-cols-2 gap-11 ">
      <div className="flex flex-col items-start justify-between w-full gap-5">
        {props.pageData.courses.map((e, index) => (
          <div
            key={index}
            className="w-full "
            onClick={() => {
              setCourseSelected(e);
              onOpen();
            }}
          >
            <Card
              className={` flex cursor-pointer flex-col w-full items-start rounded-lg  bg-[#242C2F] ${
                courseSelected === e && "ring-2 brightness-100"
              }`}
            >
              <CardBody className="px-6 py-8">
                <p>{e.name}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      {isDesktop ? (
        <Sidebar courseSelected={courseSelected} />
      ) : (
        <Drawer
          style={{
            padding: 0,
            backgroundColor: "#242C2F",
          }}
          bodyStyle={{
            padding: 0,
            height: "100%",
          }}
          placement="right"
          closable={false}
          onClose={onOpenChange}
          open={isOpen}
        >
          <Sidebar courseSelected={courseSelected} />
        </Drawer>
      )}
    </div>
  );
}
