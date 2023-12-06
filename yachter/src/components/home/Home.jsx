import Hero from "../hero/Hero"

export default function Home() {
    const heroContent = {
        title: "Home",
        description: "lorem ipsum"
    }
    
    return (
        <>
            <Hero {...heroContent}/>

            <main>
            </main>
        </>
    )
}