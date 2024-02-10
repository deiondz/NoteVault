/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { GithubIcon, TwitterIcon } from "@components/icons";
import { siteConfig } from "@config/site";
import { Card, CardBody, Chip, Link } from "@nextui-org/react";
import Image from "next/image";

function Twitter(props) {
  return (
    <Link isExternal href={props.github} aria-label="Twitter">
      <TwitterIcon className="text-default-500" size={30} />
    </Link>
  );
}

function Github(props) {
  return (
    <Link isExternal href={props.github} aria-label="Discord">
      <GithubIcon className="text-default-500" size={30} />
    </Link>
  );
}

function Page() {
  return (
    <div className="flex w-full px-5  py-10 md:px-32 flex-col items-center justify-center min-h-[87vh]">
      <section className="mx-auto max-w-7xl">
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

        <section className="mt-8">
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">Our Team</h2>
          <div className="flex flex-col max-w-full gap-5 xl:flex-row ">
            {siteConfig.AboutTeam.map((e, index) => (
              <Card key={index} className="max-w-sm p-0 h-[60%]">
                <CardBody className="w-full p-0">
                  <div className="flex flex-col items-stretch justify-between w-full h-full ">
                    <div className="w-full h-full ">
                      <Image
                        unoptimized
                        src={e.image}
                        className="object-cover h-full rounded-none aspect-square "
                        width={500}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col justify-start w-full gap-5 p-5 py-10 md:py-5">
                      <div>
                        <div>
                          <h1 className="mb-2 text-3xl font-semibold">
                            {e.name}
                          </h1>
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

                        <p className="mt-2 font-normal text-default-600">
                          {e.description}
                        </p>
                      </div>
                      <div className="w-full ">
                        <div className="flex items-center justify-start w-full ">
                          {e.twitter && <Twitter github={e.twitter} />}
                          {e.github && <Github github={e.github} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Page;
