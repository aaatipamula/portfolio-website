export default function Skills(){
    const skills = [
        "Python",
        "TypeScript",
        "JavaScript",
        "React.js",
        "Preact",
        "Node.js",
        "HTML",
        "CSS",
        "RESTful APIs",
        "SQL",
        "MYSQL",
        "SQLite",
        "Linux",
        "Docker",
        "Shell Scripting"
    ]

    return (
        <div class="flex xl:justify-between flex-col xl:flex-row mb-20">
            <h2 class="text-5xl sm:text-7xl text-theme-pink xl:self-center">Skills:</h2>
            <div class="flex flex-wrap mt-6 xl:w-1/2 lg:w-5/6 xl:justify-end xl:self-end">
                {
                    skills.map((skill) => (
                        <div class="text-center text-theme-light-gray p-2 bg-theme-pink m-1 rounded-lg sm:text-xl">{skill}</div>
                    )) 
                }
            </div>
        </div>
    )
}