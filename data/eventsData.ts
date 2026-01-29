import { Terminal, Code, Mic, Lightbulb, Palette, Hammer } from 'lucide-react';

export const eventsData = [
    {
        id: "dreams-in-digital",
        title: "Dreams in Digital",
        tagline: "Use AI tools for storytelling videos",
        description: "This event challenges participants to become digital directors, using Generative AI to create short films or trailers.",
        color: "from-blue-500 to-cyan-500",
        icon: Terminal,
        workflow: [
            {
                title: "Prompt Phase",
                description: "Participants are given a theme (e.g., \"The Last City on Earth\" or \"Cyberpunk Mythology\")."
            },
            {
                title: "Generation",
                description: "They use tools like Midjourney/DALL-E for visuals and tools like Runway, Pika, or Sora for video synthesis."
            },
            {
                title: "Assembly",
                description: "Voices are generated via ElevenLabs, and everything is edited into a 60–90 second clip."
            }
        ]
    },
    {
        id: "tech-coders",
        title: "Tech Coders",
        tagline: "Masters of Modern Coding",
        description: "A high-intensity competitive programming event designed to test logic, speed, and efficiency.",
        color: "from-green-500 to-emerald-500",
        icon: Code,
        workflow: [
            {
                title: "Round 1 (The Sprint)",
                description: "A time-bound MCQ round focusing on Data Structures, Algorithms, and output prediction."
            },
            {
                title: "Round 2 (The Debug)",
                description: "Participants are given broken code with logical or syntax errors and must fix them to pass hidden test cases."
            },
            {
                title: "Round 3 (The Grand Finale)",
                description: "A live \"Battle of Code\" where participants solve complex algorithmic problems on platforms like HackerRank or LeetCode."
            }
        ]
    },
    {
        id: "minute-mania",
        title: "Minute-Mania",
        tagline: "Spin the topic, grab the mic, and let your thoughts fly.",
        description: "A \"Just A Minute\" (JAM) style event focused on communication, spontaneity, and technical knowledge.",
        color: "from-purple-500 to-pink-500",
        icon: Mic,
        workflow: [
            {
                title: "The Spin",
                description: "A physical or digital wheel is spun to select a tech-related topic (e.g., \"The Ethics of Neuralink\" or \"Why PHP still survives\")."
            },
            {
                title: "The Talk",
                description: "The speaker must talk for exactly 60 seconds without hesitation, repetition, or deviation."
            },
            {
                title: "The Challenge",
                description: "Other participants can \"object\" if the speaker stammers or goes off-topic to steal points."
            }
        ]
    },
    {
        id: "exhibit-innovation",
        title: "Exhibit Innovation",
        tagline: "Think beyond boundaries and ideas.",
        description: "A classic project expo where hardware meets software.",
        color: "from-yellow-500 to-orange-500",
        icon: Lightbulb,
        workflow: [
            {
                title: "Abstract Submission",
                description: "Teams submit a one-page pitch of their prototype."
            },
            {
                title: "Stall Setup",
                description: "Selected teams set up a physical booth with their hardware/software running."
            },
            {
                title: "Live Demo",
                description: "Judges move from stall to stall for a 5-minute demonstration followed by a Q&A."
            }
        ]
    },
    {
        id: "art-attack",
        title: "Art Attack",
        tagline: "Unleashing creativity through poster design",
        description: "A graphic design competition focused on visual communication and branding.",
        color: "from-red-500 to-rose-500",
        icon: Palette,
        workflow: [
            {
                title: "The Brief",
                description: "Participants are given a mock brand or a social cause (e.g., \"A Marketing Poster for a Mars Tourism Agency\")."
            },
            {
                title: "Design Phase",
                description: "Using tools like Photoshop, Canva, or Illustrator, participants create a high-resolution poster."
            },
            {
                title: "The Pitch",
                description: "A brief 1-minute explanation of why they chose specific colors, typography, and layouts."
            }
        ]
    },
    {
        id: "innov-forge",
        title: "Innov Forge",
        tagline: "Paper presentation on innovative ideas",
        description: "A formal academic event for presenting research and theoretical breakthroughs.",
        color: "from-indigo-500 to-violet-500",
        icon: Hammer,
        workflow: [
            {
                title: "Paper Review",
                description: "Participants submit a research paper following IEEE/APA formats."
            },
            {
                title: "Presentation",
                description: "A 7-minute slideshow (PPT) explaining the problem statement, methodology, and expected results."
            },
            {
                title: "Defense",
                description: "A 3-minute \"Defense\" round where judges and the audience ask critical questions."
            }
        ]
    }
];
