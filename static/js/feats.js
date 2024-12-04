var feats = document.querySelector(".feat-list");

var feat_list = [
  {
    title: "EvoLUMIN ACM 2024 Grand Finale Shortlisting",
    src: "https://media.licdn.com/dms/image/v2/D5622AQEIGKinHeUNLg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1730097918009?e=1735776000&v=beta&t=AyMF_6puGreh1j6t8V2ydoOBQ7AnDTZk4TPZMksRSXk",
    tags: ["Hackathon", "IoT", "Arduino", "Raspberry Pi", "Healthcare"],
    context:
      "Shortlisted for the Grand Finale of EvoLUMIN ACM 2024, a national-level hackathon, for developing the Remote Health Care Monitoring System using Arduino Nano 33 IoT and Raspberry Pi for real-time monitoring of vital health parameters.",
    cred: "https://devfolio.co/projects/remote-health-care-monitoring-system-5c42",
  },
  {
    title: "Top 125 Ideas in ThingQbator Cohort 7",
    src: "https://th.bing.com/th/id/OIP.7xh4FYRL6ua4KJbgBB-ZhgHaEH?w=328&h=182&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    tags: ["ThingQbator", "Innovation", "HealthTech", "Women", "Emergency Response"],
    context:
      "Selected among the Top 125 ideas in ThingQbator Cohort 7 for HealthyHer (health and wellness app for women) and ResQLink (smart emergency response system).",
    cred: "",
  },
  {
    title: "Google Solutions Challenge 2023 Regional Level Bootcamp Shortlisting",
    src: "https://media.licdn.com/dms/image/v2/D5622AQEJB5lM1pN2Rg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706628335226?e=1735776000&v=beta&t=NWtBa22cilqEqHJZf0WfgDqlafZ6n6hbFF7NG6saGNk",
    tags: ["Google", "Sustainability", "Flight Efficiency", "Bootcamp", "Innovation"],
    context:
      "Shortlisted for Google's Solutions Challenge All India (Regional) level bootcamp 2023 with a solution to enhance flight efficiency and sustainable development by minimizing emissions and maximizing fuel efficiency.",
    cred: "https://github.com/Keerthivasan-Venkitajalam/flight-efficiency",
  },
  {
    "title": "ANOKHA 2024",
    "src": "https://media.licdn.com/dms/image/v2/D5622AQEsp8sPKIbU3Q/feedshare-shrink_800/feedshare-shrink_800/0/1729432136375?e=1735776000&v=beta&t=wkb4c3a76NoMVYvenikqvsl0yQnpXeenuoqUrLB78Os",
    "tags": ["Remote Healthcare", "IoT", "Innovation", "Tech Fair", "Exhibition"],
    "context": 
      "Our team, Nurtura, had the opportunity to showcase our Remote Healthcare Monitoring System at the Anokha Tech Fair / Exhibitions. We were among the top 30 projects shortlisted from numerous submissions, including those from various Amrita campuses and other universities.",
    "cred": "https://github.com/Keerthivasan-Venkitajalam/remote-healthcare-monitoring"
  },
 {
    "title": "Eureka! Pitching Competition 2024",
    "src": "https://media.licdn.com/dms/image/v2/D5622AQFtYlE9XJjNZA/feedshare-shrink_800/feedshare-shrink_800/0/1728732483109?e=1735776000&v=beta&t=090_ssD1RpA17AbHyyFdq0QNG8dhjVdwQ8JUADovaX8",
    "tags": ["Health Tech", "AI", "Women Empowerment", "Startup", "Pitching Competition"],
    "context": " I presented our idea, HealthyHer by Nurtura, at the Eureka! Pitching Competition, organized by eventures, Amrita Vishwa Vidyapeetham, as part of the National Entrepreneurship Challenge 2024. HealthyHer is a personalized health and wellness platform designed specifically for women, offering health tracking, nutritional guidance, and AI-powered insights tailored to their unique needs. ",
    "cred": "https://github.com/Keerthivasan-Venkitajalam/healthyher"
  }
];

for (let i = 0; i < feat_list.length; i++) {
  let html = `
    <div class="feat">
    <p class="title">${feat_list[i].title}</p>
    <img src="${feat_list[i].src}">
    <div class="tag-list">`;
  for (let j = 0; j < feat_list[i].tags.length; j++) {
    html += `<tag>${feat_list[i].tags[j]}</tag>`;
  }
  html += `
   </div>
    <hr>
    <p class="context">
      ${feat_list[i].context}
    </p>
    <a target="_blank" href="${feat_list[i].cred}" class="source-link">Links and Stuffs <i class="material-icons">open_in_new</i></a>
  </div>
    `;
  feats.insertAdjacentHTML(`beforeend`, html);
}