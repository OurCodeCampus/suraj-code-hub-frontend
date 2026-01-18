import { Link } from "react-router-dom"
export default function PackageCard() {

    const packageTechnologyList = [
        {
            title: "Apache Maven",
            description: "A default package manager used for the Java programming language and the Java runtime environment.",
            link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
        },
        {
            title: "NuGet",
            description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
            link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry"
        },
        {
            title: "RubyGems",
            description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
            link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry"
        },
        {
            title: "npm",
            description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
            link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"
        },
        {
            title: "Containers",
            description: "A single place for your team to manage Docker images and decide who can see and access your images.",
            link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
        }
    ]

    return (
        <>
            <h3 className="package-card-heading">Choose a registry</h3>
            <ul div className="package-card-container" >
                {
                    packageTechnologyList.map((curPackage, idx) => {
                        return (
                            <li className="package-card-items" key={idx}>
                                <h3 className="package-card-items-title">{curPackage.title}</h3>
                                <p className="package-card-items-description">{curPackage.description}</p>
                                <Link to={curPackage.link} className="package-card-items-link-btn">Learn More</Link>
                            </li>
                        )
                    })
                }
            </ul >
        </>

    )
}