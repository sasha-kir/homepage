import feather from "feather-icons";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons/faJsSquare";
import "flag-icon-css/css/flag-icon.css";

import userpic from "./images/sasha.png";
import houseLogo from "./images/house-logo.svg";
import ladaLogo from "./images/lada-logo.png";
import carrotLogo from "./images/carrot-logo.png";
import "./style.css";

library.add(faPython, faJsSquare);
dom.watch();

const userpicContainer = document.getElementById("userpic");
const userpicImage = document.createElement("img");
userpicImage.src = userpic;
userpicImage.alt = "profile photo";
userpicContainer.appendChild(userpicImage);

const networksData = {
    github: {
        label: "Github",
        icon: "github",
        url: "https://github.com/sasha-kir/",
    },
    resume: {
        label: "CV",
        icon: "file-text",
        url: "http://sasha-kir.ddns.net/cv",
    },
    email: {
        label: "Email",
        icon: "mail",
        url: "mailto:sashaakir@yandex.com?subject=Hi%20Sasha",
    },
    linkedIn: {
        label: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/alexander-k-307466189/",
    },
};

const projectsData = {
    houseExplorer: {
        name: "house explorer",
        logo: houseLogo,
        url: "https://sasha-kir.ddns.net/house-explorer/",
        description: "A web app for exploring Russian residential architecture",
        isMain: true,
    },
    avtovaz: {
        name: "avtovaz",
        logo: ladaLogo,
        url: "https://sasha-kir.ddns.net/avtovaz/",
        description: "A website about classic AvtoVAZ cars",
    },
    hungryVegan: {
        name: "hungry vegan",
        logo: carrotLogo,
        url: "https://github.com/sasha-kir/hungry-vegan",
        description: "WIP: A web app for vegans to find food",
    },
};

const networksContainer = document.getElementById("social-networks");

Object.keys(networksData).forEach((key) => {
    const network = networksData[key];

    const icon = document.createElement("i");
    icon.setAttribute("data-feather", network.icon);

    const link = document.createElement("a");
    link.appendChild(icon);
    link.classList.add("social-link");
    link.setAttribute("href", network.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    const tooltipText = document.createTextNode(network.label);
    tooltip.appendChild(tooltipText);

    const button = document.createElement("button");
    button.classList.add("social-btn");
    button.setAttribute("aria-label", network.label);
    button.appendChild(link);
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
    const projectLink = document.createElement("a");
    projectLink.setAttribute("href", project.url);
    projectLink.setAttribute("target", "_blank");
    projectLink.setAttribute("rel", "noopener noreferrer");
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
