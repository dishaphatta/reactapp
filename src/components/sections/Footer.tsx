import type React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { socialLink } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TSocialLink } from "../../types";

const FooterCard: React.FC<{ index: number } & TSocialLink> = ({
    name,
    href,
    image,
    index,
}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <a href={href} target="_blank" rel="noopener noreferrer" className="m-2">
                <button className="text-white text-[20px] font-bold">
                    <img
                        src={image}
                        alt={`icon-${name}`}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </button>
            </a>
        </motion.div>
    );
};

const Footer: React.FC = () => {
    return (
        <>
            <Header useMotion={true} {...config.sections.footer} />

            <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary text-center">
                {config.sections.footer.content}
            </motion.div>

            {/* Centering the buttons */}
            <div className="mt-10 flex flex-wrap gap-7 justify-center items-center">
                {socialLink.map((link, index) => (
                    <FooterCard key={link.name} index={index} {...link} />
                ))}
            </div>

            {/* Copyright and Contact Info */}
            <div className="mt-10 text-center text-white text-[14px] font-semibold">
                <p>📞 Contact: +1(646)457-1164</p>
                <p>© 2025 Disha Phatta. All rights reserved.</p>
            </div>
        </>
    );
};

export default SectionWrapper(Footer, "footer");
