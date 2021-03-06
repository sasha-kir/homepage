import houseLogo from "./images/house-logo.svg";
import ladaLogo from "./images/lada-logo.png";
import carrotLogo from "./images/carrot-logo.png";

export const networksData = {
    github: {
        label: "Github",
        icon: "github",
        url: "https://github.com/sasha-kir/",
    },
    resume: {
        label: "CV",
        icon: "file-text",
        url: "http://sasha-kir.com/cv",
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

export const projectsData = {
    houseExplorer: {
        name: "house explorer",
        logo: houseLogo,
        url: "https://sasha-kir.com/house-explorer/",
        description: "A web app for exploring Russian residential architecture",
        isMain: true,
    },
    hungryVegan: {
        name: "hungry vegan",
        logo: carrotLogo,
        url: "https://sasha-kir.com/hungry-vegan/",
        description: "A web app for lists of places with tasty food",
    },
    avtovaz: {
        name: "avtovaz",
        logo: ladaLogo,
        url: "https://sasha-kir.com/avtovaz/",
        description: "A website about classic AvtoVAZ cars",
    },
};
