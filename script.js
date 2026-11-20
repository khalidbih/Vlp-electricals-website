console.log("VLP Electricals Ltd website is connected!");

const services = {
  installations: {
    title: "Electrical Installations",
    description:
      "Professional electrical installations for homes and businesses.",
  },

  repairs: {
    title: "Electrical Repairs",
    description:
      "Help with faulty electrical equipment, damaged wiring and electrical problems.",
  },

  "fault-finding": {
    title: "Fault Finding",
    description:
      "Identifying electrical faults, investigating tripping circuits and locating problems.",
  },

  lighting: {
    title: "Lighting Installation",
    description: "Installation and replacement of indoor and outdoor lighting.",
  },

  maintenance: {
    title: "Electrical Maintenance",
    description:
      "Electrical maintenance to help keep your electrical systems safe and reliable.",
  },

  rewiring: {
    title: "Rewiring",
    description:
      "Older or deteriorating wiring may need inspection and replacement. Warning signs can include frequently tripping circuit breakers, flickering lights and outdated wiring systems.",
  },

  "fuse-board": {
    title: "Fuse Board Replacement",
    description:
      "Replacement of outdated fuse boards with suitable modern consumer units.",
  },
};

// Find the service buttons and description container

const serviceButtons = document.querySelectorAll(".service-button");

const serviceDetails = document.querySelector("#service-details");

// Add a click event to every service button

if (serviceButtons.length === 0 || !serviceDetails) {
  console.error("Service buttons or service details container not found.");
}

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedService = button.dataset.service;

    const service = services[selectedService];

    if (!service) {
      console.error("Service not found:", selectedService);
      return;
    }

    const heading = document.createElement("h3");
    heading.textContent = service.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = service.description;

    serviceDetails.replaceChildren(heading, paragraph);
  });
});
