import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-31 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Seeking a challenging position as a software developer to leverage my expertise in Java, HTML, CSS, JavaScript,
              React.js, MySQL, and MongoDB. Adept at using tools like OpenCV, TensorFlow, and You Only Look Once (YOLO) model for computer vision and
              machine learning projects.
            </p>

            <p className="text-muted-foreground">
              I am passionate about continuously learning new things and staying updated with the latest
              advancements in tecnology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};
