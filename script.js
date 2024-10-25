const quotes = [
    "You're the main character, so why are you worried about side quests? - Inspired by TikTok's 'main character energy'.",
    "Even Eleven had to fight her own Demogorgons, so don’t be afraid to face your challenges. - Stranger Things",
    "In your 'Fearless' era, every step forward is a victory. - Taylor Swift",
    "Like in 'Euphoria', sometimes life is messy, but growth happens in the chaos.",
    "Embrace your '1989' reinvention and own every transformation in life. - Taylor Swift",
    "You're not stuck in the Upside Down forever, brighter days are ahead! - Stranger Things",
    "Vibes are temporary, but self-care is forever. - TikTok trends",
    "Stay golden like a ‘Folklore’ daydream. - Taylor Swift",
    "Your growth is like a season of 'Stranger Things'—unexpected, full of twists, but always exciting."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomIndex];
}
