var skills = document.querySelectorAll(".about");
skills = skills[skills.length - 2];

var skill_data = [
  {
    title: "Tools",
    list: [
      "Git",
      "GitHub",
      "GitLab",
      "Linux",
      "Arduino",
      "Blender",
      "Bootstrap",
      "FireBase",
      "Visual Studio",
      "Visual Studio Code",
      "Figma",
      "Eclipse",
      "Replit",
      "Postman",
      "Azure",
      "Raspberry PI",
      "Anaconda",
      "Windows",
      "GMail",
      "LinkedIn",
      "npm",
      "Stack Overflow",
      "Scikit-learn",
      "GitHub Actions",
      "Discord",
    ],
    link: "https://skillicons.dev/icons?i=git,github,gitlab,linux,arduino,autocad,blender,bootstrap,firebase,visualstudio,vscode,figma,eclipse,replit,postman,azure,raspberrypi,anaconda,windows,gmail,linkedin,npm,stackoverflow,sklearn,githubactions,discord",
    icon_name: "build",
  },
  {
    title: "Programming Languages & Frameworks",
    list: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "HTML5",
      "CSS3",
      "ReactJS",
      "NextJS",
      "Flutter",
      "TailwindCSS",
      "ExpressJS",
      "NodeJS",
      "MaterialUI",
      "Bash",
      "TensorFlow",
      "PyTorch",
    ],
    link: "https://skillicons.dev/icons?i=c,cpp,py,java,js,html,css,react,next,flutter,tailwind,express,nodejs,materialui,bash,tensorflow,pytorch",
    icon_name: "subtitles",
  },
];

for (let i = 0; i < skill_data.length; i++) {
  let html = `<div class="about">` + `<div class="skill-list"><i class="material-icons" style="font-size: xl;">${skill_data[i].icon_name}</i><h2> ${skill_data[i].title}</h2>`;
  html += `<p align="center"><img alt="${skill_data[i].title}" src = "${skill_data[i].link}"></p>`;

  if (i % 2 == 0) {
    for (let j = 0; j < skill_data[i].list.length; j++) {
      html += `
      <div class="skill">
          <tag>${skill_data[i].list[j]}</tag>
      </div>
      `;
    }
  } else {
    for (let j = 0; j < skill_data[i].list.length; j++) {
      html += `
      <div class="skill">
          <chip>${skill_data[i].list[j]}</chip>
      </div>
      `;
    }
  }

  html += `</div></div>`;
  skills.insertAdjacentHTML("afterend", html);
}