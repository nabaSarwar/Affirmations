const affirmations = [
    "I am worthy of love and respect.",
    "I trust the timing of my life.",
    "Today, I choose joy and positivity.",
    "I am strong and resilient.",
    "I am grateful for the love in my life.",
    "I embrace every opportunity with confidence.",
    "I am a magnet for positivity.",
    "I believe in myself and my abilities.",
    "I am deserving of success and happiness.",
    "I will be kind to myself today.",
    "I am in charge of how I feel today, and I choose happiness.",
    "I am constantly growing and evolving into a better version of myself.",
    "I radiate confidence, self-respect, and inner harmony.",
    "I am capable of achieving great things.",
    "I trust myself to make the right decisions.",
    "I deserve to be happy and successful.",
    "I am at peace with who I am.",
    "I am proud of all my accomplishments, big and small.",
    "I am worthy of all the good things that come into my life.",
    "I welcome abundance and prosperity into my life.",
    "I am resilient, strong, and brave.",
    "I let go of negative self-talk and embrace positivity.",
    "I believe in the power of positive thinking.",
    "I am surrounded by love and everything is fine.",
    "I am a positive person and attract positive experiences.",
    "I forgive myself for my past mistakes and learn from them.",
    "I am thankful for the abundance in my life.",
    "I create my own path and walk it with joy.",
    "I release any doubts and embrace confidence.",
    "I am worthy of my dreams.",
    "I choose peace over worry.",
    "I am enough just as I am.",
    "I trust the process of life and am patient with myself.",
    "I attract only good things into my life.",
    "I am a unique and special person.",
    "I have the power to create change.",
    "I love and accept myself unconditionally.",
    "I am open to new opportunities that will improve my life.",
    "I trust that everything is working out for my highest good.",
    "I am deserving of rest, care, and self-compassion.",
    "I am capable of handling whatever challenges come my way.",
    "I focus on what I can control and let go of what I can't.",
    "I trust myself to navigate life’s twists and turns.",
    "I have the strength to overcome any obstacle.",
    "I am worthy of all the success that I achieve.",
    "I embrace my flaws because they make me who I am.",
    "I am exactly where I need to be.",
    "I am filled with positive energy and infinite creativity.",
    "I trust the universe to guide me on my path.",
    "I am empowered to create the life I desire.",
    "I deserve to feel happy and fulfilled.",
    "I am free from worry and regret.",
    "I have an infinite supply of creativity, energy, and love.",
    "I am deeply fulfilled with who I am.",
    "I let go of fear and embrace love.",
    "I trust my intuition and inner wisdom.",
    "I am worthy of everything that makes me feel good.",
    "I am grateful for today and all that it offers.",
    "I am the creator of my own happiness.",
    "I welcome love, kindness, and abundance into my life.",
    "I am a powerful creator of my own reality.",
    "I trust the magic of new beginnings.",
    "I am connected to the infinite wisdom of the universe.",
    "I attract miracles and magical moments into my life.",
    "I radiate love, light, and positive energy wherever I go.",
    "I am open to the wonders and possibilities the universe has to offer.",
    "Every day, magic flows into my life effortlessly.",
    "I am aligned with the frequency of abundance and joy.",
    "I trust the universe to manifest my deepest desires.",
    "I am a beacon of light, love, and endless possibilities.",
    "I attract magical opportunities that help me grow and thrive.",
    "I believe in the beauty of my dreams and their power to come true.",
    "I am surrounded by positive energy that uplifts and inspires me.",
    "I trust the timing of the universe and know everything unfolds perfectly.",
    "I allow myself to dream big and believe in the magic within me.",
    "I am in sync with the magic of life, and all my desires flow to me effortlessly.",
    "I release all limitations and step into my highest potential.",
    "I manifest love, abundance, and joy with ease and grace.",
    "I am in harmony with the rhythm of the universe.",
    "I am the master of my destiny, and my dreams are coming true.",
    "I believe in the magic of the present moment.",
    "I am worthy of the miracles that are unfolding in my life.",
    "I trust that my dreams are manifesting in perfect divine timing.",
    "I create my reality with every thought and action.",
    "I welcome all the good that life has to offer me.",
    "I am a magnet for success, happiness, and prosperity.",
    "I allow the universe to work through me in wondrous ways.",
    "I trust the universe to bring me exactly what I need at the perfect time.",
    "I embrace the magic within and around me every day.",
    "I am open to receiving all the love, joy, and abundance life has to offer."

];

const drawButton = document.getElementById('drawButton');
const affirmationText = document.getElementById('affirmationText');
const cardInner = document.getElementById('cardInner');

drawButton.addEventListener('click', () => {
    // Flip the card
    cardInner.classList.toggle('flipped');
    
    // Generate a random affirmation
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationText.textContent = affirmations[randomIndex];

    // Update button text based on the flip status
    if (cardInner.classList.contains('flipped')) {
        drawButton.textContent = "Flip Again";
    } else {
        drawButton.textContent = "Flip Card";
    }
});
