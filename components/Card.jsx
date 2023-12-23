import Link from "next/link";

export default function Card(props) {
  return (
    <Link
      href={props.e.href}
      className="flex hover:ring-2 cursor-pointer flex-col w-full md:w-[350px] lg:w-[400px] h-full brightness-110 hover:brightness-150 transition-all bg-[#242C2F] p-10 rounded-lg aspect-video items-start space-y-4"
    >
      <h1 className="text-3xl font-extrabold tracking-[-1%]">
        {props.e.title}
      </h1>
      <p className="font-semibold ">Information :</p>
      <ul className="space-y-2 list-disc list-inside">
        {props.e.courses.map((e, index) => (
          <li
            key={index}
            className="font-normal  text-[#BEB8B8]  text-xs md:text-sm "
          >
            {e.name}
          </li>
        ))}
      </ul>
    </Link>
  );
}
