import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const isContain = project.image?.includes("ui-interactivity");

  return (
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between py-4 group"
    >
      <div>
        <h3 className="text-3xl font-medium text-gray-800 group-hover:underline">
          {project.name}
        </h3>
        <p className="text-gray-600 text-lg mt-1">{project.description}</p>
      </div>
      <span className="border border-gray-500 rounded-full p-2 transition-all mt-1 group-hover:bg-black group-hover:text-white">
        <ArrowUpRight
          size={18}
          className="group-hover:rotate-45 transform transition-transform duration-300"
        />
      </span>
    </a>
  );
};

export default ProjectCard;