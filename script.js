
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
    goodReads: {
        label: "Goodreads",
        icon: "bookmark",
        url: "https://www.goodreads.com/user/show/31514343-sasha",
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

// eslint-disable-next-line no-undef
feather.replace({ width: 30, height: 30, "stroke-width": 1 });
