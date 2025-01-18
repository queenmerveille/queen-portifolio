"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Image from "next/image";

const blogPosts = [
    {
        id: "00",
        title: "A Brief Pause 🤗🤗: Focusing on Academic Excellence",
        excerpt: "An important update about reduced posting frequency as I balance senior year studies, national exams preparation, and leadership responsibilities at FAWE Girls School.",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <p>
                    Dear Valued Readers,
                    </p>
                    <br />
                    <p>
                    I hope this message finds you well. I wanted to take a moment to share an important update about the frequency of my blog posts in the coming months. As a senior student in my second trimester at FAWE Girls School preparing for the Rwanda Advanced Level National Examination, I find myself at a crucial junction that requires my fullest attention and dedication.
                    </p>
                    <br />
                    <p>
                    My current responsibilities include:
                    <br />
                    - Intensive preparation for national examinations
                    <br />
                    - Duties as the Student Body President
                    <br />
                    - Commitments to various school clubs and initiatives
                    </p>
                    <br />
                    <p>
                    While I am passionate about sharing stories and insights through this platform, I must temporarily reduce the frequency of my posts to ensure I can give my best to my academic pursuits and leadership responsibilities. This isn't goodbye – rather, it's a brief pause to focus on this critical period in my academic journey.
                    </p>
                    <br />
                    <p>
                    I plan to share updates when possible, but they will be less frequent than before. I deeply appreciate your understanding and continued support as I navigate this challenging but exciting phase of my education.
                    </p>
                    <br />
                    <p>
                    Thank you for being part of this journey, and I look forward to returning with fresh perspectives and stories to share.
                    </p>
                    <br />
                    <p>
                    Warm regards,<br />
                    Queen
                    </p>
                </div>
            },
            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>05, January 2025 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2025 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            }
        ]
    },

    {
        id: "01",
        title: "Rising Queens: The Female Force Shaping Rwanda's Future",
        excerpt: "From the halls of FAWE Girls School to the chambers of parliament, women are leading Rwanda's transformation. Here's my perspective as a young Rwandan woman witnessing this revolution.",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <p>Sitting in my classroom at FAWE Girls School Gahini (my highschool), I often find myself reflecting on what it means to be a young woman in today's Rwanda. Our walls echo with not just academic lessons, but with stories of women who've shattered glass ceilings and reshaped what's possible for girls like me.</p>
                    <br />
                    <p>Last month, during our school's leadership summit, Minister of Gender and Family Promotion, Honorable UWIMANA Consolée spoke to us about the importance of dreaming bigger than our circumstances. "The future of Rwanda isn't just being built in Kigali's skyscrapers," she said, "it's being built in classrooms like this one, where young women dare to imagine themselves as leaders, innovators, and changemakers." Her words stuck with me, especially when she shared how she once sat in similar wooden chairs, doubting if her dreams were too ambitious.</p>
                    <br />
                    <p>Rwanda's commitment to female empowerment isn't just talk. With 61.3% female representation in our parliament – the highest in the world – we're showing the globe what's possible when you invest in women's leadership. The government's reservation of 24 seats in the Chamber of Deputies for women was just the beginning. Today, women are winning competitive seats beyond these quotas, proving that when given opportunities, we excel.</p>
                    <br />
                    <p>But what does this mean for us, the girls in school uniforms still figuring out our place in the world? At FAWE, we're taught that leadership isn't just about political positions – it's about taking charge of our futures. Last semester, our science club, led entirely by girls, developed a solar-powered irrigation system for our school garden. People were surprised to see teenage girls handling complex engineering calculations and soldering equipment. But why should they be? This is the new normal we're creating.</p>
                    <br />
                    <p>The vision of Rwanda becoming the "Singapore of Africa" isn't just an economic dream – it's a social revolution. In my community, I've witnessed this transformation firsthand. My aunt, who never finished secondary school, now runs a successful agricultural cooperative that exports coffee to Europe. She employs fifteen women, most of whom are also pursuing evening classes to complete their education. "Education doesn't have an expiration date," she always tells her employees.</p>
                    <br />
                    <p>But challenges remain. Some of my classmates still face pressure to prioritize early marriage over education. Others struggle with families who question the value of sending girls to school. This is why spaces like FAWE are so crucial – they show us a different reality. Here, we learn that our gender isn't a limitation but a strength. We study the same advanced mathematics and sciences as any other school, while also learning about financial literacy and entrepreneurship.</p>
                    <br />
                    <p>Last week, during our morning assembly, our headmistress shared something powerful: "Rwanda's transformation isn't just about building modern infrastructure – it's about building modern mindsets." She's right. As we work towards becoming the Singapore of Africa, we need more than just new buildings and technologies. We need new ways of thinking about what's possible.</p>
                    <br />
                    <p>To my fellow young women across Africa: our time is now. Whether you dream of becoming a surgeon, a software engineer, or starting your own company, remember that Rwanda has shown what's possible when society invests in its daughters. Your dreams aren't too big – society's imagination has been too small.</p>
                    <br />
                    <p>The other day, I overheard my little sister telling her friend she wants to become Rwanda's first female president. Five years ago, such a statement might have been met with laughter. Today, it's met with encouragement and strategic advice. That's the power of transformation – it changes not just what we can do, but what we can imagine doing.</p>
                    <br />
                    <p>As I prepare to graduate from FAWE, I carry with me not just academic knowledge, but the understanding that being a woman in Rwanda today means being part of something bigger than ourselves. We're not just students; we're pioneers, architects of a new Africa where gender equality isn't a goal but a reality.</p>
                    <br />
                    <p>To quote our Minister: "The question isn't whether women can lead Rwanda's transformation – we already are. The question is: what will your contribution be to this journey?"</p>
                    <br />
                    <p>So, I ask you: What's your dream? How will you contribute to Rwanda's vision? The floor is yours, and the possibilities are endless.</p>
                </div>
            },

            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>15, December 2024 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2024 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            },
        ]
    },

    // The lean startup
    {
        id: "02",
        title: "The Lean Startup",
        excerpt: "The Lean Startup: A High Schooler's Guide to Building Smart (While Procrastinating on Math Homework)",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 pl-16">The Lean Startup: A High Schooler's Guide to Building Smart (While Procrastinating on Math Homework)</h2>
                    
                    <h2 className="text-2l font-bold text-white mb-4">The Book that Changed My Perspective</h2>
                    <p>As a high school student juggling Advanced Mathematics, Computer Science and Economics classes, I never thought a business book would make me rethink everything I knew about building products. But here I was, completely absorbed in Eric Ries's "The Lean Startup" while my calculus homework gave me judgmental looks from across the room.</p>
                    <br />
                    
                    <h2 className="text-2l font-bold text-white mb-4">The MVP: Minimum Viable Procrastination</h2>
                    <p>The biggest revelation? The concept of the Minimum Viable Product (MVP). It's like when I built my first calculator app - instead of trying to create a scientific calculator with trigonometric functions right away, I started with basic addition and subtraction. Turns out, that's exactly what the Lean Startup methodology preaches: start small, test quickly, and learn from feedback.</p>
                    <br />
                    
                    <h2 className="text-2l font-bold text-white mb-4">Build-Measure-Learn: The Holy Trinity</h2>
                    <p>The Build-Measure-Learn feedback loop became my new mantra. It's surprisingly similar to debugging code - you build something, test it, learn from the errors, and improve. I've started applying this to my school coding projects and even my Economics class presentations. Who knew business principles could make debugging less painful?</p>
                    <br />
                    
                    <h2 className="text-2l font-bold text-white mb-4">Key Takeaways for a Teen Entrepreneur</h2>
                    <p>Reading this book as a high school student gave me a unique perspective. Here are the main lessons that resonated with my inner tech enthusiast and aspiring economist:</p>
                    <ol className="list-decimal pl-16 mt-4 space-y-4">
                        <li>
                            Validate assumptions early - Just like testing code, test your business ideas before going all in
                        </li>
                        <li>
                            Embrace pivoting - Sometimes your first idea isn't the best one (like my failed attempt at creating a social network for pets)
                        </li>
                        <li>
                            Data is your best friend - Whether it's user feedback or market research, numbers don't lie
                        </li>
                        <li>
                            Innovation accounting - A perfect blend of my love for Economics and metrics-driven development
                        </li>
                    </ol>
                    <br />
                    
                    <h2 className="text-2l font-bold text-white mb-4">Applying Lean Principles to High School Life</h2>
                    <p>I've started implementing these principles in my school projects. For our upcoming Computer Science fair, I'm using the MVP approach - starting with a basic prototype and iterating based on feedback from my classmates. Even my Economics project on market analysis is benefiting from the Lean Startup's emphasis on validated learning.</p>
                    <br />
                    
                    <p>The Lean Startup isn't just for Silicon Valley entrepreneurs - it's for anyone who wants to build something meaningful while minimizing waste. As a high school student straddling the worlds of Computer Science and Economics, these principles have given me a framework for approaching problems and projects more efficiently.</p>
                    <p>Now, if you'll excuse me, I need to apply some validated learning to my pending math homework...</p>
                    <br />
                    
                    <div > 
                        <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>23, December 2024 &copy; Queen</p> 
                        <footer className="mt-8 text-sm text-white/60">
                            <p>&copy; 2024 Queen Merveille. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            },
        ]
    },

    {
        id: "03",
        title: "Man to Machine: Exploring AI Sentience Through Academic Research",
        excerpt: "Diving into the fascinating question of AI consciousness through my senior research paper. Join me in exploring the boundaries between artificial intelligence and true sentience.",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <p>Last semester, during my first senior trimester, I had the opportunity to write an in-depth academic paper exploring one of the most fascinating questions in artificial intelligence: Can AI achieve true sentience? With my teacher's permission, I'm excited to share some key insights from my research and analysis.</p> 
                    <br />
                    <p>You can read the full paper <a href="https://drive.google.com/file/d/12iaDzCSeBHgLnxe4fQ93omD3vS4I-hec/view?usp=sharing" target="_blank" rel="noopener noreferrer">here 👉👉 🔗</a>.</p>
                    <br />
                    <p>The journey into this topic began with a simple yet profound question - the same one many of us have probably wondered about while chatting with AI assistants: "Do you feel emotions?" As our interactions with AI become increasingly sophisticated, it's crucial to examine the boundaries between human-like responses and true consciousness.</p>
                    <br />
                    <p>In my paper, I argue that AI's ability to carry on conversations, no matter how convincing, doesn't equate to sentience or moral agency. I explore several fascinating cases, including the notable incident of Blake Lemoine, a Google engineer who claimed their LaMDA chatbot had gained consciousness. While such claims are compelling, my research suggests that what we're actually witnessing is a sophisticated form of pattern recognition rather than true consciousness.</p>
                    <br />
                    <p>One of the most interesting aspects I discovered was how our human tendency for anthropomorphization plays into this debate. Just as we might see faces in clouds or attribute human-like qualities to our pets, we're naturally inclined to project consciousness onto AI systems that can engage in human-like dialogue.</p>
                    <br />
                    <p>The paper delves into the fundamental differences between syntactic processing (what computers do) and semantic understanding (how humans think). While AI can process language with incredible sophistication, it lacks the biophysical properties that give rise to genuine consciousness and subjective experience.</p>
                    <br />
                    <p>The implications of this research extend far beyond academic discourse. As AI continues to advance, understanding these distinctions becomes crucial for ethical development and responsible implementation of AI technologies in our society.</p>
                    <br />
                    <p>I'd love to hear your thoughts on this topic. Where do you draw the line between sophisticated AI responses and true consciousness? How do you think our relationship with AI will evolve as these systems become even more advanced?</p>
                    <br />
                    <p><i>About this paper: This research was conducted as part of my English coursework during my first senior trimester. I'm grateful to my teacher for allowing me to share these insights with a broader audience.</i></p>
                </div>
            },

            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>12, January 2025 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2025 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            },
        ]
    },

    // Together for our African Girls and Young Women

    {
        id: "04",
        title: "Together for our African Girls and Young Women",
        excerpt: "Exploring the complex challenges facing young women in Sub-Saharan Africa, from healthcare access to HIV prevention, and how organizations like Global Communities are working to create lasting change through comprehensive intervention programs.",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <img src="/assets/african_women.webp" alt="african women" />
                    <br />
                    <br />
                    <p>
                    In Sub-Saharan Africa, the concept of gender equality remains abstract and farfetched. In this day and age, there are still girls and young women who lack access to primary and secondary school due to social, cultural, religious or political reasons; who are not yet reached with comprehensive information on their sexual and reproductive health; who are on the brink of despair due to mental health challenges and trauma; who stare at all forms of violence daily; who die as a result of AIDS-related causes; who face stigma and discrimination; who experience motherhood in childhood; who are in sex work as a primary mode of income generation; who lack confidence skills and remain fearful of venturing into leadership positions; who are excluded from economic opportunities; who are lost, off-track, invisible and completely silent; and who get infected with HIV and other sexually transmitted infections and many others.  
                    </p>
                    <br />
                    <img src="/assets/african_women_clinic.webp" alt="/african women at a clinic" />
                    <br />
                    <p>
                    It is no wonder that despite substantial declines in the number of new HIV infections in general populations, the epidemic among females aged 15–24 in sub-Saharan African countries remains uncontrolled, with 5,000 young women in that age group becoming infected weekly and six in seven new infections occurring among 15–19-year-old teens, according to UNAIDS’s HIV Global HIV & AIDS statistics Fact Sheet. HIV prevalence for female youth aged 15–24 is consistently higher than their male counterparts with Adolescent Girls and Young Women (AGYW) up to 14 times more likely to become HIV-infected than their male counterparts in Malawi, Zambia and Zimbabwe, according to a 2017 UNAIDS report.
                    </p>
                    <br />
                    <p>
                    Gender equality is a right and sits cardinal in securing futures of adolescent girls and young women. Fulfilling this right is the best chance we have at keeping girls and women safe, free from HIV infections and meeting their social and life goals. That is why over the last few years, Global Communities remains on the frontline centering adolescent girls and young women aged 10-24 years in Botswana, Zambia, Rwanda and Kenya in the quest to prevent new HIV infections. Collaborating with national and regional governments, local civil society organizations (CSOs), private and faith-based sectors, Global Communities has reached approximately 60,570 AGYW aged 10-24 years in Sub-Saharan Africa with a comprehensive package of interventions combining evidence-based approaches that go beyond the health sector to sustainably and directly address structural drivers and biases that increase the risk of HIV.
                    </p>
                    <br />
                    <p>
                    In many societies, public spaces are occupied mainly by men, and places to meet are limited for women and girls. We recognize this at Global Communities, and to offset this, we implement the Safe Space model for social asset building, delivery of key comprehensive HIV prevention information and mentorship with a view to empower adolescent girls and young women. This approach helps to reduce their risk, strengthen their families, mobilize communities for change and reduce the risk of men who are likely to be sex partners of AGYW.
                    </p>
                    <br />
                    <p>
                    As we celebrate this year’s International Women’s Day, we reflect on our collective action to keep girls and young women safe and mentored and to empower them to occupy the frontline positions in preparing for and securing their own futures. 
                    </p>
                </div>
            },

            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>07, March 2024 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2024 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            },
        ]
    },
    
    // Student body leader
    {
        id: "05",
        title: "Student Body Leader 😃",
        excerpt: "Surprise! You're the Student Body Leader (While Eating Mom's Cooking)",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 pl-16">Surprise! You're the Student Body Leader (While Eating Mom's Cooking)</h2>
                    <h2 className="text-2l font-bold text-white mb-4"> The Unexpected Phone Call</h2>
                    <p>My peaceful post-exam bliss was interrupted by a phone call from school. I expected it to be about a misplaced textbook or an overdue library book. Instead, I heard:</p>
                    <br />
                    <p>"Congratulations! You've been elected as the new student body leader!"</p>
                    <br />
                    <p>I nearly choked on my sambusa. Me? The girl who once accidentally set off the fire alarm during a failed attempt at sneaking midnight snacks? The same person who got tangled in the volleyball net during PE? Apparently, yes!
                    </p>
                    <br />
                    <h2 className="text-2l font-bold text-white mb-4">The Election Process: May the Odds Be Ever in Your Favor</h2>
                    <p>At Fawe Girls School, becoming the student body leader is no small feat. It's like "The Hunger Games," minus the actual hunger (unless you count our cravings for contraband snacks). The school committee, in their infinite wisdom, nominates six candidates. Then, the student body votes, probably based on criteria like "Who's least likely to burn down the science lab?" or "Who can sweet-talk the nuns into extending curfew?"</p>
                    <br />
                    <h2 className="text-2l font-bold text-white mb-4">Catholic School Shenanigans</h2>
                    <p>Now, let's talk about the elephant in the room – or should I say, the nun in the hallway? Fawe Girls is a Catholic school run by nuns, which adds an extra layer of... let's call it "excitement" to student leadership. I'm already planning my acceptance speech: "I solemnly swear to uphold the values of our school, and to find creative ways to hide my phone during morning prayers."</p>
                    <br />
                    <h2 className="text-2l font-bold text-white mb-4">The Weight of Responsibility (And My Backpack)</h2>
                    <p>Being elected while absent has shown me the immense trust my peers have in me. It's both heartwarming and terrifying. I'm ready to take on this role with gusto, armed with innovative ideas and a healthy dose of humor. My goals include:</p>
                    <ol className="list-decimal pl-16 mt-4 space-y-4">
                        <li>
                            Implementing a "Quiet Hours" policy in the library (aka "No Giggling Zone")
                        </li>
                        <li>
                            Organizing inter-house competitions (may the best dormitory win!)
                        </li>
                        <li>
                            Petitioning for better Wi-Fi (because how else are we supposed to "research" during study hall?)
                        </li>
                    </ol> 
                    <br />
                    <h2 className="text-2l font-bold text-white mb-4">Making Fawe Girls the Best in Rwanda</h2>
                    <p>With the support of my fellow students and the watchful eyes of our beloved nuns, I'm determined to make Fawe Girls School the best in Rwanda. We'll have creative programs, engaging activities, and maybe, just maybe, we'll convince the administration that ice cream is a essential food group.</p>
                    <br />
                    <p>So here's to an exciting year ahead! May our uniforms always be pressed, our homework always be done, and our spirits always be high. And to my fellow students who elected me while I was blissfully unaware – thank you for your trust. I promise to lead with integrity, creativity, and only a minimal amount of shenanigans.</p>
                    <p>Let the adventure begin! (Right after I finish this last bite of my mom's cooking.)</p>
                </div>
            },

            {
                type: "text",
                content: 
                <div > 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>25, August 2024 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2024 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
                
            },
        ]
    },

    // Smogy Nairobi by Dalton
    {
        id: "06",
        title: "Good Old Smoggy Nairobi",
        excerpt: "Places are simply narratives. Mombasa was not as hot as I had imagined. It was not at all like anything I had imagined...",
        content: [
            {
                type: "section",
                title: "Introduction",
                content: [
                    {
                        type: "text",
                        content: "Places are simply narratives. Mombasa was not as hot as I had imagined. It was not at all like anything I had imagined."
                    },
                    {
                        type: "text",
                        content: "Having spent a deathly cold July in smoggy wet Nairobi, I eagerly awaited relaxation on the warm sandy beaches of Mombasa. I had also looked forward to using the standard gauge railway (SGR) that the Kenyan government, a few years prior, had spent a superfluous amount of money to build."
                    },
                    {
                        type: "image",
                        src: "/assets/nairobi-street.webp",
                        alt: "A random street in Nairobi"
                    }
                ]
            },
            {
                type: "section",
                title: "The Train Journey",
                content: [
                    {
                        type: "text",
                        content: "With my duffel packed I headed for the train station that was far far away from the CBD. Of course, as most other bourgeoise people are, I was in economy class. Seats in SGR's economy coaches face each other so after a few greetings with the people I was seated with, we all found things to stare at to avoid staring at each other. I chose to look out the window seeing as I was on the window seat."
                    },
                    {
                        type: "image",
                        src: "/assets/nairobi-train-station.webp",
                        alt: "Nairobi Train Station"
                    },
                    {
                        type: "text",
                        content: "It was not a scenic, main character kind of thing because the Perspex window was scratched and seemed to be turning a pale yellow. It made the outside seem distorted and the colours became paler than I was sure they actually were. The guy across from me wore his headphones over the hoodie on his head and was fixated on his phone almost exclusively save for the few times he would look up and start speaking. Everyone would stare at him as though he was crazy until they realized he was speaking to someone over the phone through the headphones."
                    }
                ]
            },
            {
                type: "section",
                title: "Fellow Passengers",
                content: [
                    {
                        type: "text",
                        content: "Next to me was a little girl who sat facing the other aisle where the rest of her family was. It occurred to me that in train travel, it is always best to travel in even numbers less than seven. She kept turning back towards me each time someone needed to pass and whenever we happened to glance at each other, she would smile and look away again. I only saw one man amongst the people she was facing and I assumed he was her father. He was completely asleep for almost the entire trip save for the time he woke up when the hostess came to serve overly priced water and juice that could only be taken with overly crumbly scones."
                    }
                ]
            },
            {
                type: "section",
                title: "Arrival in Mombasa",
                content: [
                    {
                        type: "text",
                        content: "At long last, the announcer, through the distorted radio-esque announcer, informed us we were now approaching Mombasa station. Many began to stand and pull their bags from the overhead storage spaces. Some of the now red-eyed travellers yawned and stretched until the train came to a stop and we got off."
                    },
                    {
                        type: "text",
                        content: "Outside, the breeze was nice but not as strong as I had thought it would be. It was warm for an evening wind but not as warm as I thought it would be. The air was humid but not as humid as I had pictured. The taxi driver who took us to our hotel had a coastal accent but it was not as strong as I thought it would be."
                    }
                ]
            },
            {
                type: "section",
                title: "The Hotel in Mtwapa",
                content: [
                    {
                        type: "text",
                        content: "I arrived at my hotel in Mtwapa. Stepping out of the car, the squishy soft sand on which my shoe landed was a pleasant surprise. It made it real, this coastal trip that I had wanted to go to for so long. The hotel had a Victorian-style architectural style but even in the dim lighting, it was clear the external walls needed a coat of paint. It was old and looked old but I was too tired and it was too late to get another hotel so I chose to sleep in it anyway."
                    },
                    {
                        type: "text",
                        content: "The room was shabby and run down. I sent a picture of it to a friend and his exact words were, \"It looks like an abandoned hospital room.\" The cream and off-white colours made it drabby. The sink had broken in half and the tap looked slightly rusty. The shower only gave off cold water and I was certain the owners imagined that was all we needed with all the 'heat' in the area."
                    }
                ]
            },
            {
                type: "section",
                title: "Exploring Bombolulu",
                content: [
                    {
                        type: "text",
                        content: "I got to town and took a bodaboda to Bombolulu. My Mombasa friends had told me it was the 'affordable' area. The restaurant the bodaboda rider had recommended was on the second floor of a building right at the heart of Bombolulu. The floors above were all hotel rooms. The lighting inside was dim, even though it was midday, and the bulbs seemed incapable of being brighter than they were."
                    },
                    {
                        type: "image",
                        src: "/assets/street-in-bombolulu.webp",
                        alt: "A street in Bombolulu"
                    }
                ]
            },
            {
                type: "section",
                title: "The Reef Hotel",
                content: [
                    {
                        type: "text",
                        content: "We passed through Nyali, the Beverly Hills of Mombasa. The houses were more glass than stone and were opulently large. The high walls were painted white and shimmered in shades of orange from the setting sun. I imagined the perfectly green manicured lawns and water fountains within. What a life it must be when one is so wealthy!"
                    },
                    {
                        type: "text",
                        content: "I arrived at the Reef and I liked the dhow they displayed at the entrance. The bodaboda rider was enchanted by the fish in the little pond next to the gate and he almost forgot to get cash from me. I walked in and the guard wore a strange look. I assumed he must have thought I seemed too young to be there alone and too poor to afford a proper taxi. I walked with my head high nevertheless. Who cares what he thought anyway?"
                    },
                    {
                        type: "image",
                        src: "/assets/reef-hotel-entrance.webp",
                        alt: "The Reef Hotel's Entrance"
                    }
                ]
            },
            {
                type: "section",
                title: "Conclusion",
                content: [
                    {
                        type: "text",
                        content: "The hotel was too expensive and I decided to go back to my bourgeoisie hotel in Bombolulu. On the ride back, I thought about how all we know of everything we never experienced for ourselves is just a narrative. If you have never been to New Zealand, you only know what you have read or heard about it. It seemed to me that I had heard all the whitewashed stuff about Mombasa. In my view, it seemed to me like a regular town with nice things within. And just like anywhere else, only the rich can afford these \"nice\" things."
                    },
                    {
                        type: "text",
                        content: "I returned to good old smoggy Nairobi the next day."
                    }
                ]
            }
        ]
    },

    // From Eve's Substack
    {
        id: "07",
        title: "My conspiracy theory, little new habits and a few podcasts",
        excerpt: "Consider this one a panel made of a tech conspiracy theorist and an African mother who is looking for tips to stay healthy.",
        content: [
            {
                type: "text",
                content: <p>Dear readers</p>
            },
            {
                type: "text",
                content: <p>Recently, I have been obsessed with Trevor Noah's <strong className="text-2l font-bold text-white">"What Now,"</strong> and my favorite episodes are the ones he has with his friends; they are hilarious but also very insightful. In one of the episodes, they talked about TikTok being Banned in the US. That conversation led to one of them talking about how social media algorithms can narrow our perspectives, not just in terms of attention spans but also by reinforcing our existing beliefs. Even if those beliefs are misguided, algorithms keep feeding us similar content, creating echo chambers that limit our exposure to diverse viewpoints. This can lead to unhealthy obsessions and, in some cases, even draw individuals into harmful communities, like the ongoing Twin Flame cult. I delved into research and discovered that social media platforms can inadvertently become magnets for individuals seeking answers to their desperation. Influencers capitalize on this vulnerability, creating communities that seem to offer solace but often lead to further disillusionment, and unfortunately for some, it becomes their demise.</p>
            },
            {
                type: "text",
                content: <div>
                    <p>Despite reflecting on the negative aspects of social media and deciding to quit certain apps, I also decided to embrace some positive habits recommended by social media for 3 months now. Here are a few; hopefully, you will try them too:</p>
                    <ol className="list-decimal pl-6 mt-4 space-y-4">
                        <li>
                            <strong className="text-2l font-bold text-white">Reading a book in the morning sun:</strong> This habit has helped me get out of my longest reading slump. I never looked forward to reading, but it feels much more interesting to sit outside for 30 minutes to 1 hour with a book and a not-so-cold, hot sun appearing. In terms of mood, let me tell YOU, I have never felt better, and it is easy for me to differentiate days where I did that exercise through things like my productivity at work, mood while interacting with others, and many more. Now that I think of it, I should research more on the morning sun and my serotonin levels and how they work together.
                        </li>
                        <li>
                            <strong className="text-2l font-bold text-white">Journaling:</strong> Now, this is controversial, mainly coming from me, but friends, I am a changed woman. Surprisingly, it has become a valuable outlet for my thoughts and ideas, allowing me to declutter my mind and foster self-awareness. I bought a plain green notebook and transformed it into a second brain for my innermost thoughts and reflections. Most importantly, it allows my mind to explore new thoughts and ideas without fear of forgetting. So yeah, kids, buy a notebook and journal; your self-awareness will thank me later.
                        </li>
                        <li>
                            <strong className="text-2l font-bold text-white">Hydrating:</strong> as an ex-professional bloating human, the worst gut health that would land me in a hospital bed at least once in 2 months, I decided to start drinking water, with a minimum of 2 liters and a glass of warm water in the morning. This is not about losing weight but instead about nourishing my body and preventing health issues.
                        </li>
                    </ol>
                </div>
            },
            {
                type: "text",
                content: <div>
                    <p>To conclude, I want to recommend some content that has been enriching my life lately:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-4">
                        <li>
                            <strong className="text-2l font-bold text-white">Trevor Noah's "What Now?"</strong> podcast, especially the episodes featuring his friends, offers witty insights into complex issues.
                        </li>
                        <li>
                            <strong className="text-2l font-bold text-white">Hidden Brain</strong> by Shankar Vedantam is just a collection of topics that you would typically think are shallow, but they have depth to them, and professionals in each field sit down with Mr. Vedantam to discuss them. I have been listening to it since 2020.
                        </li>
                        <li>
                            <strong className="text-2l font-bold text-white">The Kwibuka Podcast,</strong> on the podcast the host discusses the role of different people in the 1994 genocide against the Tutsi in Rwanda. It Is essential to listen to stay educated and combat genocide denial.
                        </li>
                    </ul>
                </div>
            },
            {
                type: "text",
                content: <p className="italic">Anyway, this was where the part of me that can be a conspiracy theorist meets my side that hangs out with African mothers giving each other tips on keeping their skin clear.</p>
            },
            {
                type: "text",
                content: 
                <div>
                    <p className="font-semibold">With Love,</p>
                    <p className="font-semibold">Queen's brain</p>
                </div>
            },
        ]
    },

    // The need to write from PG

    {
        id: "08",
        title: "The Need to Read 📚📚",
        excerpt: "Everyone, young or old needs to read. The time you stop learning is the same time you stop living",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <p>November 2022</p>
                    <br />
                    <p>
                        In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer.
                    </p>
                    <br />
                    <p>
                        That sort of thing is unlikely to happen anytime soon. Not just because it would be hard to build a replacement for reading, but because even if one existed, it would be insufficient. Reading about x doesn't just teach you about x; it also teaches you how to write.
                    </p>
                    <br />
                    <p>
                        Would that matter? If we replaced reading, would anyone need to be good at writing?
                    </p>
                    <br />
                    <p>
                        The reason it would matter is that writing is not just a way to convey ideas, but also a way to have them.
                    </p>
                    <br />
                    <p>
                        A good writer doesn't just think, and then write down what he thought, as a sort of transcript. A good writer will almost always discover new things in the process of writing. And there is, as far as I know, no substitute for this kind of discovery. Talking about your ideas with other people is a good way to develop them. But even after doing this, you'll find you still discover new things when you sit down to write. There is a kind of thinking that can only be done by writing.
                    </p>
                    <br />
                    <p>
                        There are of course kinds of thinking that can be done without writing. If you don't need to go too deeply into a problem, you can solve it without writing. If you're thinking about how two pieces of machinery should fit together, writing about it probably won't help much. And when a problem can be described formally, you can sometimes solve it in your head. But if you need to solve a complicated, ill-defined problem, it will almost always help to write about it. Which in turn means that someone who's not good at writing will almost always be at a disadvantage in solving such problems.
                    </p>
                    <br />
                    <p>
                        You can't think well without writing well, and you can't write well without reading well. And I mean that last "well" in both senses. You have to be good at reading, and read good things.
                    </p>
                    <br />
                    <p>
                        People who just want information may find other ways to get it. But people who want to have ideas can't afford to.
                    </p>
                </div>
            },
            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>08, Novemeber 2022 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2022 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            }
        ]
    },
    
    // End of 2022. From Eve
    {
        id: "09",
        title: "Reflections and Aspirations: Navigating the End of 2022",
        excerpt: "As we wrap up 2022, let's embrace learning, leverage our talents, and seek adventures. This newsletter offers insights on planning for the year ahead, emphasizing personal growth and gratitude.",
        content: [
            {
                type: "text",
                content: <p>Dear readers</p>
            },
            {
                type: "text",
                content: 
                <div>
                    <p>This is a very late newsletter due to unforeseen circumstances.</p>
                    <br />
                    <p>Anyway, Happy New Month. As late as this sounds, I wish you a joyous wrap of the year. Take time to appreciate those around you, and please tell them! Let’s make sure people around us know we love them.</p>
                    <br />
                    <p>As this year ends, I see a lot of content out there cheering us on to plan for next year. I definitely encourage this, too, but since I opened this newsletter mainly to share a gap year experience, I’d like to share a few thoughts on planning the year ahead.</p>
                    <br />
                    <p>Firstly, remember that we are essentially empty vessels. We’ve been in high school for 4-5 years, and for those who experienced a system like mine, there’s a lot our education didn’t cover. I hope that we plan to learn new things that hone our skills. We have a whole year before deciding what to study in university (if that’s your choice), and there’s a wide world to understand. It’s up to us to seek knowledge about the world and its workings and then choose a path to shape us into beings who will build better lives for ourselves and the world. Skills like marketing and coding can take you far, but if you know more, please learn and use them to your advantage. Capitalism is the lemon we shall make lemonades from.</p>
                    <br />
                    <p>Secondly, use what you have. A trending video of Rwandan content creators celebrating 250 stories in Rwanda amazed me. Most are young; some have 9-5 jobs, others are students, and some are taking a gap year. They found their interests and talents and leveraged them to create content. Some, like my role model Murungi Sarah (say hi if you know her), are dedicating more time to it, hopefully building better generations of goal-oriented Africans who will also provide for their future. My biggest hope is that we, the younger generation, work hard to design and work towards lives that bring fulfillment and build our nations.</p>
                    <br />
                    <p>Last but not least, hop on adventures. We are young! As much as I hate saying YOLO, I sometimes subscribe to the idea that I only live once. It’s wise that occasionally, we take adventures and see what the world has to offer. I’m not saying it’s not costly; some adventures are financially consuming. However, I’ve learned that you can do much within your means, so please do! For instance, starting a YouTube channel with just your phone can showcase your passion. I believe we learn more by doing than by planning to do.</p>
                    <br />
                    <p>Above everything else, be grateful. As a Christian, thanking God has recently been crucial in my life. Life happens, for better or worse, but our experiences are testimonies for others. So why not be grateful that my life is a collection of events serving me and others?</p>
                    <br />
                    <p>There is a lot I feel like we should do next year, but I leave it to you to explore more on what you can do with your talents and resources. Leverage all of that to create a life that makes you happy.</p>
                    <br />
                    <p>For the older generations reading this, feel free to share any advice or opinions (even if they are opposing).</p>
                    <br />
                    <p>A few readings and podcasts that have inspired me:</p>
                    <br />
                    <ol className="list-decimal pl-6 mt-4 space-y-4">
                        <li>
                            “Bundle of Trouble (A Humorous Cozy Mystery)”: This book showed me that, no matter how busy we are, if we choose to learn, we can find time.
                        </li>
                        <li>
                            “Escape the victim trap: Raise your standards” | Goal’d in Africa podcast x Zuba Mutesi
                        </li>
                        <li>
                            “How to Shoot Your Shot the Right Way” | Malik Shaffy x Goal’d in Africa
                        </li>
                    </ol>
                    <br />
                    <p>Yes, I listen a lot to Goal’d in Africa!</p>
                    <br />
                    <p>See you in a fortnight!</p>
                </div>
            },

            {
                type: "text",
                content: 
                <div>
                    <p className="font-semibold">With Love,</p>
                    <p className="font-semibold">Queen</p>
                </div>
            },
        ]
    },

    {
        id: "10",
        title: "Trusting Life's Timing: Balancing Gratitude and Aspiration",
        excerpt: "Exploring the delicate balance between appreciating your present moment while nurturing future aspirations, this post delves into creating personal timelines, manifestation, and finding direction in life's journey.",
        content: [
            {
                type: "text",
                content: 
                <div>
                    <p>
                    In this reflection, we're unpacking the delicate balance between appreciating where you are now and still wanting more for yourself in the future. Inspired by personal reflections and insights from therapy, we dive into the real work of trusting life's timing. We touch on some big themes—crafting your own timeline, manifesting your goals, finding direction when you feel lost, and the beauty of life's little "side quests."
                    </p>
                    <br />
                    <h2 className="text-2xl font-bold text-white mb-4 pl-16">How to Create Your Own Timeline</h2>
                    <h3 className="text-2l font-bold text-white mb-4">Free Yourself from External Pressures</h3>
                    <p>
                    One of the keys to finding contentment is living life on your own schedule. Not the one society, your family, or social media says you should follow. This means focusing on what truly makes you happy and brings you peace, instead of chasing after milestones or deadlines just because you think you should hit them by a certain age.
                    </p>
                    <br />
                    <h3 className="text-2l font-bold text-white mb-4">Embrace Your Unique Timing</h3>
                    <p>
                    You may not always hit your goals when you planned to, but I promise those delays usually work in your favor. Looking back at what my 16-year-old self wanted, I realize how limited my perspective was back then. But that phase was important—it helped set me up for a future filled with even more opportunities and experiences than I could have imagined.
                    </p>
                    <br />
                    <h2 className="text-2xl font-bold text-white mb-4 pl-16">Manifesting in Alignment with Your Timing</h2>
                    <h3 className="text-2l font-bold text-white mb-4">Getting Your Feelings and Goals on the Same Page</h3>
                    <p>
                    When it comes to manifestation, we often talk about putting energy into what we want. But there's another part to it that's tricky—aligning how we feel with what we're trying to manifest. It's hard to call in financial stability, for example, when you're feeling stressed about money. So, how do you feel at peace with where you are now while still aiming for more? That's the sweet spot for manifestation.
                    </p>
                    <br />
                    <h3 className="text-2l font-bold text-white mb-4">Aligned Action: The Key to Manifestation</h3>
                    <p>
                    Of course, it's not just about thinking positive thoughts. Manifestation requires action. Whether it's taking a course to gain new skills or making a savings plan for your big move, those tangible steps are what transform dreams into reality. It's all about putting yourself in a position to receive what you're working toward.
                    </p>
                    <br />
                    <h2 className="text-2xl font-bold text-white mb-4 pl-16">Regaining Direction When You Feel Off-Track</h2>
                    <h3 className="text-2l font-bold text-white mb-4">Dealing with Life's Detours</h3>
                    <p>
                    Let's be real—life doesn't always go as planned, and when you feel off-track, it's easy to spiral. That's why I introduced the "Now What?" theory. Picture yourself having exactly what you're longing for, and answer the question "Now What?"
                    </p>
                    <p>
                    Instead of getting stuck in the feeling of "I don't know what's next," this mindset shift helps you recognize your past accomplishments and use them as fuel to figure out what comes next. It's about keeping your momentum, even when things don't look exactly how you thought they would.
                    </p>
                    <br />
                    <h3 className="text-2l font-bold text-white mb-4">Turning Longing into Anticipation</h3>
                    <p>
                    Rather than sitting in the frustration of longing for something you haven't achieved yet, I encourage you to see it as preparation. When you shift your mindset to view the waiting period as part of the journey, you can actually get excited about what's coming—even if it feels far off.
                    </p>
                    <br />
                    <h3 className="text-2l font-bold text-white mb-4">Focusing on the Process, Not the Destination</h3>
                    <p>
                    I'm a big believer that life is more about the journey than the destination. When you focus on growth and who you're becoming rather than just what you're achieving, you unlock a deeper sense of joy and fulfillment. Life is random, filled with unexpected twists and turns, and honestly, that's what makes it interesting.
                    </p>
                    <br />
                    <h2 className="text-2l font-bold text-white mb-4">Letting Go of Society's Deadlines</h2>
                    <p>
                    Societal pressure tells us that we need to hit certain milestones by a specific age, and if we don't, we've somehow fallen behind. But here's the thing—these timelines are based on the actions of prior generations that had fewer options, which led to earlier achievements. Our generation has more opportunities, but that can also feel overwhelming. Trusting your own timeline instead of society's expectations can help you feel more at peace with where you are right now.
                    </p>
                    <br />
                    <p>
                    I encourage you to appreciate the beauty of your individual journey. Life's path isn't always a straight line, and that's okay. By trusting your timing, aligning your actions with your goals, and celebrating the process of becoming, you can find the balance between gratitude for where you are and aspiration for what's next.
                    </p>
                </div>
            },
            {
                type: "text",
                content: 
                <div> 
                    <p style={{ color: '#10B981', textAlign: 'right', fontWeight: 600 }}>26, December 2024 &copy; Queen</p> 
                    <footer className="mt-8 text-sm text-white/60">
                        <p>&copy; 2024 Queen Merveille. All rights reserved.</p>
                    </footer>
                </div>
            }
        ]
    }

    // {
    //     id: "06",
    //     title: "My Journey to College",
    //     excerpt: "As a high school senior, the college application process has been both exciting and challenging...",
    //     content: "As a high school senior, the college application process has been both exciting and challenging. From researching universities to writing personal statements, each step has been a learning experience. I've discovered so much about myself and my aspirations along the way. The late nights spent perfecting essays and the anxious moments waiting for decisions have all been part of this transformative journey. Through it all, I've learned the importance of perseverance, self-reflection, and staying true to my passions. This blog post delves into my personal experiences, the lessons I've learned, and advice for fellow students embarking on their own college application journeys."
    // },


    // {
    //     id: "06",
    //     title: "Leadership in High School",
    //     excerpt: "Taking on leadership roles in various school clubs has taught me valuable lessons about teamwork...",
    //     content: "Taking on leadership roles in various school clubs has taught me valuable lessons about teamwork, responsibility, and personal growth. As president of the debate club and captain of the robotics team, I've faced challenges that have pushed me out of my comfort zone. From organizing events to motivating team members, each experience has contributed to my development as a leader. I've learned the importance of effective communication, delegation, and leading by example. This post explores the highs and lows of student leadership, offering insights into how these experiences have shaped my character and prepared me for future challenges in college and beyond."
    // },
];

const BlogPost = ({ post, isExpanded, onToggle }) => {
    const renderContent = (content) => {
        if (React.isValidElement(content)) {
            return content;
        }
        if (typeof content === 'string') {
            return <p className="text-white/60 mb-4">{content}</p>;
        }
        if (Array.isArray(content)) {
            return content.map((item, index) => {
                if (item.type === 'section') {
                    return (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                            {renderContent(item.content)}
                        </div>
                    );
                } else if (item.type === 'text') {
                    return (
                        <div key={index} className="text-white/60 mb-4">
                            {renderContent(item.content)}
                        </div>
                    );
                } else if (item.type === 'image') {
                    return (
                        <div key={index} className="mb-4 flex flex-col items-center">
                            <div className="relative w-full max-w-[700px] aspect-[7/8]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-white/60 text-sm mt-2 italic">{item.alt}</p>
                        </div>
                    );
                }
                return null;
            });
        }
        return null;
    };

    return (
        <div className="flex-1 flex flex-col justify-center gap-6 group">
            <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {post.id}
                </div>
                <button 
                    onClick={onToggle}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                </button>
            </div>
            <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {post.title}
            </h2>
            {isExpanded ? renderContent(post.content) : <p className="text-white/60">{post.excerpt}</p>}
            {!isExpanded && (
                <button 
                    onClick={onToggle}
                    className="text-accent hover:underline"
                >
                    Continue reading
                </button>
            )}
            <div className="border-b border-white/20 w-full"></div>
        </div>
    );
};


const Blogs = () => {
    const [expandedPost, setExpandedPost] = useState(null);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
                    }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">My Blog</h1>
                    {/* <p className="text-white/60">
                        Welcome to my blog! Here, I share my travel experiences and personal reflections,
                        offering unique perspectives on the places I visit and the people I meet. Each post
                        is a journey through different landscapes, cultures, and personal growth.
                    </p> */}
                    <p>
                    Welcome to my blog! Here, I share my thoughts on everything from technology to social transformation, sprinkled with personal stories of growing up in Rwanda. Through my writing, I explore diverse perspectives on culture, education, travel, and the evolving world around us. Each post is a journey through different landscapes of ideas, experiences, and personal growth, all seen through the lens of a young African dreamer.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
                    }}
                    className={`grid ${expandedPost ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-x-[60px] gap-y-[22px]`}
                >
                    {blogPosts.map((post) => (
                        <BlogPost 
                            key={post.id}
                            post={post}
                            isExpanded={expandedPost === post.id}
                            onToggle={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;