import { motion } from "motion/react";
import { Code2, Layout, Database } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: "60%", color: "bg-green-500" },
    { name: "C++", level: "55%", color: "bg-green-300" },
    { name: "Photography", level: "80%", color: "bg-racing-red" },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "Website portfolio menggunakan React, TailwindCSS, dan Framer Motion dengan tema Formula 1.",
      tech: ["React", "Tailwind", "Motion"],
      icon: <Layout className="text-racing-red" />
    },
    {
      title: "C++ Logic Engine",
      description: "Program sederhana berbasis logika dan fungsi untuk optimasi algoritma dasar.",
      tech: ["C++", "STL"],
      icon: <Code2 className="text-racing-red" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto px-6 py-10 space-y-20"
    >
      {/* SKILLS */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center font-racing italic">Technical Skills</h2>
        <div className="space-y-8 bg-racing-green/10 p-10 rounded-2xl border border-white/5">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-bold tracking-wider">{skill.name}</span>
                <span className="text-gray-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`${skill.color} h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center font-racing italic">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-racing-green p-8 rounded-xl relative overflow-hidden group hover:shadow-2xl transition-all border border-white/5"
            >
              {/* Decorative racing stripe */}
              <div className="absolute top-0 right-0 w-32 h-full bg-white/5 -skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-racing-dark rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold px-3 py-1 bg-racing-red/20 text-racing-red rounded-full border border-racing-red/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* PHOTOGRAPHY GALLERY */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center font-racing italic">Photography Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { url: "/Flower.jpg", title: "Flower" },
            { url: "/City.jpg", title: "City" },
            { url: "/Glider.jpg", title: "Glider" },
            { url: "/Sea.jpg", title: "Sea" }
          ].map((photo, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-racing-green group"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-racing-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="font-racing italic text-sm tracking-widest">{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
