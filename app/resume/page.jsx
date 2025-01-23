"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaPython, FaNode, FaEye } from "react-icons/fa";
import { SiCplusplus, SiSwift, SiRuby, SiDjango, SiArduino } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Data objects

// extracurriculars data
// description: "Beyond academics, I'm actively involved in shaping our school community through diverse leadership roles and meaningful activities. From leading technology initiatives to competing in sports, participating in public speaking, and serving our local community, these experiences have shaped me into a well-rounded individual who values both personal growth and collective impact.",
const extracurriculars = {
  title: 'My extracurriculars',
  description: "Beyond academics, I'm actively involved in shaping our school community through diverse leadership roles and meaningful activities.",
  activities: [
    {
      title: "Student Body Leadership",
      position: "Student Body President",
      description: "Led initiatives to improve student life, organized school-wide events, and served as the primary liaison between students and administration.",
      images: [
        "/assets/extracurriculars/student_body_leader.jpg",
        "/assets/extracurriculars/students.jpg",
        "/assets/extracurriculars/fawe.jpeg",
      ]
    //   image: "/api/placeholder/400/300"
    },
    {
      "title": "Rwanda Math Olympiad Team",
      "position": "Algebraic Topology & Calculus Adviser, Team Captain",
      "description": "Led Rwanda's International Mathematical Olympiad summer training camp as a national 1st runner-up, mentoring 15 teammates in advanced mathematical disciplines. Developed workshops in algebraic topology and calculus, preparing teammates for complex mathematical competitions and academic symposiums.",
      "images": [
      "/assets/extracurriculars/mathimage0.png",
      "/assets/extracurriculars/mathimage1.jpeg",
      "/assets/extracurriculars/mathimage2.jpeg",
      "/assets/extracurriculars/mathimage3.jpeg",
      "/assets/extracurriculars/mathimage4.jpg"
      ]
    },
    {
      title: "Science Club Innovation",
      position: "Club President",
      description: "Managed weekly experiments, coordinated science fair projects, and fostered STEM enthusiasm among peers.",
      images: [
        "/assets/extracurriculars/robotics.jpeg",
        "/assets/extracurriculars/science_club.jpeg",
        "/assets/extracurriculars/science_lab.jpeg",
        "/assets/extracurriculars/science_lab2.jpeg"
      ]
    },
    
    {
      title: "Debate Club Development",
      position: "Founder & President",
      description: "Established the school's first debate club, organized competitions, and trained 62 members in public speaking",
      images: [
        "/assets/extracurriculars/debate_club.jpg",
        "/assets/extracurriculars/student_body2.jpg",
        "/assets/extracurriculars/debate2.jpeg",
        "/assets/extracurriculars/debateee.jpeg"

      ]
    },
    {
      title: "Community Service",
      position: "Volunteer Coordinator",
      description: "Organized local community service projects and coordinated with local organizations. foundraised $6,000+ for donations",
      images: [
        "/assets/extracurriculars/charity.jpg",
      ]
    },
    {
      title: "Traditional Dance Troupe",
      position: "Event Coordinator & Lead Dancer",
      description: "Led our school's traditional dance troupe, managing performances for school and community events. Choreographed routines, conducted rehearsals, and collaborated with local artists. Deepened cultural appreciation while developing leadership and organizational skills.",
      images: [
        "/assets/extracurriculars/ballet.jpg",
        "/assets/extracurriculars/ballet2.jpg"
        ]
    },
    {
      title: "Software Development Team",
      position: "Tech Lead",
      description: "Led a team of student developers in creating school management software and organizing coding workshops.",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    }
  ]
};

// experience data
const experience = {
  title: "My experience",
  description: "A track record of impactful roles in software engineering and IT, demonstrating skills in various programming languages and technologies.",
  items: [
    {
      company: "Fawe Girls School",
      position: "Student Body President",
      duration: "Sep 2023 - Present",
    },
    {
      company: "Rwanda Math Olympiad Team",
      position: "Math Coach",
      duration: "Nov 2024 - Present",
    },
    {
      company: "Science Club",
      position: "President",
      duration: "Sep 2023 - Present",
    },
    {
      company: "Debate Club",
      position: "Founder & President",
      duration: "May 2023 - Aug 2023",
    },
    {
      company: "Tecno Mobile Rwanda",
      position: "Software Engineer Intern",
      duration: "July 2022 - September 2022",
    },
    {
      company: "Equity Bank Limited",
      position: "Banking Fellow",
      duration: "Nov 2020 – Nov 2020",
    },
  ]
};

// Education data
const education = {
  title: "My education",
  description: "A blend of formal education and self-directed learning, focusing on Computer Science, Economics, and programming technologies.",
  items: [
    {
      institution: "Fawe Girls School",
      degree: "Math, Economics & Computer Science",
      duration: "2022 - 2025",
    },
    {
      institution: "Isomo Academy - Bridge2Rwanda",
      degree: "Scholar",
      duration: "2023 - Present",
    },
    {
        institution: "Groupe Scolaire Officiel de Butare",
        degree: "Ordinary Level High-school",
        duration: "2019 - 2022",
    },
    {
        institution: "Udemy",
        degree: "100 Days of Code: The Complete Python Pro Bootcamp",
        duration: "2021",
    },
    {
      institution: "Harvard CS50",
      degree: "Introduction to Computer Science",
      duration: "2021",
    },
    {
      institution: "ALX Africa",
      degree: "Software Engineering Program",
      duration: "2023 - 2024",
    }
  ]
};

// technical skills
const tech_skills = {
  title: "Technical Skills",
  description: "A diverse set of programming languages and technologies, with focus on software engineering and web development.",
  skillList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiSwift />, name: "Swift" },
    { icon: <SiRuby />, name: "Ruby" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaGithub />, name: "Git/GitHub" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiArduino />, name: "Arduino" }
  ]
};

// Other Skills data
const other_skills = {
  title: "Other Skills",
  description: "Non-technical skills that complement my technical abilities and contribute to overall effectiveness.",
  otherSkillList: [
    { name: "Leadership" },
    { name: "Problem-Solving" },
    { name: "Public Speaking" },
    { name: "Critical Thinking" },
    { name: "Project Management" },
    { name: "Team Collaboration" },
    { name: "Creative Writing" },
    { name: "Research" },
    { name: "Data Analysis" },
    { name: "Technical Writing" },
    { name: "Event Planning" },
    { name: "Mentoring" },
    { name: "Playing Piano" },
    { name: "Knitting" },
    { name: "Cooking" },
    { name: "Financial literacy" },
  ]
};


// Add ImageCarousel component
const ImageCarousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = useCallback(() => {
      if (images.length > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, [images]);
  
    useEffect(() => {
      if (images.length > 1) {
        const timer = setInterval(nextImage, 3000);
        return () => clearInterval(timer);
      }
    }, [nextImage, images]);
  
    if (!images.length) {
      return (
        <div className="relative w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/60">No images available</p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="relative w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-accent' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    );
};

const Resume = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openResume = () => {
    window.open('https://docs.google.com/document/d/1OuLdM4HNPCfsSjXSvzwfzwyUXGYLMj11I7STw5A-6zk/edit?usp=sharing', '_blank');
  };

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsList className="flex flex-col gap-6 mb-12">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="extracurriculars">Extracurriculars</TabsTrigger>
              <TabsTrigger value="tech_skills">Tech-Skills</TabsTrigger>
              <TabsTrigger value="other_skills">Other Skills</TabsTrigger>
            </TabsList>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showButton ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={openResume}
                className="flex items-center justify-center gap-2 bg-accent text-black hover:bg-accent/80 px-4 py-2 text-sm"
              >
                <FaEye /> View Resume
              </Button>
            </motion.div>
          </div>

          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4l font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-content justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4l font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[180px] p-6 rounded-xl flex flex-col justify-start items-start">
                        <div className="mb-2">
                          <span className="text-accent text-sm">{item.duration}</span>
                        </div>
                        <h3 className="text-lg font-semibold leading-tight mb-2">
                          {item.institution}
                        </h3>
                        <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-3 mt-auto">
                          {item.degree}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Extracurriculars Section */}
            <TabsContent value="extracurriculars" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-8">
                <h3 className="text-4xl font-bold">{extracurriculars.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {extracurriculars.description}
                </p>
              </div>

              <ScrollArea className="h-[600px] w-full">
                <div className="grid grid-cols-1 gap-6 pr-4">
                    {extracurriculars.activities.map((activity, index) => (
                    <div key={index} className="bg-[#232329] rounded-xl p-6 flex flex-col md:flex-row gap-6">
                        <ImageCarousel images={activity.images} />
                        <div className="flex flex-col justify-center flex-1">
                        <h4 className="text-2xl font-semibold mb-2">{activity.title}</h4>
                        <p className="text-accent mb-3">{activity.position}</p>
                        <p className="text-white/60">{activity.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
             </ScrollArea>
            </TabsContent>

            {/* Technical Skills Section */}
            <TabsContent value="tech_skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">{tech_skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {tech_skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tech_skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white text-black">
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Other Skills Section */}
            <TabsContent value="other_skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">{other_skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {other_skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {other_skills.otherSkillList.map((other_skill, index) => (
                    <li key={index} className="bg-[#232329] h-[150px] rounded-xl flex justify-center items-center">
                      <p className="text-xl text-center capitalize">{other_skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;