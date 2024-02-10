"use client";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import { Input } from "@nextui-org/input";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";

import {
  DiscordIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  TwitterIcon,
} from "@/components/icons";
import ModalSearchBox from "./ModalSearchBox";

export function SearchBar(props) {
  return (
    <Button
      color="default"
      fullWidth
      startContent={
        <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
      }
      className="flex items-center justify-center px-10 text-sm font-normal text-default-600 bg-default-100"
      endContent={<Kbd keys={["command"]}>K</Kbd>}
      onClick={() => {
        props.onOpen();
      }}
    >
      Quick Search
    </Button>
  );
}

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="py-2 ">
      <NavbarContent className="gap-8 basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <h1 className="text-xl font-semibold tracking-tight text-[#ceff48]">
              NoteVault
            </h1>
          </NextLink>
        </NavbarBrand>
        <ul className="justify-start hidden gap-4 ml-2 lg:flex">
          {siteConfig.navItems.map((item) =>
            item.dropdown ? (
              <NavbarItem key={item.href}>
                <Dropdown>
                  <DropdownTrigger className="h-3 p-0">
                    <h1
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium text-sm cursor-pointer"
                      )}
                      color="foreground"
                      href={item.href}
                    >
                      {item.label}
                    </h1>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                  >
                    {item.dropdownItem.map((dropdownItem, index) => (
                      <DropdownItem
                        key={dropdownItem.index}
                        href={dropdownItem.href}
                      >
                        {dropdownItem.item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            ) : (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          )}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden gap-2 md:flex">
          <SearchBar onOpen={onOpen} />
          <Tooltip content="Double tap Double tap">
            <Button
              isExternal
              as={Link}
              fullWidth
              className="flex items-center justify-center text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Donate
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navItems.map((item) =>
            item.dropdown ? (
              <NavbarMenuItem key={item.href}>
                <Dropdown>
                  <DropdownTrigger className="h-3 p-0">
                    <h1
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium text-lg cursor-pointer"
                      )}
                      color="foreground"
                      href={item.href}
                    >
                      {item.label}
                    </h1>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                  >
                    {item.dropdownItem.map((dropdownItem, index) => (
                      <DropdownItem key={index} href={dropdownItem.href}>
                        {dropdownItem.item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavbarMenuItem>
            ) : (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-lg"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          )}
        </div>
      </NavbarMenu>
      <ModalSearchBox isOpen={isOpen} onClose={onClose} />
    </NextUINavbar>
  );
};
