import feather from "feather-icons";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons/faJsSquare";

import userpic from "./images/sasha.png";
import { networksData, projectsData } from "./data";
import "./style.css";

library.add(faPython, faJsSquare);
dom.watch();

const userpicContainer = document.getElementById("userpic");
const userpicImage = document.createElement("img");
userpicImage.src = userpic;
userpicImage.alt = "profile photo";
userpicContainer.appendChild(userpicImage);

const createLink = (url) => {
    const link = document.createElement("a");
    Object.assign(link, {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
    });
    return link;
};

const networksContainer = document.getElementById("social-networks");

Object.keys(networksData).forEach((key) => {
    const network = networksData[key];

    const icon = document.createElement("i");
    icon.setAttribute("data-feather", network.icon);

    const networkLink = createLink(network.url);
    networkLink.appendChild(icon);
    networkLink.classList.add("social-link");

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = network.label;

    const button = document.createElement("button");
    button.classList.add("social-btn");
    button["aria-label"] = network.label;
    button.appendChild(networkLink);
    button.appendChild(tooltip);
    networksContainer.appendChild(button);
});

const projectsContainer = document.getElementById("projects");

Object.keys(projectsData).forEach((key) => {
    const project = projectsData[key];

    const projectLogo = document.createElement("img");
    projectLogo.src = project.logo;
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("project-logo");
    logoContainer.appendChild(projectLogo);

    const label = document.createElement("span");
    label.textContent = project.name;
    const projectLink = createLink(project.url);
    projectLink.appendChild(label);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("project-name");
    nameContainer.appendChild(projectLink);

    const description = document.createElement("div");
    description.classList.add("project-description");
    description.textContent = project.description;

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("project-content");
    contentContainer.appendChild(nameContainer);
    contentContainer.appendChild(description);

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    if (project.isMain) projectCard.classList.add("main");
    projectCard.appendChild(logoContainer);
    projectCard.appendChild(contentContainer);

    projectsContainer.appendChild(projectCard);
});

feather.replace({ width: 30, height: 30, "stroke-width": 1 });
