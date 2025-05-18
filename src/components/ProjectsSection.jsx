import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Helmet Detection and Traffic Signal Control using Computer Vision",
    description: "A machine learning based object detection model is developed to identify motorcycle riders and detect whether they are wearing helmets. And a smart traffic signal control system is integrated, which maintains the signal based on the detection of helmets.",
    image: "/projects/project1.png",
    tags: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Basketball Refree",
    description:
      "A machine learning based object detection model is developed to detect basketballs and player keypoints in real-time, enabling accurate tracking. And Content-based filtering is applied to identify violations like traveling and double dribbling, offering a smart and efficient way to support referees in making accurate calls.",
    image: "/projects/project2.png",
    tags: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio using React.js and TailWind CSS",
    description:
      "A portfolio built using React.js and Tailwind CSS. It features a clean layout to display personal details, skills, and projects, with smooth navigation, responsive design, interactive elements and animations enhance user engagement and overall experience.",
    image: "/projects/project3.png",
    tags: ["React.js", "TailWind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        {/* <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p> */}

        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-1 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-4 text-center"> {project.title}</h3>
                <p className="text-muted-foreground text-md mb-4 text-left">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
