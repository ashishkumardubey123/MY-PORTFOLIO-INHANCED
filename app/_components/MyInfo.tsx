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
        ? "bg-white text-black font-medium"
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
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="font-semibold text-xs sm:text-sm text-white">Full Stack Web Developer — DOAGuru InfoSystems</h4>
              <span className="text-[10px] sm:text-xs text-cyan-400 font-mono">Jan 2026 – Present</span>
            </div>
            <p className="text-[11px] text-gray-400 mb-2">Jabalpur, MP</p>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300">
              <li>Delivered 4 production web platforms end-to-end across real estate, healthcare, and business automation; recognized with a company Appreciation Certificate for outstanding contribution.</li>
              <li>Built <strong>Revenue Engine</strong>, a full client-to-cash automation system covering proposal generation, WhatsApp/Gmail approvals, GST & TDS-calculated invoicing, and revenue reporting.</li>
              <li>Developed <strong>Nidhivan Developers</strong> (3-property real estate portfolio) and <strong>MedBrainix</strong> (AI-powered clinic management platform with smart revenue dashboard & AI voice scheduling).</li>
              <li>Integrated Generative AI into live production applications, improved performance by 40% through optimization, and implemented SEO best practices.</li>
              <li>Extended and reused shared backend infrastructure across related projects, including Ayushi Construction and Siara Property.</li>
            </ul>
          </div>

          <div className="border-t border-gray-700/60 pt-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="font-semibold text-xs sm:text-sm text-white">Web Developer — MBG Card</h4>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">Oct 2025 – Dec 2025</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
              <li>Developed responsive WordPress websites using custom themes and modern UI/UX practices.</li>
              <li>Reduced page load time by approximately 40% through performance optimization and implemented SEO best practices.</li>
            </ul>
          </div>

          <div className="border-t border-gray-700/60 pt-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="font-semibold text-xs sm:text-sm text-white">Web Developer Intern — MNA Studios</h4>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">Mar 2024 – May 2024</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
              <li>Designed and developed user-friendly, visually appealing websites for clients.</li>
              <li>Performed website maintenance, bug fixes, and content updates to improve engagement.</li>
            </ul>
          </div>

          <div className="border-t border-gray-700/60 pt-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="font-semibold text-xs sm:text-sm text-white">SEO Expert & Canva Designer — SalvusApp Solution</h4>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">Feb 2023 – Nov 2023</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
              <li>Conducted technical SEO audits and link-building campaigns that improved website indexing and ranking.</li>
              <li>Created marketing creatives in Canva and monitored analytics to report campaign performance.</li>
            </ul>
          </div>
        </div>
      ) : id === "skills" ? (
        <div className="space-y-2 text-xs sm:text-sm tracking-wide text-gray-300">
          <p><span className="font-semibold text-white">Languages:</span> JavaScript (ES6+), TypeScript, C, C++</p>
          <p><span className="font-semibold text-white">Frontend:</span> React.js, Next.js, Redux, React Router, React Hook Form, HTML5, CSS3</p>
          <p><span className="font-semibold text-white">Styling & UI:</span> Tailwind CSS, shadcn/ui, Bootstrap, GSAP (ScrollTrigger), Swiper.js</p>
          <p><span className="font-semibold text-white">Backend:</span> Node.js, Express.js, RESTful APIs, JWT Authentication, Nodemailer, Puppeteer</p>
          <p><span className="font-semibold text-white">Databases:</span> MySQL, MongoDB</p>
          <p><span className="font-semibold text-white">Integrations & AI:</span> Generative AI Integration, WhatsApp Business API, Google Ads Enhanced Conversions, Meta Pixel/CAPI</p>
          <p><span className="font-semibold text-white">Tools & Practices:</span> Git, GitHub, Postman, SEO Optimization, Agile/Iterative Development</p>
        </div>
      ) : id === "education" ? (
        <div className="space-y-3 text-xs sm:text-sm tracking-wide text-gray-300">
          <div>
            <h4 className="font-semibold text-white">M.Sc. Computer Science</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Makhanlal Chaturvedi National University | 2022 – 2024</p>
          </div>
          <div className="border-t border-gray-700/60 pt-2.5">
            <h4 className="font-semibold text-white">B.Sc.</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur, MP | 2019 – 2022</p>
          </div>
        </div>
      ) : (
        <p className="text-xs sm:text-sm tracking-wide">{ content }</p>
      ) }
    </div>
  );

  return (
    <Popover>
      <PopoverTrigger>{ button }</PopoverTrigger>
      <PopoverContent className="w-[95vw] bg-[#19181cef] sm:w-[550px] p-0 border border-gray-800 shadow-2xl backdrop-blur-md">
        <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="p-4 sm:p-6 text-white">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/avatar.png"
                width={ 60 }
                height={ 60 }
                alt="Ashish Dubey avatar"
                className="rounded-full border-2 border-cyan-400/80 mr-3 sm:mr-6 object-cover"
              />
              <div>
                <h2 className="text-lg sm:text-2xl font-bold">Ashish Dubey</h2>
                <p className="text-sm sm:text-base text-cyan-400">
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-gray-300">
              <p className="flex items-center text-xs sm:text-sm">
                <Mail size={ 14 } className="mr-2 text-cyan-400" />
                ashish9039062705@gmail.com
              </p>
              <p className="flex items-center text-xs sm:text-sm">
                <Phone size={ 14 } className="mr-2 text-cyan-400" />
                +91 9302300834
              </p>
              <p className="flex items-center text-xs sm:text-sm">
                <MapPin size={ 14 } className="mr-2 text-cyan-400" />
                Jabalpur, Madhya Pradesh, India
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                About
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Full Stack Web Developer with 1.5+ years of experience designing and shipping production web applications with React.js, Node.js, Express.js, MySQL, and MongoDB. Delivered end-to-end platforms across real estate, healthcare, and business-automation domains, including a client-to-cash automation system, an AI-powered clinic management tool, and a multi-property real estate portal. Skilled in RESTful API design, database architecture, third-party integrations, and performance optimization. Recognized with a company Appreciation Certificate for outstanding contribution across four major product launches.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                Current Position
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Full Stack Web Developer at <span className="text-white font-medium">DOAGuru InfoSystems</span>, Jabalpur, MP | Jan 2026 – Present
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
            <div className="bg-black/30 border border-white/5 rounded-xl p-4">
              <TabContent id="experience" content="" />
              <TabContent id="skills" content="" />
              <TabContent id="education" content="" />
            </div>
          </div>
        </div>
        <div className="p-2 sm:p-4 bg-black/60 border-t border-gray-800 flex justify-between items-center">
          <span className="text-gray-400 text-xs">
            DOAGuru InfoSystems // Ashish Dubey Portfolio
          </span>
          <ChevronUp className="text-white" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MyInfo;
