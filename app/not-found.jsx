import { Link } from "@nextui-org/react";

export default function Custom404() {
  return (
    <div className="flex flex-col px-10 gap-5 items-center justify-center h-[80vh]">
      <h1 className="text-2xl font-bold tracking-tighter md:text-7xl">
        404 - Page Not Found
      </h1>
      <p className="text-center ">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link showAnchorIcon className="text-teal-400" href="/">
        <a>Go back to the home page</a>
      </Link>
    </div>
  );
}
