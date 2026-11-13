const menu = document.getElementById("menubtn");
const links = document.getElementById("navlinks");
const enquiryForm = document.getElementById("enquiryForm");

if (menu && links) {
  menu.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
}

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const subject = encodeURIComponent(
      "P Cube Fitness Website Enquiry - " + formData.get("interest")
    );
    const body = encodeURIComponent(
      [
        "Name: " + formData.get("name"),
        "Phone: " + formData.get("phone"),
        "Email: " + (formData.get("email") || "Not provided"),
        "Interest: " + formData.get("interest"),
        "Preferred location: " + formData.get("location"),
        "Message: " + (formData.get("message") || "None"),
      ].join("\n")
    );

    window.location.href =
      "mailto:info@pcubefitness.com?subject=" + subject + "&body=" + body;
  });
}
