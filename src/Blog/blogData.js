// blogData.js — Add your tutorials here
// Each post renders as a full text tutorial on /blog/:slug

export const blogPosts = [
  {
    id: 1,
    slug: "fix-pip-not-recognized",
    title: "Fix: 'pip' is not recognized as a command",
    summary: "Getting a pip error in CMD or PowerShell? Here's a quick and simple fix that actually works.",
    category: "Python",
    tags: ["pip", "python", "windows", "fix"],
    date: "2025-06-10",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    content: `
## The Problem

You install Python, open terminal, type:

\`\`\`bash
pip install something
\`\`\`

…and boom:

\`\`\`
'pip' is not recognized as an internal or external command
\`\`\`

Frustrating, right? Don’t worry — it’s a very common issue.

---

## Why This Happens

Most of the time, Python is installed correctly, but Windows doesn’t know where to find it. That’s because the **PATH variable** wasn’t set during installation.

---

## Quick Fix (Works Instantly)

Instead of using pip directly, run:

\`\`\`bash
py -m pip install package-name
\`\`\`

This tells Python to run pip internally — no setup needed.

---

## Permanent Fix (Recommended)

1. Go to your Python install folder:
\`\`\`
C:\\Users\\YourName\\AppData\\Local\\Programs\\Python\\Python311\\
\`\`\`

2. Copy these two paths:
- Python folder  
- Scripts folder  

3. Open:
- Search "Environment Variables"
- Click **Edit system environment variables**
- Open **Environment Variables**
- Edit **Path**
- Add both paths

4. Restart terminal and run:
\`\`\`bash
pip --version
\`\`\`

---

## Lazy Option 😄

Just reinstall Python and **tick "Add Python to PATH"** during setup.

---

## Final Tip

Run:
\`\`\`bash
where python
where pip
\`\`\`

If pip is missing — it's definitely a PATH issue.

---

## Summary

- Quick use → \`py -m pip\`  
- Long-term → fix PATH  
- Clean start → reinstall Python  
    `,
  },

  {
    id: 2,
    slug: "git-merge-vs-rebase",
    title: "Git Merge vs Rebase — Which One Should You Use?",
    summary: "Confused between merge and rebase? Here's a simple way to understand when to use each.",
    category: "Git",
    tags: ["git", "merge", "rebase"],
    date: "2025-06-18",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    content: `
## The Simple Difference

- **Merge** → keeps full history (safe)
- **Rebase** → makes history clean (but rewrites it)

---

## Merge (Safe Option)

\`\`\`bash
git checkout main
git merge feature
\`\`\`

It creates a merge commit and keeps everything intact.

Use this when:
- Working with a team
- Pushing to main branch
- You don’t want to break history

---

## Rebase (Clean Option)

\`\`\`bash
git checkout feature
git rebase main
\`\`\`

This moves your commits on top of main — making history linear.

Use this when:
- Cleaning your commits
- Before creating a PR
- Working locally

---

## Important Rule ⚠️

Never rebase code that is already pushed and shared.

It rewrites history → teammates will hate you 😅

---

## Pro Tip

Use interactive rebase:

\`\`\`bash
git rebase -i HEAD~3
\`\`\`

You can:
- squash commits
- rename them
- reorder them

---

## Final Advice

- Team work → **Merge**
- Clean commits → **Rebase**
    `,
  },

  {
    id: 3,
    slug: "python-snake-game",
    title: "Build a Snake Game in Python (Step-by-Step)",
    summary: "Learn how to build the classic Snake game using Python and pygame — beginner friendly and fun!",
    category: "Python",
    tags: ["python", "game", "pygame", "snake"],
    date: "2026-04-08",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41",
    content: `
## Why Build Snake Game?

If you're learning Python, making a game is one of the best ways to understand logic, loops, and real-time updates.

Snake is perfect because:
- Simple logic
- Fun to play
- Teaches game basics

---

## Step 1: Install pygame

\`\`\`bash
pip install pygame
\`\`\`

---

## Step 2: Basic Setup

\`\`\`python
import pygame
import time
import random

pygame.init()

width, height = 600, 400
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Snake Game")

clock = pygame.time.Clock()
\`\`\`

---

## Step 3: Snake Logic

\`\`\`python
snake_block = 10
snake_speed = 15

snake_list = []
snake_length = 1
\`\`\`

---

## Step 4: Game Loop

\`\`\`python
game_over = False

x = width / 2
y = height / 2

x_change = 0
y_change = 0

while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                x_change = -snake_block
                y_change = 0
            elif event.key == pygame.K_RIGHT:
                x_change = snake_block
                y_change = 0
            elif event.key == pygame.K_UP:
                y_change = -snake_block
                x_change = 0
            elif event.key == pygame.K_DOWN:
                y_change = snake_block
                x_change = 0

    x += x_change
    y += y_change

    screen.fill((0, 0, 0))

    pygame.draw.rect(screen, (0, 255, 0), [x, y, snake_block, snake_block])

    pygame.display.update()
    clock.tick(snake_speed)

pygame.quit()
\`\`\`

---

## Step 5: Add Food 🍎

Use random positions:

\`\`\`python
food_x = round(random.randrange(0, width - snake_block) / 10.0) * 10.0
food_y = round(random.randrange(0, height - snake_block) / 10.0) * 10.0
\`\`\`

Draw it:

\`\`\`python
pygame.draw.rect(screen, (255, 0, 0), [food_x, food_y, snake_block, snake_block])
\`\`\`

---

## Step 6: Collision + Growing Snake

- If snake eats food → increase length  
- Store positions in a list  
- Draw entire snake body  

---

## Final Result

You now have:
- Moving snake
- Controls
- Food system
- Basic game loop

---

## Next Improvements 🚀

- Add score system  
- Add game over screen  
- Add sound effects  
- Increase speed over time  

---

## Final Thoughts

This project might look simple, but it teaches:
- Game loops  
- Event handling  
- Collision logic  

If you can build this, you're already ahead of most beginners.

Try modifying it and make your own version — that's where real learning happens.
    `,
  },
];
export const categories = [...new Set(blogPosts.map((p) => p.category))];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat) => blogPosts.filter((p) => p.category === cat);
export const searchPosts = (query) => {
  const q = query.toLowerCase();
  return blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
};
