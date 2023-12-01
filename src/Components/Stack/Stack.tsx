import React from "react";

type StackProps = {
  theme: string;
};

const Stack: React.FC<StackProps> = ({ theme }) => {
  const hexagonRowsFront = [
    [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Handlebars",
      "Bootstrap",
      "Canvas",
      "Figma",
      "Next.js",
    ],
  ];
  const hexagonRowsBack = [
    [
      "Sentry",
      "Postman",
      "MongoDB",
      "JSON",
      "REST API",
      "NoSQL",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Python",
      "SQL",
    ],
  ];

  const hexagonRowsAIML = [
    [
      "Google Cloud Platform",
      "Vertex AI",
      "Notebook",
      "Machine Learning",
      "Big Query",
      "Sentiment Analysis",
    ],
  ];

  const hexagonRowsOther = [
    [
      "Prisma",
      "Git",
      "GitLab",
      "GitHub",
      "VSCode",
      "OOP",
      "Docker",
      "Jest",
      "React Testing Library",
      "React Native",
    ],
  ];

  return (
    <div className="Stack-entire" id="stackSection">
      <h2 className="Section-title">MY TECH STACK</h2>
      <h3 className="Section-subtitle"> </h3>
      <div className="honeycomb">
        {hexagonRowsFront.map((row, rowIndex) => (
          <div className="ibws-fix" key={rowIndex}>
            {row.map((tech, techIndex) => (
              <div className="hexagon" key={techIndex}>
                <div
                  className={`hexagontent`}
                  // ${
                  //   [
                  //     "JavaScript",
                  //     "HTML",
                  //     "CSS",
                  //     "Node.js",
                  //     "Express",
                  //     "MongoDB",
                  //     "Git",
                  //     "GitHub",
                  //     "SQL",
                  //   ].includes(tech)
                  //     ? " bold"
                  //     : ""
                  // }
                  // `}
                >
                  {tech}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="Section-subtitle"> </h3>
      <div className="honeycomb">
        {hexagonRowsBack.map((row, rowIndex) => (
          <div className="ibws-fix" key={rowIndex}>
            {row.map((tech, techIndex) => (
              <div className="hexagon" key={techIndex}>
                <div className={`hexagontent`}>{tech}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="Section-subtitle"> </h3>
      <div className="honeycomb">
        {hexagonRowsAIML.map((row, rowIndex) => (
          <div className="ibws-fix" key={rowIndex}>
            {row.map((tech, techIndex) => (
              <div className="hexagon" key={techIndex}>
                <div className={`hexagontent`}>{tech}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="Section-subtitle"> </h3>
      <div className="honeycomb">
        {hexagonRowsOther.map((row, rowIndex) => (
          <div className="ibws-fix" key={rowIndex}>
            {row.map((tech, techIndex) => (
              <div className="hexagon" key={techIndex}>
                <div className={`hexagontent`}>{tech}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
