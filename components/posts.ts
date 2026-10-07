export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  category: string;
  date: string;
  readTime: string;
  /** Paragraphs + subheads: strings starting with "## " render as headings. */
  content: string[];
};

const U = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const POSTS: Post[] = [
  {
    slug: "golden-hour-wedding-timeline",
    title: "The Golden-Hour Wedding Timeline That Actually Works",
    excerpt:
      "Most wedding galleries are won or lost before the baraat even starts. Here is the hour-by-hour rhythm we plan around light — not rituals.",
    cover: U("photo-1519741497674-611481863552"),
    coverAlt: "Wedding couple holding sparklers at dusk",
    category: "Weddings",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    content: [
      "Every couple asks for the same thing — photos that look effortless. The secret is that effortlessness is scheduled. Light is the only guest that never waits, so we build your wedding day around it and let everything else breathe.",
      "## Start with the mandap, not the makeup",
      "Ask when your venue's main stage gets direct sun. A 10 AM muhurtham under harsh overhead light photographs very differently from a 4 PM one wrapped in gold. We visit every venue a day early, phone compass in hand, and mark the exact windows where faces glow instead of squint.",
      "## The 40-minute portrait heist",
      "Somewhere between the ceremony and the reception chaos, we steal you for forty minutes. No posing marathons — just a walk, a quiet corner, and the two of you forgetting the camera exists. These frames always end up on the wall.",
      "## Feed the photographers",
      "It sounds small, but a fed, rested photo team sees better. Build a real fifteen-minute break into the schedule and your night portraits will thank you.",
      "## The sparkler math",
      "One sparkler burns for roughly a minute. Twenty guests with sparklers, one corridor, and a couple walking slowly toward camera — that is the entire recipe behind the exit shot everyone saves on Pinterest. Plan it, brief one cousin to coordinate, and it takes four minutes flat.",
    ],
  },
  {
    slug: "questions-before-booking-photographer",
    title: "5 Questions to Ask Before You Book Any Photographer",
    excerpt:
      "Price and pretty feeds tell you almost nothing. Ask these five instead — and watch how the right studio lights up answering them.",
    cover: U("photo-1516035069371-29a1b244cc32"),
    coverAlt: "Vintage film camera on a wooden table",
    category: "Advice",
    date: "Sep 12, 2026",
    readTime: "5 min read",
    content: [
      "Choosing a photographer feels like gambling — every portfolio looks gorgeous online. But portfolios are highlight reels. These five questions reveal how your own shoot day will actually feel.",
      "## 1. Can I see a full gallery, not highlights?",
      "Any studio can produce twenty stunning frames. Ask for one complete wedding or one full newborn session, start to finish. Consistency across bad light, tired babies and chaotic crowds is the real skill.",
      "## 2. What happens when the baby cries — or the rain comes?",
      "The answer you want is a calm, specific plan: backup indoor setups, flexible rescheduling, unhurried pacing. If they look nervous, keep looking.",
      "## 3. Who exactly is shooting on my day?",
      "Studios grow; the person you meet is not always the person who shows up. Get the lead shooter's name and see their work specifically.",
      "## 4. When do I get my photos — in writing?",
      "Vague promises rot. A professional contract names the delivery window. Ours is seven days, printed in the agreement, and we have never missed it.",
      "## 5. How do you direct people who hate posing?",
      "Most clients say 'we are awkward.' Great photographers have a system for that — guided movement, conversation, and zero pressure to perform. Ask them to describe it. Their eyes should light up.",
    ],
  },
  {
    slug: "unrushed-bridal-morning",
    title: "Bridal Morning, Unrushed: A Love Letter to Slow Starts",
    excerpt:
      "Hairpins, filter coffee, your mother's hands on your dupatta. The quietest hours of a wedding day make the loudest photographs.",
    cover: U("photo-1520854221256-17451cc331bf"),
    coverAlt: "Bride in a white gown by a window",
    category: "Weddings",
    date: "Aug 30, 2026",
    readTime: "4 min read",
    content: [
      "Ask any bride what she remembers of her wedding and she will not mention the stage flowers. She will mention the morning — the room full of women, the smell of coffee, somebody's playlist crackling off a phone speaker.",
      "## Keep the room small",
      "Ten people in a getting-ready room creates chaos; four creates intimacy. Limit the morning to your inner circle and the photographs instantly breathe — real laughter instead of crowd management.",
      "## Light first, makeup second",
      "One chair pulled near the biggest window is worth more than any ring light. We always scout the getting-ready room first and quietly rearrange it around daylight. Tell your makeup artist in advance; the good ones love window light too.",
      "## The details deserve ten minutes",
      "Rings, bangles, the invitation card, perfume bottle — gather them in one pouch the night before. Ten focused minutes with these still-life frames buys you the flat-lay spread every album opens with.",
      "Slow mornings photograph like memory feels. Protect yours.",
    ],
  },
];
