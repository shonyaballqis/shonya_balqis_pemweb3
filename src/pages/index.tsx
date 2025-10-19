import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-12">

      <nav className="w-full max-w-4xl mb-12 flex justify-between items-center"><nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50 shadow-lg">
  <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
    {/* Logo / Nama */}
    <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
      Hallo <span className="text-white">.</span>
    </h1>

    {/* Menu */}
    <div className="flex gap-8 font-medium text-gray-300">
      {["About", "Skills", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative group transition"
        >
          <span className="hover:text-blue-400 transition-colors duration-300">
            {item}
          </span>
          {/* Garis bawah animasi */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  </div>
</nav>
      </nav>    

<div className="flex flex-col items-center justify-center mt-10">
  <div className="w-[180px] h-[180px] overflow-hidden rounded-full border-4 border-gray-300 shadow-lg">
    <Image
      src="/Foto.jpg"
      alt="Profile"
      width={180}
      height={180}
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2 text-center">Hi, I'm Shonya Balqis Fithriyyah 👋</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        Web Developer & Law Student who builds modern web applications.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        Im a Law Student and Web Developer passionate about technology, design, and continuous learning. I enjoy exploring how technology can make education and daily life more efficient.
      </p>

     {/* SKILLS */}
<section id="skills" className="py-20 text-center">
  <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {[
      { icon: <SiHtml5 color="#F97316" size={48} />, name: "HTML5" },
      { icon: <SiCss3 color="#2563EB" size={48} />, name: "CSS3" },
      { icon: <SiJavascript color="#FACC15" size={48} />, name: "JavaScript" },
      { icon: <SiReact color="#22D3EE" size={48} />, name: "React" },
      { icon: <SiNextdotjs color="#FFFFFF" size={48} />, name: "Next.js" },
      { icon: <SiTailwindcss color="#38BDF8" size={48} />, name: "Tailwind" },
    ].map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-32 h-32 
                   rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
                   shadow-md hover:scale-110 hover:shadow-cyan-400/40 
                   transition-all duration-300"
      >
        <div className="mb-3">{skill.icon}</div>
        <p className="text-white font-medium">{skill.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact</h2>
<p className="text-gray-400 mb-8 text-center text-lg">
  Let’s build something amazing together! 🚀
</p>

<div className="flex justify-center">
  <a
    href="mailto:Shonyaballqis@gmail.com"
    className="inline-flex items-center gap-3 px-8 py-3 
               bg-gradient-to-r from-blue-500 to-cyan-400 
               text-white rounded-full font-semibold shadow-lg
               hover:scale-110 hover:shadow-cyan-400/50 
               transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    aria-label="Send email to Balqis"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75L12 12.75 2.25 6.75"
      />
    </svg>
    Email Me
  </a>
</div>
    </main>
  );
} 

