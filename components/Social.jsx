import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/queen-merveille-6535952a6/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/_q.merveille?igsh=a2todmV5NDM5Zm0z" },
    { icon: <FaTwitter />, path: "https://twitter.com/your-username" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
