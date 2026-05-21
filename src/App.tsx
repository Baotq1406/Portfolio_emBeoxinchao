import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  ExternalLink,
  Youtube,
  Download,
  ChevronDown,
  Gamepad2,
  Code2,
  GitBranch,
  Trophy,
  Star,
  Zap,
} from 'lucide-react';

const skills = [
  { name: 'C#', level: 3, icon: <Code2 size={16} /> },
  { name: 'Unity', level: 3, icon: <Gamepad2 size={16} /> },
  { name: 'Git', level: 3, icon: <GitBranch size={16} /> },
  { name: 'C++', level: 3, icon: <Code2 size={16} /> },
  { name: 'Trello', level: 3, icon: <Zap size={16} /> },
];

const projects = [
  {
    title: 'Shoot Asteroid',
    type: '2D Space Shooter',
    descriptionEn:
      'Control a spaceship to shoot or dodge falling asteroids, avoid turret bullets, and collect as many points as possible.',
    youtube: 'https://youtu.be/NwyLm3YzDac',
    github: 'https://github.com/Baotq1406/Shoot-Asteroid.git',
    download: null as string | null,
    tags: ['C#', 'Unity', '2D', 'Space'],
    color: 'from-cyan-500 to-blue-600',
    image:
      'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Mystic Forest',
    type: '2D RPG Adventure',
    descriptionEn:
      'An RPG game where players take on the role of an adventurer exploring a mysterious forest, uncovering its secrets one by one.',
    youtube: 'https://youtu.be/jCRZsTlTFqE',
    github: 'https://github.com/Baotq1406/RPG-game-Mystic-Forest',
    download:
      'https://drive.google.com/file/d/1xx-lsZzeqlaGEl8sxeVa0Kcgsjxl2_L/view?usp=sharing',
    tags: ['C#', 'Unity', 'RPG', 'Adventure'],
    color: 'from-emerald-500 to-teal-600',
    image:
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const hobbies = [
  { icon: <Gamepad2 size={18} />, label: 'Chơi game' },
  { icon: <Star size={18} />, label: 'Xem phim' },
  { icon: <Trophy size={18} />, label: 'Bóng rổ' },
];

function SkillBar({
  name,
  level,
  icon,
}: {
  name: string;
  level: number;
  icon: React.ReactNode;
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-cyan-400">{icon}</span>
        <span className="text-sm font-semibold text-gray-200">{name}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-500 ${
              animated && i < level
                ? 'bg-gradient-to-r from-cyan-400 to-teal-400'
                : 'bg-gray-700'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gray-800/60 border transition-all duration-400 ${
        hovered
          ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/10 -translate-y-1'
          : 'border-gray-700/50'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-600 ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.descriptionEn}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-gray-700/80 text-cyan-300 rounded-md border border-gray-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors"
          >
            <Youtube size={13} /> Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-gray-700/80 text-gray-300 rounded-lg border border-gray-600/50 hover:bg-gray-700 transition-colors"
          >
            <Github size={13} /> Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

const experiences = [
  {
    title: 'Game Development Fundamentals',
    category: 'Learning',
    description: 'Mastering game design patterns, physics systems, and player mechanics through practical projects.',
    skills: ['C#', 'Game Design', 'Player Experience'],
  },
  {
    title: 'Unity Engine Expertise',
    category: 'Specialization',
    description: 'Developing proficiency with Unity tools, asset management, and performance optimization for 2D games.',
    skills: ['2D Graphics', 'Physics', 'Audio Integration'],
  },
  {
    title: 'Collaborative Development',
    category: 'Teamwork',
    description: 'Learning version control best practices and working with Git to manage complex game projects.',
    skills: ['Git', 'Code Review', 'Documentation'],
  },
];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Ambient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-teal-600/8 rounded-full blur-3xl" />
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.05,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-black text-lg text-white"
          >
            <Gamepad2 className="text-cyan-400" size={22} />
            TQB<span className="text-cyan-400">.</span>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="relative text-center max-w-3xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-2xl shadow-cyan-400/20 mx-auto">
              <img
                src="/avatars/avatar.jpg"
                alt="Tran Quoc Bao"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <Gamepad2 size={18} className="text-gray-900" />
            </div>
          </div>

          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs mb-3">
            Game Developer
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Tran Quoc Bao
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Passionate about creating immersive game experiences with Unity &amp; C#.
            Software Engineering student at VKU, Đà Nẵng.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white font-medium rounded-xl transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="About Me" title="Who Am I?" />

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Zap size={20} />}
              iconBg="bg-cyan-400/20"
              iconColor="text-cyan-400"
              title="Career Goals"
            >
              <ul className="space-y-3">
                {[
                  'Phát triển kỹ năng lập trình và thiết kế gameplay.',
                  'Học hỏi và tích lũy kinh nghiệm thực tế về quy trình phát triển game.',
                ].map((goal) => (
                  <li
                    key={goal}
                    className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard
              icon={<Trophy size={20} />}
              iconBg="bg-teal-400/20"
              iconColor="text-teal-400"
              title="Education"
            >
              <p className="text-xs text-teal-400 font-semibold tracking-wider uppercase mb-1">
                2022 – 2027
              </p>
              <p className="text-white font-semibold text-sm leading-snug mb-1">
                Trường ĐH CNTT &amp; Truyền thông Việt Hàn
              </p>
              <p className="text-gray-400 text-sm mb-3">Công nghệ phần mềm</p>
              <div className="flex items-center gap-2">
                <Star size={14} className="text-yellow-400" />
                <span className="text-sm text-gray-300">
                  GPA:{' '}
                  <strong className="text-yellow-400">3.22 / 4.0</strong>
                </span>
              </div>
            </InfoCard>

            <InfoCard
              icon={<Trophy size={20} />}
              iconBg="bg-purple-400/20"
              iconColor="text-purple-400"
              title="TOEIC L&amp;R"
            >
              <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1">
                2025 – 2027
              </p>
              <p className="text-white font-semibold mb-2">English Proficiency</p>
              <p className="text-3xl font-black text-purple-400">610</p>
            </InfoCard>

            <InfoCard
              icon={<Gamepad2 size={20} />}
              iconBg="bg-rose-400/20"
              iconColor="text-rose-400"
              title="Hobbies"
            >
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-700/60 rounded-xl border border-gray-600/40 text-gray-300 text-sm"
                  >
                    <span className="text-rose-400">{hobby.icon}</span>
                    {hobby.label}
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="My Journey" title="Experience & Focus" />

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-b-full" />
                <p className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-2">
                  {exp.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Technical Skills" title="My Toolkit" />

          <div className="max-w-lg mx-auto bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8">
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="My Work" title="Projects" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-900/40">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader eyebrow="Get In Touch" title="Contact" />
          <p className="text-gray-400 mb-12 -mt-8">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <ContactItem
              href="mailto:quocbaotk1406@gmail.com"
              icon={<Mail size={20} />}
              iconBg="bg-cyan-400/20"
              iconColor="text-cyan-400"
              label="Email"
              value="quocbaotk1406@gmail.com"
            />
            <ContactItem
              href="tel:0866720135"
              icon={<Phone size={20} />}
              iconBg="bg-teal-400/20"
              iconColor="text-teal-400"
              label="Phone"
              value="0866 720 135"
            />
            <div className="flex items-center gap-4 p-5 bg-gray-800/60 border border-gray-700/50 rounded-2xl">
              <div className="w-11 h-11 bg-rose-400/20 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-rose-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-sm text-gray-200 font-medium">
                  Ngũ Hành Sơn, Đà Nẵng
                </p>
              </div>
            </div>
            <ContactItem
              href="https://www.facebook.com/quoc.bao.540358"
              icon={<Facebook size={20} />}
              iconBg="bg-blue-400/20"
              iconColor="text-blue-400"
              label="Facebook"
              value="quoc.bao.540358"
              external
            />
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Baotq1406"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="https://www.facebook.com/quoc.bao.540358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500/30 rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <ExternalLink size={17} /> Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-gray-800/60">
        <p className="text-gray-600 text-sm">
          &copy; 2024 Tran Quoc Bao — Game Developer
        </p>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black text-white">{title}</h2>
    </div>
  );
}

function InfoCard({
  icon,
  iconBg,
  iconColor,
  title,
  children,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
          <span className={iconColor}>{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ContactItem({
  href,
  icon,
  iconBg,
  iconColor,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-5 bg-gray-800/60 border border-gray-700/50 rounded-2xl hover:border-cyan-500/40 hover:bg-gray-800 transition-all group"
    >
      <div
        className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center shrink-0 group-hover:brightness-110 transition-all`}
      >
        <span className={iconColor}>{icon}</span>
      </div>
      <div className="text-left">
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        <p className="text-sm text-gray-200 font-medium">{value}</p>
      </div>
    </a>
  );
}
