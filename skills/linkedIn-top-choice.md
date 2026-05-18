# LinkedIn Top Choice Skill

## Purpose

Generate concise, high-signal messages for LinkedIn Easy Apply applications when the candidate marks the role as a "Top Choice".

The goal is to:

- increase recruiter response probability
- demonstrate specific alignment with the role
- avoid generic AI-style wording
- sound credible and technically grounded

---

# Input

The skill receives the raw LinkedIn job description pasted directly from the job post.

The pasted content may include:

- company name
- role title
- responsibilities
- requirements
- tech stack
- company culture
- benefits
- recruiter notes

The skill should automatically infer:

- company
- role
- seniority
- technical stack
- product/domain focus
- hiring priorities
- communication tone

Optional additional context from the user may include:

- resume
- LinkedIn profile summary
- portfolio/projects
- GitHub profile
- short notes about relevant experience

---

# Language Rules

- Detect the dominant language of the input.
- If the input is primarily in Spanish, generate the response in Spanish.
- If the input is primarily in English, generate the response in English.
- Never mix languages unless the original job description intentionally mixes them.
- Preserve technical terminology naturally when translating.

---

# Output Rules

The generated message must:

- be between 250 and 400 characters
- avoid buzzwords and clichés
- avoid phrases like:
  - "passionate"
  - "dream opportunity"
  - "fast learner"
  - "team player"
  - "hard worker"

- mention at least one concrete alignment
- sound like a human wrote it quickly
- avoid excessive politeness
- avoid emojis
- avoid greetings/signatures

---

# Preferred Structure

1. Why the role/company is relevant
2. Specific experience overlap
3. Why the candidate is a strong fit

---

# Examples

## Example 1 — Frontend Engineer

Role: Senior Frontend Engineer
Company: Stripe

Output:

```txt
I’ve spent the last few years building React and Next.js products with a strong focus on DX, performance, and frontend architecture. The emphasis Stripe puts on product quality and developer tooling is a strong match for the kind of work I enjoy most, especially around complex UI systems and scalable frontend platforms.
```

---

## Example 2 — Developer Education

Role: Developer Educator
Company: Vercel

Output:

```txt
I’m currently building a challenge-based React learning platform focused on helping developers improve through practical exercises and real-world workflows. The overlap with developer education and frontend ecosystem content makes this role especially aligned with the work I’m already doing daily.
```

---

## Example 3 — AI Tooling

Role: AI Product Engineer
Company: Anthropic

Output:

```txt
Most of my recent work has been around AI-assisted developer workflows, including coding tools, frontend systems, and evaluation flows. This role stands out because it combines product engineering with practical AI tooling, which is exactly the direction I’m moving toward professionally.
```

---

# Heuristics

## Good Signals

- references company product or engineering culture
- references matching technical stack
- references domain overlap
- references shipped products
- references measurable ownership

## Bad Signals

- generic admiration
- repeating the job description
- exaggerated excitement
- obvious AI wording
- long paragraphs
- corporate language

---

# Generation Strategy

1. Extract the real core of the role:
   - infra
   - frontend platform
   - AI tooling
   - developer education
   - design systems
   - product engineering

2. Match with candidate experience.

3. Generate a compact paragraph with:
   - one concrete alignment
   - one credibility signal
   - one sentence about fit

4. Optimize for recruiter skim-reading.

---

# Style Reference

Target style:

- concise
- technical
- confident
- calm
- specific

Avoid:

- motivational tone
- startup clichés
- corporate HR language
- excessive enthusiasm

---

# Optional Enhancements

The skill may additionally:

- infer company culture from the job description
- detect stack overlap automatically
- adapt tone for startup vs enterprise
- generate multiple variants:
  - concise
  - technical
  - leadership-focused
  - product-focused
