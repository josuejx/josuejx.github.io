export interface Education {
    school: string;
    schoolLogo?: string;
    degree?: string;
    startDate: string;
    endDate: string;
    skills?: string;
}

export const EDUCATION: Education[] = [
    {
        school: "UNIR-Universidad Internacional de La Rioja",
        schoolLogo: "./src/assets/images/unir_logo.webp",
        degree: "Master's degree, Artificial Intelligence",
        startDate: "oct. 2023",
        endDate: "oct. 2025",
        skills: "Python, Vuejs y 1 aptitud más"
    },
    {
        school: "UA - Universidad de Alicante / Universitat d'Alacant",
        schoolLogo: "./src/assets/images/ua_logo.webp",
        startDate: "sept. 2019",
        endDate: "jul. 2023",
        skills: "Python, .NET Core y 5 aptitudes más"
    },
    {
        school: "IES Francisco Figueras Pacheco",
        schoolLogo: "./src/assets/images/ies_francisco_figueras_pacheco_logo.webp",
        degree: "Bachillerato, Ciencias y tecnologías",
        startDate: "sept. 2017",
        endDate: "jun. 2019"
    },
    {
        school: "Ling Ling Middle School, Shanghai, China",
        schoolLogo: "./src/assets/images/ling_ling_middle_school_logo.webp",
        degree: "Educación Secundaria Obligatoria (ESO)",
        startDate: "sept. 2011",
        endDate: "jun. 2016"
    }
];
