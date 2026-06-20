export interface Profile {
    name: string;
    headline: string;
    location: string;
    about: string[];
}

export const PROFILE: Profile = {
    name: "Josué García Asensi",
    headline: "Software Developer | Máster IA - Ing. Informático",
    location: "España",
    about: [
        "Crecí entre dos culturas: pasé 15 años en China antes de volver a España, una experiencia que me enseñó a adaptarme, a observar antes de actuar y a trabajar con disciplina.",
        "Hoy me dedico al desarrollo de software, con foco en Frontend, me muevo bien tanto en proyectos web como en aplicaciones multiplataforma con Flutter, y disfruto especialmente de los retos donde la tecnología tiene que resolver un problema real.",
        "En 2025 terminé un Máster en Inteligencia Artificial, un campo que me apasiona y hacia el que quiero orientar cada vez más mi trabajo.",
        "Hablo castellano, inglés y chino mandarín con fluidez — algo que en más de una ocasión ha abierto puertas inesperadas."
    ]
};
