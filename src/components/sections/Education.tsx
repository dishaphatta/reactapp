// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { education } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TStudy } from "../../types";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard: React.FC<{ index: number } & TStudy> = ({
    index,
    name,
    description,
    tags,
}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={education[index].date}
            iconStyle={{ background: education[index].iconBg }}
            icon={
                <div className="flex h-full w-full items-center justify-center">
                    <img
                        src={education[index].icon}
                        alt={education[index].name}
                        className="h-[60%] w-[60%] object-contain"
                    />
                </div>
            }
        >
            <div className="mt-5">
                <h3 className="text-[24px] font-bold text-white">{name}</h3>
                <p className="text-[secondary] mt-2 text-[20px] italic">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </VerticalTimelineElement>
    );
};

const Education = () => {
    return (
        <>
            <Header useMotion={true} {...config.sections.education} />

            <div className="flex w-full">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
                >
                    {config.sections.education.content}
                </motion.p>
            </div>

            <div className="flex w-full">
                <VerticalTimeline layout="1-column-left">
                    {education.map((education, index) => (
                        <EducationCard key={`education-${index}`} index={index} {...education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
