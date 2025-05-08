import ReflectionCard from './ReflectionCard';

const reflections = [
  {
    message: "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.",
    name: "Steve McConnell",
    role: "Author and Software Engineer",
    image: "/assets/images/steve.png",
  },
  {
    message: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    name: "Patrick McKenzie",
    role: "Writer and Software Business",
    image: "/assets/images/patrick.jpeg",
  },
  {
    message: "Setiap bug adalah kesempatan untuk belajar. Dan setiap ‘nah!’ adalah hadiah dari proses itu sendiri.",
    name: "Fikri Andra Irham",
    role: "Web Development Enthusiast",
    image: "/assets/images/fikri.jpg",
  },
];

const Thoughts = () => {
  return (
    <section id="thoughts" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">Thoughts</h2>
        </div>

        <div className="md:col-span-2 grid gap-12">
          {reflections.map((item, idx) => (
            <ReflectionCard key={idx} reflection={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;