export interface Role {
    title: string;
    type?: string;
    startDate: string;
    endDate: string;
    duration: string;
    description?: string;
    skills?: string;
}

export interface Experience {
    company: string;
    copmanyLogo?: string;
    type?: string;
    totalDuration: string;
    location: string;
    roles: Role[];
}

export const EXPERIENCE: Experience[] = [
    {
        company: "Accenture España",
        copmanyLogo: "./src/assets/images/accenture_espana_logo.webp",
        type: "Jornada completa",
        totalDuration: "2 años 2 meses",
        location: "En remoto",
        roles: [
            {
                title: "System Developer Senior Analyst",
                startDate: "jun. 2026",
                endDate: "actualidad",
                duration: "1 mes",
            },
            {
                title: "System Developer Analyst",
                startDate: "may. 2024",
                endDate: "jun. 2026",
                duration: "2 años 2 meses",
                description: "Desarrollo y mantenimiento de soluciones personalizadas sobre plataformas LMS/LXP (Cornerstone y Edcast) para clientes corporativos...",
                skills: "Vuejs, Python y 4 aptitudes más"
            }
        ]
    },
    {
        company: "Akra Informática Coop.V.",
        copmanyLogo: "./src/assets/images/akra_informatica_logo.webp",
        totalDuration: "2 años",
        location: "Alicante, Comunidad Valenciana / Comunitat Valenciana, España · Presencial",
        roles: [
            {
                title: "Desarrollador Full-Stack Web y Móvil",
                type: "Jornada completa",
                startDate: "dic. 2022",
                endDate: "may. 2024",
                duration: "1 año 6 meses",
                description: "Desarrollo de aplicaciones a medida para clientes empresariales, abarcando desde el frontend hasta el backend. Desarrollo tanto de aplicaciones web como aplicaciones móviles...",
                skills: "Android, PHP y 6 aptitudes más"
            },
            {
                title: "Desarrollador de software",
                type: "Contrato de prácticas",
                startDate: "jun. 2022",
                endDate: "nov. 2022",
                duration: "6 meses",
                description: "Desarrollo de aplicaciones a medida para clientes empresariales, abarcando desde el frontend hasta el backend...",
                skills: "Android, PHP y 6 aptitudes más"
            }
        ]
    }
];