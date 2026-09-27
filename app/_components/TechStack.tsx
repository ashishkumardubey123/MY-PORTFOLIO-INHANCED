import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaShopify,
  FaLinux,
  FaUbuntu,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiJquery,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiPostgresql,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TechCategory {
  category: string;
  icon: IconType;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    icon: FaReact,
    technologies: [
      "JavaScript",

      "HTML",
      "CSS",
      "React.js",
      "Redux Toolkit",
      "Next.js",

    ],
  },
  {
    category: "Backend",
    icon: FaNodeJs,
    technologies: [
      "Node.js",
      "Express.js",

      "MongoDB",
      "soket io",
      "Redis",



    ],
  },

];

interface TechItemProps {
  name: string;
  Icon: IconType;
}

const TechItem: React.FC<TechItemProps> = ( { name, Icon } ) => (
  <div
    className="relative flex items-center gap-4 px-5 py-3 rounded-xl
      bg-[#1a1a1a] backdrop-blur-md before:absolute before:inset-0 before:rounded-xl
      before:opacity-50 before:border before:border-white/5  hover:before:border-white/10 hover:shadow-[0_0_2rem_-0.5rem_#ffffff30] group transition-all duration-300 ease-out"
  >
    <Icon
      className="z-10 text-xl text-gray-300 group-hover:text-white
      group-hover:rotate-[-10deg] transition-all duration-300"
    />
    <span
      className="z-10 text-gray-300 font-medium tracking-wide
      group-hover:text-white transition-colors duration-300 text-sm"
    >
      { name }
    </span>
  </div>
);

interface TechCategoryProps extends TechCategory { }

const TechCategory: React.FC<TechCategoryProps> = ( {
  category,
  icon: Icon,
  technologies,
} ) => (
  <div className="bg-[#27272A] p-5 rounded-lg">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="text-white text-2xl" />
      <h2 className="text-white text-xl font-bold">{ category }</h2>
    </div>
    <div className="grid grid-cols-2 gap-2">
      { technologies.map( ( tech ) => {
        const TechIcon: IconType =
          tech === "JavaScript"
            ? FaJs
            : tech === "TypeScript"
              ? SiTypescript
              : tech === "HTML"
                ? FaHtml5
                : tech === "CSS"
                  ? FaCss3Alt
                  : tech === "React.js"
                    ? FaReact
                    : tech === "Redux Toolkit"
                      ? SiRedux
                      : tech === "Next.js"
                        ? SiNextdotjs
                        : tech === "jQuery"
                          ? SiJquery
                          : tech === "Node.js"
                            ? FaNodeJs
                            : tech === "Express.js"
                              ? SiExpress
                              : tech === "Prisma ORM"
                                ? SiPrisma
                                : tech === "MongoDB"
                                  ? SiMongodb
                                  : tech === "Firebase"
                                    ? SiFirebase
                                    : tech === "Redis"
                                      ? SiRedis
                                      : tech === "GraphQL"
                                        ? SiGraphql
                                        : tech === "PostgreSQL"
                                          ? SiPostgresql
                                          : tech === "Git"
                                            ? FaGitAlt
                                            : tech === "GitHub"
                                              ? FaGithub
                                              : tech === "Docker"
                                                ? FaDocker
                                                : tech === "GitHub Actions"
                                                  ? SiGithubactions
                                                  : tech === "WordPress"
                                                    ? FaWordpress
                                                    : tech === "Shopify"
                                                      ? FaShopify
                                                      : tech === "AWS"
                                                        ? FaAws
                                                        : tech === "Nginx"
                                                          ? SiNginx
                                                          : tech === "Linux (Ubuntu)"
                                                            ? FaUbuntu
                                                            : FaReact;

        return <TechItem key={ tech } name={ tech } Icon={ TechIcon } />;
      } ) }
    </div>
  </div>
);

interface TechStackProps {
  button: any;
}

const TechStack: React.FC<TechStackProps> = ( { button } ) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{ button }</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] overflow-hidden overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Tech Stack
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Here are the technologies I have worked with
          </DialogDescription>
          <hr className="border-t-2 border-[#302f34] w-full mx-auto my-2" />
        </DialogHeader>
        <div className="w-full p-2 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            { techStack.map( ( category ) => (
              <TechCategory key={ category.category } { ...category } />
            ) ) }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechStack;
