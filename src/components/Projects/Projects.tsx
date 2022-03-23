
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import maskedImage from "../../assets/masked_image.png";
import clubhouseImage from "../../assets/clubhouse_image.png";
import zaimImage from "../../assets/zaim_image.png";
import parserImage from "../../assets/parser_image.png";

import "./Projects.scss";

type ProjectsProps={
  ref:any;
}
const Projects: FC<ProjectsProps> =React.forwardRef<HTMLDivElement> ((ref,props)=> {
  const { t } = useTranslation();
  const projects = [
    {
      id: 0,
      project_title: "Masked Chat",
      project_description: t("projects.project_description.0"),
      project_stack: t("projects.project_stack.0"),
      project_type: "pet",
      img: maskedImage,
      project_path: "https://github.com/snobou12/masked-chat",
    },
    {
      id: 1,
      project_title: "Clubhouse",
      project_description: t("projects.project_description.1"),
      project_stack: t("projects.project_stack.1"),
      project_type: "pet",
      img: clubhouseImage,
      project_path: "https://github.com/snobou12/clubhouse-clone",
    },
    {
      id: 2,
      project_title: "Zaim Turbo",
      project_description: t("projects.project_description.2"),
      project_stack: t("projects.project_stack.2"),
      project_type: "prod",
      img: zaimImage,
      project_path: "https://github.com/snobou12/lastWork_1",
    },
    {
      id: 3,
      project_title: "Parser Panel",
      project_description: t("projects.project_description.3"),
      project_stack: t("projects.project_stack.3"),
      project_type: "prod",
      img: parserImage,
      project_path: "https://github.com/snobou12/parser-panel",
    },
  ];
  const [showProject, setShowProject] = React.useState<number>(0);
  return (
    <div ref={props} className="projects">
      <div className="projects__title">{t("projects.title")}</div>
      <div className="projects__description">{t("projects.description")}</div>
      <div className="projects__content">
        <div className="projects__navigation">
          {projects.map((project, idx) => (
            <div
              onClick={() => setShowProject(project.id)}
              key={`${project.id}:${idx}`}
              className={`projects__navigation_item ${
                project.id === showProject && "projects__navigation_item--active"
              }`}
            >
              {project.project_title}
            </div>
          ))}
        </div>
        <div className="projects_project">
          <div className="project__about">
            <div className="project__title">
              {projects[showProject].project_title}
              <span>
                {projects[showProject].project_type === "pet"
                  ? "(Pet Project)"
                  : "(Production Project)"}
              </span>
            </div>
            <div className="project__stack">
              {projects[showProject].project_stack}
            </div>
            <div className="project__description">
              {projects[showProject].project_description}
            </div>
          </div>

          <div className="project__content_preview">
            <img src={projects[showProject].img} alt="project_image" />
            <button
              onClick={() => window.open(projects[showProject].project_path)}
            >
              {t("projects.button_text")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
