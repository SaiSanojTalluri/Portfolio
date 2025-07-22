import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 space-x-24">
            <h3 className="text-2xl font-semibold mb-8">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:saisanoj03@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    saisanoj03@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-9">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+916301379134"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6301379134
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-9">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Hyderabad, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 space-x-44">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 relative left-17">
                <a href="https://linkedin.com/in/saisanoj-talluri" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/SaiSanojTalluri" target="_blank">
                  <Github />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
