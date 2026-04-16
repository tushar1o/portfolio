function Skills() {
  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl font-bold">Skills</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;