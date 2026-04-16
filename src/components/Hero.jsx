function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold">Tushar Kapil</h1>
      <p className="mt-4 text-lg">
        Full Stack Developer (MERN)
      </p>
      <p className="mt-2 text-gray-400">
        Building scalable and user-friendly web applications
      </p>

      <div className="mt-6 space-x-4">
        <a
          href="#contact"
          className="bg-white text-black px-6 py-2 rounded-lg"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          className="border px-6 py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;