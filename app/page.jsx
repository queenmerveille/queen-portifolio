import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-2 xl:pt-2 xl:pb-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">High-school Senior & Software Developer</span> */}
            <span className="text-xl">Software Engineer & CS Student</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Queen Umuhoza</span>
            </h1>
            {/* <p className="max-w-[600px] mb-9 text-white/80">
              Passionate Senior Highschool student at Fawe Girls School, with a track record of: Leadership, public Speaking and innovative software development. I blend academic rigor with practical experience to create impactful solutions, from student leadership initiatives to technology innovations.
            </p> */}
            <p className="max-w-[600px] mb-9 text-white/80">
            Passionate Computer Science and Economics student at University of Pennsylvania, with a track record of innovative software development, leadership, and public speaking. I blend academic rigor with practical experience to create impactful digital solutions, from enterprise software to mobile apps.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1dy94DvVDvkjlYdCRT9U6kx9TbwRaKV1t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-6 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="-mt-8 xl:-mt-0">
        <Stats />
      </div>
    </section>
  );
};

export default Home;