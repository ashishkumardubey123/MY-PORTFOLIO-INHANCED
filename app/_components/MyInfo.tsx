import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronUp,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { TabContentProps } from "@/types/Types";

interface MyInfoProps {
  button: React.ReactNode;
}

interface TabButtonProps {
  id: string;
  icon: LucideIcon;
  label: string;
}

const MyInfo: React.FC<MyInfoProps> = ( { button } ) => {
  const [ activeTab, setActiveTab ] = useState<string>( "experience" );

  const TabButton: React.FC<TabButtonProps> = ( { id, icon: Icon, label } ) => (
    <button
      onClick={ () => setActiveTab( id ) }
      className={ `flex items-center p-1 sm:p-2 rounded-md transition-all text-xs sm:text-sm ${ activeTab === id
        ? "bg-white text-black"
        : "text-white hover:bg-white/20"
        }` }
    >
      <Icon size={ 16 } className="mr-1 sm:mr-2" />
      { label }
    </button>
  );

  const TabContent: React.FC<TabContentProps> = ( { id, content } ) => (
    <div className={ `mt-2 sm:mt-4 ${ activeTab === id ? "block" : "hidden" }` }>
      { id === "experience" ? (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Leadership Experience:</h4>
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>Led development team as Tech Lead at MnA Studio (Mar 2024 - May 2024)</li>
              <li>Improved site performance and SEO rankings by 40%, achieving 90+ Lighthouse scores</li>
              <li>Managed project timelines and 3-member team collaboration in Agile environment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Current Role Highlights (Satya The Hive):</h4>
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>Developed and delivered 35+ client websites across 10+ industries</li>
              <li>Built scalable full-stack applications serving 5,000+ monthly active users</li>
              <li>Architected CI/CD pipelines with GitHub Actions (83% faster deployments)</li>
              <li>Integrated Razorpay payment gateway and Auth.js for secure transactions</li>
              <li>Deployed applications on AWS (EC2, S3) and VPS with 99.9% uptime</li>
              <li>Optimized 15+ database queries with Redis caching (30% faster APIs)</li>
            </ul>
          </div>
        </div>
      ) : id === "skills" ? (
        <p className="text-xs sm:text-sm tracking-wide">
          <span className="font-semibold">Languages:</span> JavaScript, TypeScript, SQL, HTML5, CSS3<br />
          <span className="font-semibold">Frontend:</span> React.js, Next.js (App Router + Pages Router), Redux Toolkit, Tailwind CSS, Framer Motion, Shadcn UI<br />
          <span className="font-semibold">Backend:</span> Node.js, Express.js, Prisma ORM, GraphQL, Apollo Client & Server, REST APIs<br />
          <span className="font-semibold">Databases:</span> PostgreSQL, MongoDB, Redis, Firebase<br />
          <span className="font-semibold">DevOps & Cloud:</span> Docker, GitHub Actions (CI/CD), Nginx, Linux (Ubuntu), AWS (EC2, S3), VPS Management<br />
          <span className="font-semibold">Tools:</span> Git, GitHub, VS Code, Postman, WordPress, Shopify<br />
          <span className="font-semibold">Auth & Payments:</span> Auth.js (NextAuth), Razorpay, bcryptjs
        </p>
      ) : id === "education" ? (
        <p className="text-xs sm:text-sm tracking-wide">
          <span className="font-semibold">B.Com (2021 - 2024)</span> — Delhi University (School of Open Learning)<br />
          <span className="font-semibold">MERN Stack Development</span> — MnA Studio (Comprehensive Full Stack Training)<br />
          <span className="font-semibold">Web Designing Diploma</span> — LBS Training Institute
        </p>
      ) : (
        <p className="text-xs sm:text-sm tracking-wide">{ content }</p>
      ) }
    </div>
  );

  return (
    <Popover>
      <PopoverTrigger>{ button }</PopoverTrigger>
      <PopoverContent className="w-[95vw] bg-[#19181cef] sm:w-[550px]  p-0 border shadow-xl">
        <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="p-4 sm:p-6 text-white">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/avatar.png"
                width={ 60 }
                height={ 60 }
                alt="avatar"
                className="rounded-full border-2 border-white mr-3 sm:mr-6"
              />
              <div>
                <h2 className="text-lg sm:text-2xl font-bold">Ashish Kumar</h2>
                <p className="text-sm sm:text-lg text-gray-300">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <p className="flex items-center text-xs sm:text-sm">
                <Mail size={ 12 } className="mr-1 sm:mr-2" />
                ashish9039062705@gmail.com
              </p>
              <p className="flex items-center text-xs sm:text-sm">
                <Phone size={ 12 } className="mr-1 sm:mr-2" />
                +919302300834
              </p>
              <p className="flex items-center text-xs sm:text-sm">
                <MapPin size={ 12 } className="mr-1 sm:mr-2" />
                JABALPUR,MADHYA-PRADESH,482004
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                About
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Results-driven Full Stack Developer with 1.5+ years of professional experience specializing in Next.js, Node.js, and MERN. Successfully delivered MU5+ client projects across diverse industries including FinTech, Healthcare, EdTech, E-Commerce, Real Estate, Legal, Travel, and Entertainment. Built and deployed production applications handling real payments, user authentication, and serving 5,000+ monthly users. Proficient in DevOps with hands-on experience in CI/CD pipelines, Docker, AWS, and VPS server management.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Current Position
              </h3>
              <p className="text-xs sm:text-sm">
                Full Stack Developer at Satya The Hive, Dwarka Expressway, Sector 102, Gurugram, Haryana 122505 | September 2024 - Present
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <TabButton id="experience" icon={ Briefcase } label="Experience" />
              <TabButton id="skills" icon={ Code } label="Skills" />
              <TabButton
                id="education"
                icon={ GraduationCap }
                label="Education"
              />
            </div>

            {/* Tab content */ }
            <div className="bg-black/20 rounded-lg p-4">
              <TabContent id="experience" content="" />
              <TabContent id="skills" content="" />
              <TabContent id="education" content="" />
            </div>
          </div>
        </div>
        <div className="p-2 sm:p-4 bg-black/50 flex justify-between items-center">
          <span className="text-white text-xs sm:text-sm">
            View Full Profile
          </span>
          <ChevronUp className="text-white" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MyInfo;
