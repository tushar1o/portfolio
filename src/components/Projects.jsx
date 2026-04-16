function Projects() {
  const projects = [
    {
      title: "Food Delivery App",
      tech: "React, Node.js, MongoDB",
      desc: "Full-stack food ordering app with search, cart, and authentication.",
      link: "#",
      github: "#",
    },
    {
      title: "Job Portal",
      tech: "React, Express, MongoDB",
      desc: "Platform for job seekers and recruiters with role-based authentication.",
      link: "#",
      github: "#",
    },
    {
      title: "Pinterest Clone",
      tech: "React, Node.js, Cloudinary",
      desc: "Image sharing app with masonry layout and infinite scroll.",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.tech}</p>
            <p className="mt-3">{p.desc}</p>

            <div className="mt-4 flex gap-4">
              <a href={p.link} className="text-blue-400">
                Live
              </a>
              <a href={p.github} className="text-green-400">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;