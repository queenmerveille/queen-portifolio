"use client";
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaPython, FaNode, FaEye } from "react-icons/fa";
import { SiCplusplus, SiSwift, SiRuby, SiDjango, SiArduino, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// extracurriculars data
const extracurriculars = {
    title: 'My extracurriculars',
    description: "Beyond academics, I'm actively involved in shaping our school community through diverse leadership roles and meaningful activities. From leading technology initiatives to competing in sports, participating in public speaking, and serving our local community, these experiences have shaped me into a well-rounded individual who values both personal growth and collective impact.",
    info: [
        { fieldName: "Name", fieldValue: "Queen Merveille" },
        { fieldName: "Phone", fieldValue: "(+250) 787 899 z280" },
        { fieldName: "Experience", fieldValue: "3+ Years" },
        { fieldName: "GitHub", fieldValue: "queenmerveille" },
        { fieldName: "Nationality", fieldValue: "Rwandan" },
        { fieldName: "Email", fieldValue: "umuhoza.q.merveille@gmail.com" },
        { fieldName: "Education", fieldValue: "Fawe Girls School" },
        { fieldName: "Language", fieldValue: "English, French & Swahili" },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "A track record of impactful roles in software engineering and IT, demonstrating skills in various programming languages and technologies.",
    items: [
        {
            company: "Fawe Girls School",
            position: "Student Body President",
            duration: "Sep 2023 - Present",
        },
        {
            company: "Fawe Girls School Science Club",
            position: "Science Club President",
            duration: "Sep 2023 - Present",
        },
        {
            company: "Fawe Girls School Debate Club",
            position: "Debate Club Founder & President",
            duration: "May 2023 - Aug 2023",
        },
        {
            company: "Tecno Mobile Rwanda",
            position: "Software Engineer",
            duration: "July 2022 - March 2023",
        },
        {
            company: "Equity Bank Limited",
            position: "Banking Fellow",
            duration: "Nov 2020 – Feb 2021",
        },
    ]
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "A blend of formal education and self-directed learning, focusing on Computer Science, Economics, and various programming technologies.",
    items: [
        {
            institution: "Fawe Girls School",
            degree: "Math Economics & Computer Science",
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
            institution: "ALX Africa",
            degree: "Technology Academy",
            duration: "2023 - 2024",
        },
        {
            institution: "Harvard",
            degree: "Harvard CS50",
            duration: "2021",
        },
    ]
};

// technical skills
const tech_skills = {
    title: "My skills",
    description: "A diverse set of programming languages and technologies, with a focus on software engineering, web development, and data structures.",
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
        { icon: <SiArduino />, name: "Arduino" },
    ]
};

// other Skills data
const other_skills = {
    title: "Other Skills",
    description: "A set of non-technical skills that complement my technical abilities and contribute to my overall effectiveness.",
    otherSkillList: [
      { name: "Leadership" },
      { name: "Problem-Solving" },
      { name: "Collaboration" },
      { name: "Critical Thinking" },
      { name: "Public Speaking" },
      { name: "Financial literacy" },
      { name: "Adaptability" },
      { name: "Time management" },
      { name: "Creative Writing" },
      { name: "Digital literacy" },
      { name: "Playing Piano" },
      { name: "Knitting" },
      { name: "Cooking" },
    ]
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
        window.open('https://drive.google.com/file/d/1BU_K6umJEcOjhwdIvMYM_AWftAzOugEo/view?usp=sharing', '_blank');
    };

    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }, 
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
                        {/* View Resume Button */}
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

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
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

                        {/* education */}
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

                        {/* extracurriculars */}
                        <TabsContent value="extracurriculars" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-2xl font-bold">{extracurriculars.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {extracurriculars.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {extracurriculars.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* tech skills */}
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


                        {/* Non- technical skills */}

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