import React from "react";

const data = [
  {
    title: "Semester 1",
    courses: [
      {
        name: "Fundamentals of Computer Science",
        description: "Fundamental principles and concepts of computer science.",
      },
      {
        name: "C Programming",
        description:
          "Introduction to the C programming language, covering syntax, data structures, and algorithms.",
      },
      {
        name: "Business Statistics",
        description:
          "Statistical methods and tools for business decision-making, including data analysis and hypothesis testing.",
      },
      {
        name: "Mathematical Foundation",
        description:
          "Foundational mathematics covering key concepts essential for various academic disciplines.",
      },
    ],
  },
  {
    title: "Semester 2",
    courses: [
      {
        name: "Data Structures using C",
        description:
          "Study of fundamental data structures and their implementation using the C programming language.",
      },
      {
        name: "Object Oriented Concepts using JAVA",
        description:
          "Introduction to object-oriented programming concepts using the JAVA programming language.",
      },
      {
        name: "Discrete Mathematical Structures",
        description:
          "Exploration of discrete mathematical concepts, including logic, set theory, and graph theory.",
      },
      {
        name: "Applied Statistics",
        description:
          "Application of statistical methods to real-world problems, emphasizing practical data analysis and interpretation.",
      },
    ],
  },
  {
    title: "Semester 3",
    courses: [
      {
        name: "Database Management System",
        description:
          "Study of principles and techniques for designing, implementing, and managing database systems.",
      },
      {
        name: "C# and DOTNET Framework",
        description:
          "Comprehensive exploration of the C# programming language and the DOTNET framework for building Windows applications.",
      },
      {
        name: "Operating System Concepts",
        description:
          "Introduction to fundamental concepts and principles underlying modern operating systems.",
      },
      {
        name: "Computer Oriented Numeric Analysis",
        description:
          "Application of numerical methods to solve mathematical problems using computers, emphasizing algorithm development and analysis.",
      },
    ],
  },
  {
    title: "Semester 4",
    courses: [
      {
        name: "Python Programming",
        description:
          "Introduction to the Python programming language, covering syntax, data structures, and basic programming concepts.",
      },
      {
        name: "Computer Multimedia & Animation",
        description:
          "Exploration of multimedia principles and animation techniques, including graphics, audio, and video.",
      },
      {
        name: "Computer Communication & Networks",
        description:
          "Study of computer networks, communication protocols, and the principles of data transmission.",
      },
      {
        name: "OE (Operating Environment)",
        description:
          "Overview of the operating environment, including system configuration, file management, and user interfaces.",
      },
    ],
  },
  {
    title: "Semester 5",
    courses: [
      {
        name: "PHP & MySQL",
        description:
          "In-depth study of web development using PHP programming language and MySQL database management system.",
      },
      {
        name: "Artificial Intelligence & Machine Learning",
        description:
          "Exploration of artificial intelligence and machine learning concepts, algorithms, and applications in computer systems.",
      },
    ],
  },
];

function SemesterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] ">
      Hello
    </div>
  );
}

export default SemesterPage;
