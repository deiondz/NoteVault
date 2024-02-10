/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { GithubIcon, TwitterIcon } from "@components/icons";
import { Button, Link } from "@nextui-org/react";

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
      <section className="max-w-3xl mx-auto">
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">Contribution</h1>
        <p className="mb-6 font-bold text-gray-200">
          We are open to contributions from anyone who is interested in helping
          us out. You can contribute in the following ways:
        </p>
        <p className="mb-6 text-gray-200">
          1. Helping us grow our repository of notes by submitting your own
          notes.
        </p>
        <p className="mb-6 text-gray-200">
          2. Sharing your valuable feedback and suggestions to help us improve.
        </p>
        <p className="mb-6 text-gray-200">
          3. Help us in building a better website by contributing to our code.
        </p>
        <div>
          <p className="mb-6 font-bold text-gray-200">
            If you are interested in contributing, please reach out to us by
            filling the form below :
          </p>
          <Link
            isExternal
            anchorIcon={true}
            className="text-blue-500 "
            href="https://forms.gle/Y2BxFxL4KVacbNmB8"
          >
            <Button className="bg-blue-600 "> Google Form </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
