import Hero from "../hero/Hero";
import MostLikedYachts from "../most-liked-yachts/MostLikedYachts";

export default function Home() {
    const heroContent = {
        title: "Yachter",
        description: "Your ultimate yachting experience awaits"
    }

    // TO PRESENT Error Boundry
    // if(true) {
    //     throw new Error("Home Error");
    // }
    
    return (
        <>
            <Hero {...heroContent}/>
            
            <MostLikedYachts />
        </>
    )
}