document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.style.display = navLinks.classList.contains("active")
      ? "block"
      : "none";
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });

  // Close menu when clicking a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    });
  });

  // Add close button functionality
  const closeBtn = document.querySelector(".nav-close");
  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });

  // Toggle dropdowns in game cards
  document.querySelectorAll(".btn-toggle").forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle active class on button
      this.classList.toggle("active");

      // Get the associated dropdown content
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("active");

      // Close other dropdowns in the SAME card only
      const currentCard = this.closest(".game-buttons");
      currentCard.querySelectorAll(".btn-toggle").forEach((otherButton) => {
        if (otherButton !== this) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.classList.remove("active");
        }
      });

      // Load content if not already loaded
      if (!dropdownContent.innerHTML.trim()) {
        const contentType = this.dataset.content;
        let content = "";

        if (contentType.includes("rules")) {
          content = getRulesContent(this.closest(".game-card").dataset.event);
        } else if (contentType.includes("time")) {
          content = getTimeDateContent(
            this.closest(".game-card").dataset.event
          );
        } else if (contentType.includes("labs")) {
          content = getLabsContent(this.closest(".game-card").dataset.event);
        }

        dropdownContent.innerHTML = content;
      }
    });
  });
});

// Dummy content retrieval functions (replace with your actual logic)
function getRulesContent(eventName) {
  switch (eventName) {
    case "project":
      return `• Team size: 2-4 members
• Project must be original
• Live demo required
• Tech stack: Any modern framework
• Documentation mandatory`;
    case "coding":
      return `• Individual participation only
• Three rounds: MCQ, Coding, DSA
• Languages: C++, Java, Python
• No external libraries allowed
• Time limit strictly enforced`;
    case "neoncricket":
      return `• 5 players per team
• 4 overs per match
• Played in dark room with neon equipment
• Special scoring rules apply
• Safety equipment mandatory`;
    case "roadies":
      return `• Teams of 2 members
• Multiple elimination rounds
• Physical and mental challenges
• Fair play rules enforced
• Registration deadline strict`;
    case "aiprompting":
      return `• Individual participation
• Three creative rounds
• Time limits per prompt
• Original content only
• Tools provided by organizers`;
    case "stumbleguys":
      return `• Single player tournament
• No mods or cheats allowed
• Multiple elimination rounds
• Fair play monitored
• Winners advance to finals`;
    default:
      return "Rules not available for this event.";
  }
}

function getTimeDateContent(eventName) {
  const dates = {
    project: "March 15, 2024",
    coding: "March 16, 2024",
    neoncricket: "March 17, 2024",
    roadies: "March 18, 2024",
    aiprompting: "March 19, 2024",
    stumbleguys: "March 20, 2024",
  };

  return `Date: ${dates[eventName]}
Time: 10:00 AM - 4:00 PM
Registration Deadline: March 10
Venue: Check Lab Assignment`;
}

function getLabsContent(eventName) {
  const venues = {
    project: "Innovation Lab",
    coding: "Computer Lab 2",
    neoncricket: "Indoor Sports Room",
    roadies: "College Ground",
    aiprompting: "AI Research Lab",
    stumbleguys: "Gaming Arena",
  };

  return `Venue: ${venues[eventName]}
Systems: Latest Configuration
Software: Pre-installed
Internet: Available
Support: Technical team on-site`;
}
