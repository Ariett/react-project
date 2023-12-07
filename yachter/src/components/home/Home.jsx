import Hero from "../hero/Hero"
import MostLikedYachts from "../most-liked-yachts/MostLikedYachts"

export default function Home() {
    const heroContent = {
        title: "Home",
        description: "lorem ipsum"
    }
    
    return (
        <>
            <Hero {...heroContent}/>
            
            <MostLikedYachts />
        </>
    )
}