import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
	c,
	cpp,
	python,
	fortytwo,
	ALTEN,
	school,
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "c",
        type: "algorithm",
    },
	{
        imageUrl: cpp,
        name: "cpp",
        type: "algorithm",
    },
	{
        imageUrl: python,
        name: "python",
        type: "algorithm",
    },
	{
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
	{
		title: "Assistant Teacher",
		company_name: "Primary School, Ingatestone",
		icon: school,
		iconBg: "#6e8aff",
		date: "Aug 2019",
		points: [
			"Helping students, preparing lessons, grading evaluations.",
		],
	},
    {
        title: "Student",
        company_name: "42 Lyon Auvergne-Rhône-Alpes",
        icon: fortytwo,
        iconBg: "#d0d0d0",
        date: "Nov 2021 - Present",
        points: [
            "Preparing for the RNCP title in IT: solution design and development"
        ],
    },
	{
        title: "Project Manager",
        company_name: "ALTEN",
        icon: ALTEN,
        iconBg: "#fffb00",
        date: "Sep 2024 - Mar 2025",
        points: [
            "Development of test applications and monitoring checks using Robot Framework.",
            "Development and maintenance of applications using Angular and Java.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Qwazertyx',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/victorsedat',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Portfolio3D',
        description: 'My Portfolio website, built with Three.js, showcasing my projects and skills in a 3D environment.',
        link: 'https://github.com/Qwazertyx/Portfolio3D',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Obsotest',
        description: 'Created a Unit Testing environnement with RobotFramework, supporting various test cases and assertions.',
        link: 'https://robotframework.org/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'Pear2PearWeb',
        description: 'Web application for wallet management in apredictive marketing project',
        link: 'https://github.com/Qwazertyx/Pear2PearWeb',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'MiniRT',
        description: 'Program generating images using theRaytracing protocol',
        link: 'https://github.com/Qwazertyx/MiniRT',
    },
];