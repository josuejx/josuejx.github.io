export interface SkillCategory {
    name: string;
    skills: string[];
}

export const SKILLS: SkillCategory[] = [
    {
        name: "Frontend",
        skills: ["Vue.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
        name: "Backend",
        skills: ["Python", "PHP", ".NET Core", "Node.js"]
    },
    {
        name: "Mobile",
        skills: ["Flutter", "Android"]
    },
    {
        name: "Herramientas y Otros",
        skills: ["Git", "Docker", "Inteligencia Artificial"]
    }
];
