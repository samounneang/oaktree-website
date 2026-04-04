interface Job {
    title: string;
    description: string;
    path: string;
    isAvailable: boolean;
};

const jobs: Job[] = [

    {
        title: "UI/UX Designer",
        description: `

        <p>We are looking for a designer to craft intuitive and engaging experiences across a variety of mediums including web, mobile, and print. You will be working on projects within our portfolio at different stages from ideation, MVP, to operational companies. This role will probably be challenging as you will be exposed to different industries, international markets, and multiple stakeholders, while having to balance creativity, productivity, and efficiency in managing your time, tasks, and quality.</p>
<p>Before you jump into the frying pan, we thought you should know what you're getting yourself into.</p>
<br/>
<h3>About Us</h3>
<p>We believe that change is made by small groups of people who are thoughtful, fully committed, and empowered. How we go about making positive change is by building ventures (medium) that build people (heart) in developing countries (need). As we explore more markets and identify problems, there will be many things we don't know. However, our lean is always to gain understanding and try to create a solution. We are just putting a team together so you will be part of the founding team, which is why it is absolutely critical that you can pull your weight in what we will do. Ultimately, we are simply a small and scrappy group of people, loosely connected, but united by a shared purpose.</p>
<br/>
<h3>Why You Should Not Join Us</h3>
<ul>
  <li>There will be periods when work can get gruelling, especially when projects start to scale at the same time</li>
  <li>We operate in a lot of uncertainty, unfamiliarity, and informality given the markets we will be in</li>
  <li>We will very possibly encounter high resistance in mindset, behaviour, culture, systems and regulations (get ready to hear "people won't change", "it's too difficult", or "it won't make a difference" etc)</li>
  <li>Compared to others, we don't offer publicity, brand names, or glitz and glamour</li>
  <li>No fancy office, gym memberships, staff cafeteria, sleeping pods or peloton bikes (probably a perk to be honest)</li>
</ul>
<br/>
<h3>Who We're Looking For</h3>
<p>We value who you are and what you are willing to bring to the table more than your degree, social status, appearance, or even past accolades. It matters more how you show up each day, your contributions in each moment, and the way you act towards others.</p>
<br/>
<p>Read more about the traits that we think would make you a great fit with us here: <a href="https://www.oaktreeventurestudio.com/join-us" target="_blank" rel="noopener noreferrer">https://www.oaktreeventurestudio.com/join-us</a></p>
<br/>
<h3>Responsibilities</h3>
<ul>
  <li>Translate conceptual ideas into functional, engaging UI designs (wireframes, prototypes and user flows) ready for front-end implementation</li>
  <li>Work across all stages of the design process, including workflow and systems mapping, ideation, concept development, validation, final visual design, and implementation support</li>
  <li>Create thoughtful end-to-end user experiences across web, mobile and print that simplify underlying complexity</li>
  <li>Collaborate with the engineering team to deliver feasible pixel-perfect UI designs that ensure smooth handoff and implementation</li>
  <li>Conduct usability testing and iterate on designs based on user feedback, working with go-to market team</li>
  <li>Champion user needs by designing intuitive and delightful digital experiences, even for routine or complex workflows</li>
  <li>Create designs that support our portfolio's go-to market initiatives like presentations and marketing collateral</li>
</ul>
<br/>
<h3>Requirements</h3>
<ul>
  <li>Proficiency in design and prototyping software including Figma, Miro, Sketch, Adobe Creative Cloud etc and the ability to maintain clean and organized files</li>
  <li>Experience with user research, user testing, and feedback loops</li>
  <li>Competent in wireframing, prototyping, and visual storytelling</li>
  <li>Demonstrable portfolio showing user-centered designs</li>
  <li>Comfortable with independent and autonomous work delivering high-fidelity, production-ready designs</li>
  <li>Communicative and collaborative working in multi-functional teams</li>
  <li>Fluent in English</li>
</ul>
<br/>
<h4>Great to have:</h4>
<ul>
  <li>Understanding and active practice of systems thinking, human-centered design, and agile methodology</li>
  <li>Familiarity with frontend development including responsive design principles, Storybook, HTML/CSS</li>
  <li>Strong drive for growth</li>
  <li>Curiosity for learning across broad topics</li>
  <li>Creative problem-solving</li>
</ul>
<br/>
<h3>What You'll Get</h3>
<ul>
  <li>Opportunity to grow as part of a core team at the founding stage of a mission-driven company</li>
  <li>Purposeful work that generate real impact in solving hard problems</li>
  <li>Build alongside founders and leaders who value depth, excellence, and creativity</li>
  <li>Great banter (passable)</li>
  <li>Funny jokes (at times)</li>
</ul>
<br/>
<p>If you're still interested to join us after reading through the above, do send us an introduction of yourself (make it personal!) and why you think you'd be a good fit, along with your resume. We will reach out to you if you've been shortlisted. Have a smashing rest of 2025!</p>
`, path: "/jobs/uiux", isAvailable: false
    },
    { title: "Marketing Specialist", description: "Lead campaigns, manage social media, and drive brand growth.", path: "/jobs/marketing", isAvailable: false },
    { title: "Full‑Stack Engineer", description: "React, Node.js, scalable app development.", path: "/jobs/fullstack", isAvailable: false },
    { title: "Project Coordinator", description: "Manage timelines and support team success.", path: "/jobs/coordination", isAvailable: false },
    { title: "Content Strategist", description: "Storytelling, messaging, content planning.", path: "/jobs/content", isAvailable: false }
];

export default jobs;