/* THEME TOGGLE */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* TERMINAL EFFECT */
const terminalText = [
  "Initializing portfolio...",
  "Access granted ✔",
  "Welcome, I'm Md Aminul Islam",
  "Junior Penetration Tester"
];

let i = 0;
const terminal = document.getElementById("terminal");

function typeTerminal() {
  if (i < terminalText.length) {
    terminal.innerHTML += terminalText[i] + "<br>";
    i++;
    setTimeout(typeTerminal, 700);
  }
}

typeTerminal();

/* EMAILJS */
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(
    () => {
      alert("Message sent successfully!");
      this.reset();
    },
    () => {
      alert("Failed to send message ❌");
    }
  );
});

