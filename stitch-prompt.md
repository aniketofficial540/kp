# Stitch Prompt — "Sorry Kitty" apology game

> Tip: In Stitch, pick **Mobile** mode (she'll most likely open it on her phone).
> Paste the MAIN PROMPT first. If Stitch skips details, use the follow-up prompts one by one.

---

## MAIN PROMPT

```
Design a cute, playful, mobile-first web app called "Sorry Kitty 💗". It's a little apology game I'm making for someone special. She answers a series of questions with YES or NO. Every time she taps NO, the YES button grows bigger and the NO button shrinks, until YES takes over the whole screen and she has no choice but to tap it. The vibe: soft, romantic, silly, kawaii.

VISUAL STYLE
- Background: soft pastel pink gradient (#FFE4EC at the top to #FFC1D9 at the bottom), full screen, with a subtle pattern of tiny sparkles and paw prints.
- Hearts: lots of hearts in dark, bright, saturated pink (#FF1F7A and #E6007E) scattered across the background in different sizes, some slightly rotated, some with a soft pink glow.
- Kitties: LOTS of cute cartoon kitty stickers (at least 10–12) scattered all over the background — white, cream and light-grey kawaii kittens with rosy cheeks and thick rounded outlines. Each kitty stays in its own fixed spot and gently floats up and down in place, with eyes that blink. Mix of poses: holding a heart, peeking from a corner, sleeping, waving, hugging a pillow.
- One big hero kitty in the center, above the question card, with a big expressive face.
- Typography: rounded, bubbly fonts — "Fredoka" for headings, "Nunito" for body text. Text color deep berry (#8A1146).
- Shapes: everything very rounded (24px+ corner radius), pill-shaped buttons, soft pink shadows, white cards at 85% opacity with a slight background blur and a thin pink border.
- Little decorations: sparkles ✨, bows 🎀, tiny paw prints.

SCREEN 1 — WELCOME
- Big title: "Heyyy [Her Name] 🥺"
- Subtitle: "I messed up... and I'm really, really sorry. Will you answer a few questions for me?"
- Hero kitty holding a small "sorry" sign.
- One big hot-pink pill button: "Okayyy 💗"

SCREEN 2 — QUESTION (reusable template)
- Top: progress shown as a row of hearts (filled hot pink = answered, outlined = remaining) with the label "Question 2 of 6".
- Center: hero kitty with pleading, teary puppy eyes.
- White rounded card with the question text in large bold font.
- Two buttons side by side below the card:
  - YES: hot pink (#FF1F7A) pill, white bold text "Yes 💖", glowing pink shadow.
  - NO: white / very light pink pill with pink text "No".
- Show these escalation states as separate frames:
  - State A (default): YES and NO are the same size.
  - State B (after 1 No): YES is ~1.5x bigger, NO slightly smaller and now says "Are you sure? 🥺". Hero kitty looks sad with one tear.
  - State C (after 3 Nos): YES is huge (about half the screen), NO is small and says "Pleaseee 😿". Hero kitty is crying.
  - State D (after 5+ Nos): YES fills almost the entire screen with giant text "YES 💖". NO is a tiny button squeezed into a corner saying "ok fine...".
- NO button text cycles through: "No" → "Are you sure?" → "Really sure??" → "Think again 🥺" → "Pleaseee 😿" → "You're breaking my heart 💔" → "ok fine..."

SCREEN 3 — YES REACTION (overlay on the question screen)
- A burst of hot-pink hearts exploding from the YES button.
- Hero kitty switches to a happy, blushing face.
- Short bubbly text: "Yayyy! 🥰" before moving to the next question.

SCREEN 4 — FINAL CELEBRATION
- Big text: "YAYYY! I knew you'd forgive me 💖"
- Subtext: "[Your sweet closing message to her] 🫶"
- All the kitties are jumping / dancing, heart confetti raining down from the top.
- Two buttons: "Send me a hug 🤗" and a smaller "Play again".

QUESTIONS (one per question screen, in this order):
1. [Bubu, dekho ye sorry website kaisi lgi, maine tmhare liye banai hai. Kya tmhe ye acha lga?]
2. [Dudu, jaada time nhi de paata hai ab pehle ki trh. Dudu ko maaf kr do iske liye]
3. [Dudu ne birthday pe story nahi laga paaya tha toh dudu ko saja dena pr baat krna mt chhorna bububu]
4. [Bububu ko pta hai na ki dudu bhot pyaar krta hai bububu se apni]
5. [kya dudu ko chance milna chahiye apni glti sudharne ke liye?]
5. [Kya Dudu tumhe sorry bolne ke liye ek cute si hug deserve karta hai?]
5. [Kya tum Dudu ko maaf kar sakti ho, bas thodi si?]
6. [Kya Bubu ab Dudu se baat karegi? 💕]

ANIMATION NOTES
- Kitties: float in place (move up and down about 8px, 3–4 second loop, each one slightly out of sync), blink every few seconds.
- Hearts: slowly drift upward and gently pulse.
- YES button: grows with a bouncy, springy animation on every NO tap, and resets to normal size on each new question.
- All buttons: squishy press effect when tapped.
- Mobile-first (390px wide); on desktop, center the content and keep the decorated pink background full width.
```

---

## FOLLOW-UP PROMPTS (use if Stitch misses something)

**More kitties:**
```
Add more kitty stickers to the background — at least 12, spread evenly around the edges and corners so they don't cover the question card. Vary their poses and sizes. Keep them cute, kawaii, with rosy cheeks.
```

**Escalation states:**
```
Create 4 variants of the question screen showing the YES button growing: same size, 1.5x, half the screen, and almost the full screen. The NO button shrinks each time and its text changes: "No", "Are you sure? 🥺", "Pleaseee 😿", "ok fine...". The hero kitty goes from pleading, to sad, to crying.
```

**Hearts pop more:**
```
Make the background hearts darker and more vivid hot pink (#E6007E) so they stand out strongly against the pastel pink background. Add a soft glow around them.
```

**Final screen:**
```
Make the celebration screen more joyful: heart confetti falling, all kitties jumping with happy faces, and a big bouncing "YAYYY 💖" title.
```
