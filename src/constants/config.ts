type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    education: Required<TSection>;
    footer: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Disha Phatta — Portfolio",
    fullName: "Disha Phatta",
    email: "dishaphatta@gmail.com",
  },
  hero: {
    name: "Disha Phatta",
    p: ["I Design and Implement Cybersecurity Solutions | Expert in System Protection, Threat Analysis, and Risk Management"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a skilled Cybersecurity and IT professional with expertise in coding, system security, and software development. Proficient in Python, JavaScript, and advanced security protocols, I design and implement secure, scalable solutions. Whether it's building user-friendly applications, developing robust security measures, or optimizing IT systems, I offer comprehensive expertise to solve complex digital challenges. Let’s collaborate to build secure, efficient, and impactful digital experiences.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. It reflects my ability to solve complex problems,
    work with different technologies,
    and manage projects effectively.`,
    },
    education: {
      p: "My Academic Journey so far",
      h2: "Education & Training.",
      content: ``,
    },
    footer: {
      p: "",
      h2: "",
      content: "",
    },
  },
};
