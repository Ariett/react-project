import Hero from "../hero/Hero"
import MostLikedYachts from "../most-liked-yachts/MostLikedYachts"
import YachtsLatest from "../yachts-latest/YachtsLatest"

export default function Home() {
    const heroContent = {
        title: "Yachter",
        description: "Your Ultimate Yachting Experience Awaits"
    }
    
    return (
        <>
            <Hero {...heroContent}/>
            
            <MostLikedYachts />

            {/* <YachtsLatest /> */}
        </>
    )
}