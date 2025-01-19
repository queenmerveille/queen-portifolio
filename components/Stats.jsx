"use client";


import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "2023 Presidential Youth Award",
    },
    {
        num: 1,
        text: "2022 O'Level National Exams Best Performer",
    },
    {
        num: 78,
        text: "Families Helped with $5k Raised In Charity",
    },
    {
        num: 2,
        text: "National Science Competitions Winner",
    },
    {
        num: 1,
        text: "East African Debate 1st Runner-up",
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[100vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div 
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
                                key={index}
                            >
                                <CountUp 
                                    end={item.num} 
                                    duration={5} 
                                    delay={2} 
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p 
                                    className={`${
                                        item.text.length < 15 ? "max-w-[100px]": "max-w-[150px]"
                                    } leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default Stats