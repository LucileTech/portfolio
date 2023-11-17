import React from "react";

type StackProps = {
  theme: string;
};

const Stack: React.FC<StackProps> = ({ theme }) => {
  const hexagonRows = [
    [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Handlebars",
      "Bootstrap",
      "Canvas",
    ],
    [
      "Sentry",
      "Postman",
      "MongoDB",
      "JSON",
      "REST API",
      "NoSQL",
      "Node.js",
      "Express",
    ],
    [
      "Prisma",
      "Git",
      "GitLab",
      "GitHub",
      "PhotoShop",
      "Figma",
      "VSCode",
      "Slack",
    ],
    [
      "Trello",
      "OOP",
      "Docker",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "React Native",
      "SQL",
    ],
    [
      "Python",
      "Google Cloud Platform",
      "Vertex AI",
      "Notebook",
      "Machine Learning",
      "Big Query",
      "Sentiment Analysis",
      "Next.js",
    ],
  ];

  return (
    <div className="Stack-entire" id="stackSection">
      <h2 className="Section-title">MY TECH STACK</h2>

      <div className="honeycomb">
        {hexagonRows.map((row, rowIndex) => (
          <div className="ibws-fix" key={rowIndex}>
            {row.map((tech, techIndex) => (
              <div className="hexagon" key={techIndex}>
                <div
                  className={`hexagontent${
                    [
                      "JavaScript",
                      "HTML",
                      "CSS",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Git",
                      "GitHub",
                      "SQL",
                    ].includes(tech)
                      ? " bold"
                      : ""
                  }`}
                >
                  {tech}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
