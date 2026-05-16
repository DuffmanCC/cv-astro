# Cover Letter Skill

## Description

Generate a tailored cover letter for Carlos Ortiz based on his CV profile and a job posting provided by the user. The cover letter will highlight the most relevant experience, skills, and achievements that match the job requirements.

## When to Use

Use this skill when the user asks to generate a cover letter for a specific job posting, or when they paste a job description and request a tailored application.

## CV Data Source

The candidate's full profile is stored in `src/data/en.json`. Always read this file first to get the latest data. Key sections:

- **Personal info**: name, title, email, website, GitHub, LinkedIn
- **Profile**: 5-paragraph professional summary covering 10+ years experience, React/Next.js focus, leadership roles, AI workflows, ReactChallenges.com
- **Experience**: 10 entries from 2013 to present (see below for full list)
- **Skills**: React, Next.js, TypeScript, Vue.js, Tailwind CSS, Astro, WordPress, Laravel, PostgreSQL, Drizzle ORM, OpenAI/ChatGPT, Pinecone, Docker, Vitest, Playwright, Stripe, Storybook, GraphQL, and more

## Instructions

When generating a cover letter, follow this process:

### 1. Parse the Job Posting

Extract from the user's job posting input:
- **Company name** and what they do
- **Position title**
- **Key required skills/technologies** (e.g., React, TypeScript, Node.js)
- **Core responsibilities** (e.g., "lead a team", "build UI components", "integrate APIs")
- **Nice-to-haves** or preferred qualifications
- **Company mission/culture** (if described)

### 2. Match CV Experience to Job Requirements

For each requirement identified, find the most relevant experience from `src/data/en.json`:

- **Frontend/React roles →** Lead Frontend Engineer at FlowArchitect, AI Engineer at MainGPT, ReactChallenges.com, Network Rail
- **Full-stack roles →** Wod Academy (Laravel + Preact/Astro), Urchin Labs (WordPress + Next.js), Network Rail
- **AI/LLM roles →** MainGPT (OpenAI, Pinecone), Urchin Labs (ChatGPT + vector DB), FlowArchitect (AI workflows)
- **Leadership/mentoring →** FlowArchitect (led developers, code reviews), Network Rail (led cross-agency teams, design system)
- **WordPress roles →** Urchin Labs, Totally Group, Network Rail, Klood Ltd
- **Startup/independent →** ReactChallenges.com (founder), Wod Academy (personal project)

### 3. Generate the Cover Letter

Compose a professional cover letter in English following these rules:

**Format:**
- Recipient: "Dear Hiring Team at `[Company]`," (Dear [name] if name is known)
- 3 paragraphs maximum
- Professional closing: "Kind regards,\nCarlos Ortiz" (plus email and website on separate lines)
- No markdown formatting (plain text email/letter body)
- **Total length: no more than 150-200 words** in the body (excluding header and signature)

**Structure:**

1. **Opening paragraph (1-2 sentences):** Express interest in the role, mention the company by name, and state your core qualification in one line.

2. **Experience + technical fit — combined (3-5 sentences):** This is the only body paragraph. Highlight the 2-3 most relevant roles/projects that match the job requirements, connecting concrete technologies from the CV to their stack. Keep each role mention to one sentence. Example structure: "As Lead Frontend Engineer at FlowArchitect I led architecture and testing with Vitest/Playwright. At Network Rail I built a design system with Storybook used across multiple agencies. Currently I build ReactChallenges.com with Next.js, TypeScript and Vitest, handling CI/CD via Vercel." Weave soft skills naturally (autonomy, collaboration) into these sentences instead of a separate paragraph.

3. **Closing paragraph (1 sentence):** Express interest in an interview and sign off.

**Tone guidelines:**
- **Brevity first.** Every sentence must earn its place. Cut filler words, adjectives, and redundant statements.
- Professional but warm
- Confident but not arrogant
- Specific and concrete (use real project/company names, actual technologies)
- Tailored — every paragraph should clearly connect to the job posting
- Avoid generics like "I'm a hard worker" or "I'm passionate about..." without concrete evidence
- Never fabricate experience not in the CV

**What NOT to include:**
- Don't list every job from the CV — only highlight the most relevant ones
- Don't include salary expectations, references available upon request, or personal details not relevant to the role
- Don't use markdown or HTML in the output
- Don't include the candidate's full address or phone number (email and website only if relevant)

### 4. Output

Display the cover letter as plain text. After the letter, add a brief note listing which CV experiences and skills were matched to the job requirements (so the user can verify accuracy).

## Example Usage

User: "Here's a job posting for a Senior React Developer at Acme Corp..."
[User pastes job description]

The agent will:
1. Read `src/data/en.json`
2. Parse the job description
3. Match relevant experiences
4. Generate and output the tailored cover letter
5. List the matched experiences below the letter
