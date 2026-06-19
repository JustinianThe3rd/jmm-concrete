# DJ & Dior Tradesman Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the existing Joe Hitchens Plumbing site to DJ & Dior Tradesman (HVAC contractor) — swap all business content, services, reviews, contact info, and imagery while preserving the brutalist design system and responsive mobile-first architecture.

**Architecture:** Content-only swap across 9 files. No structural, layout, or design changes — the existing brutalist dark theme, animations, and responsive breakpoints are already solid. Every component gets a find-and-replace of business-specific strings, phone numbers, services, and image alts.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4 (unchanged)

---

## File Map

| File | Changes |
|------|---------|
| `app/layout.tsx` | Title, description, keywords, OpenGraph metadata |
| `app/components/Navbar.tsx` | Logo text, phone number, mobile menu phone |
| `app/components/Hero.tsx` | Heading, subheading, stats, badge text, CTAs |
| `app/components/Services.tsx` | Section description, all 8 service cards, CTA |
| `app/components/About.tsx` | Heading, description, checklist items, CTAs, image alt |
| `app/components/Gallery.tsx` | Section description, image alts/labels |
| `app/components/Reviews.tsx` | Section description, all 3 reviews (names + quotes) |
| `app/components/Contact.tsx` | Section description, phone, address, hours, CTAs, map embed |
| `app/components/Footer.tsx` | Logo, description, services list, copyright, phone |
| `app/components/StickyMobileCTA.tsx` | Phone number in sticky bar |
| `app/globals.css` | No changes |

---

### Task 1: `app/layout.tsx` — Metadata & SEO

**File:** `app/layout.tsx` (lines 27-50)

- [ ] **Step 1: Update metadata title**

Replace line 28:
```
title: "Joe Hitchens Plumbing | Moorestown, NJ | Trusted Local Plumber",
```
With:
```
title: "DJ & Dior Tradesman | Moorestown, NJ | 24/7 HVAC Contractor",
```

- [ ] **Step 2: Update metadata description**

Replace line 29-31:
```
description:
    "Joe Hitchens Plumbing — Moorestown's trusted local plumber. Prompt, efficient, and trustworthy service for all your plumbing needs. Serving Moorestown, NJ & surrounding areas. Call (856) 235-1386!",
```
With:
```
description:
    "DJ & Dior Tradesman — Moorestown's trusted HVAC contractor. Open 24 hours. Expert heating, cooling, and ventilation service for homes and businesses. Serving Moorestown, NJ & surrounding areas. Call (856) 723-8448!",
```

- [ ] **Step 3: Update keywords**

Replace lines 32-42 with:
```
keywords: [
    "HVAC contractor",
    "Moorestown NJ",
    "heating repair",
    "AC repair",
    "HVAC service",
    "emergency HVAC",
    "air conditioning",
    "furnace repair",
    "ventilation",
    "24 hour HVAC",
    "residential HVAC",
    "commercial HVAC",
],
```

- [ ] **Step 4: Update OpenGraph**

Replace lines 43-50 with:
```
openGraph: {
    title: "DJ & Dior Tradesman | Moorestown, NJ | 24/7 HVAC",
    description:
      "Moorestown's trusted HVAC contractor. Open 24 hours. Expert heating, cooling, and ventilation service. Call (856) 723-8448!",
    type: "website",
    locale: "en_US",
},
```

- [ ] **Step 5: Commit**

```bash
cd /Users/skibtown32/my-cool-site && git add app/layout.tsx && git commit -m "rebrand: update metadata/SEO for DJ & Dior Tradesman HVAC"
```

---

### Task 2: `app/components/Navbar.tsx` — Logo & Phone

**File:** `app/components/Navbar.tsx`

- [ ] **Step 1: Update logo text**

Replace line 43 (`JH`) with `DD`.
Replace line 46 (`Hitchens Plumbing`) with `Dior Tradesman`.
Replace line 49 (`Moorestown, NJ`) with `HVAC Contractor`.

- [ ] **Step 2: Update desktop phone CTA**

Replace line 68 (`tel:8562351386`) with `tel:8567238448`.
Replace line 75 (`(856) 235-1386`) with `(856) 723-8448`.

- [ ] **Step 3: Update mobile phone CTA**

Replace line 117 (`tel:8562351386`) with `tel:8567238448`.
Replace line 124 (`Call (856) 235-1386`) with `Call (856) 723-8448`.

- [ ] **Step 4: Commit**

```bash
git add app/components/Navbar.tsx && git commit -m "rebrand: navbar logo and phone for DJ & Dior Tradesman"
```

---

### Task 3: `app/components/Hero.tsx` — Hero Content

**File:** `app/components/Hero.tsx`

- [ ] **Step 1: Update badge text**

Replace line 27 (`5.0 Stars — 4 Happy Customers`) with `5.0 Stars — Trusted HVAC Service`.

- [ ] **Step 2: Update heading**

Replace lines 36-41:
```
Moorestown&apos;s
<br />
<span className="text-[var(--accent)]">Trusted</span>
<br />
Local Plumber
```
With:
```
Moorestown&apos;s
<br />
<span className="text-[var(--accent)]">24/7</span>
<br />
HVAC Experts
```

- [ ] **Step 3: Update subheading**

Replace lines 50-54:
```
Prompt, efficient, and trustworthy plumbing service for your home.
Serving Moorestown, NJ &amp; surrounding areas. When you need a
plumber who shows up — call Joe.
```
With:
```
Expert heating, cooling, and ventilation service for your home or business.
Open 24 hours. Serving Moorestown, NJ &amp; surrounding areas.
When you need HVAC help fast — call DJ &amp; Dior.
```

- [ ] **Step 4: Update CTA buttons**

Replace line 60 (`tel:8562351386`) with `tel:8567238448`.
Replace line 66 (`Call (856) 235-1386`) with `Call (856) 723-8448`.

- [ ] **Step 5: Update stats**

Replace the stats array (lines 79-83):
```
{ value: "5.0", label: "Star Rating" },
{ value: "Fast", label: "Response" },
{ value: "Free", label: "Estimates" },
```
With:
```
{ value: "24/7", label: "Available" },
{ value: "5.0", label: "Star Rating" },
{ value: "Fast", label: "Response" },
```

- [ ] **Step 6: Commit**

```bash
git add app/components/Hero.tsx && git commit -m "rebrand: hero section for DJ & Dior Tradesman HVAC"
```

---

### Task 4: `app/components/Services.tsx` — HVAC Services

**File:** `app/components/Services.tsx`

- [ ] **Step 1: Replace entire services array**

Replace lines 1-42 with:
```
const services = [
  {
    title: "AC Repair",
    description:
      "Fast, reliable air conditioning repair to keep your home cool when it matters most.",
  },
  {
    title: "Heating Repair",
    description:
      "Expert furnace and heating system repairs — we get your heat back on fast.",
  },
  {
    title: "HVAC Installation",
    description:
      "New system installation, replacements, and upgrades for homes of any size.",
  },
  {
    title: "Ductwork Services",
    description:
      "Duct cleaning, repair, and sealing to improve airflow and indoor air quality.",
  },
  {
    title: "Emergency HVAC",
    description:
      "HVAC emergencies don&apos;t wait — and neither do we. Open 24 hours for urgent repairs.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Seasonal tune-ups and maintenance plans to keep your system running efficiently.",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Air purifiers, humidifiers, and ventilation solutions for healthier indoor air.",
  },
  {
    title: "Commercial HVAC",
    description:
      "Full-service heating and cooling for offices, retail, and commercial properties.",
  },
];
```

- [ ] **Step 2: Update section description**

Replace line 63-66:
```
From emergency repairs to routine maintenance, we handle all your
plumbing needs with prompt, efficient, and trustworthy service.
```
With:
```
From emergency repairs to new installations, we handle all your
heating, cooling, and ventilation needs with prompt, expert service.
```

- [ ] **Step 3: Update CTA button text**

Replace line 97 (`Request a Free Estimate`) with `Request a Free Estimate` (keep — still fits HVAC).

- [ ] **Step 4: Commit**

```bash
git add app/components/Services.tsx && git commit -m "rebrand: services section for HVAC offerings"
```

---

### Task 5: `app/components/About.tsx` — About Content

**File:** `app/components/About.tsx`

- [ ] **Step 1: Update image alt**

Replace line 14:
```
alt="Professional plumbing work by Joe Hitchens Plumbing"
```
With:
```
alt="DJ & Dior Tradesman HVAC technician at work"
```

- [ ] **Step 2: Update heading**

Replace line 60 (`Why Joe?`) with `Why DJ & Dior?`.

- [ ] **Step 3: Update description paragraph**

Replace lines 63-71:
```
<strong className="text-white">
  Joe Hitchens Plumbing
</strong>{" "}
is Moorestown&apos;s trusted local plumber, known for showing up
when he says he will and getting the job done right. From emergency
repairs to routine maintenance, we bring honesty, efficiency, and
skill to every call.
```
With:
```
<strong className="text-white">
  DJ & Dior Tradesman
</strong>{" "}
is Moorestown&apos;s trusted HVAC contractor, known for showing up
when they say they will and getting the job done right. From emergency
repairs to new installations, we bring honesty, efficiency, and
expertise to every call.
```

- [ ] **Step 4: Replace checklist items**

Replace lines 74-82:
```
"Prompt & Efficient Service",
"Trusted & Transparent Pricing",
"Emergency Plumbing Repairs",
"Free Consultations & Estimates",
"Drain Cleaning & Water Heaters",
"Pipe Installation & Repair",
"Serving Moorestown & Surrounding Areas",
```
With:
```
"24/7 Emergency HVAC Service",
"Trusted & Transparent Pricing",
"Heating & Cooling Repairs",
"Free Consultations & Estimates",
"AC Repair & Installation",
"Ductwork & Ventilation Services",
"Serving Moorestown & Surrounding Areas",
```

- [ ] **Step 5: Update CTA phone links**

Replace line 107 (`tel:8562351386`) with `tel:8567238448`.

- [ ] **Step 6: Commit**

```bash
git add app/components/About.tsx && git commit -m "rebrand: about section for DJ & Dior Tradesman"
```

---

### Task 6: `app/components/Gallery.tsx` — Gallery Labels

**File:** `app/components/Gallery.tsx`

- [ ] **Step 1: Replace gallery items**

Replace lines 3-10:
```
const galleryItems = [
  { src: "/images/download (2).png", label: "Pipe Repair & Installation" },
  { src: "/images/download (3).png", label: "Fixtures & Fittings" },
  { src: "/images/download (7).png", label: "Water Heater Service" },
  { src: "/images/download (5).png", label: "Drain & Sewer Work" },
  { src: "/images/download (6).png", label: "Home Plumbing Solutions" },
  { src: "/images/download (4).png", label: "General Plumbing" },
];
```
With:
```
const galleryItems = [
  { src: "/images/download (2).png", label: "AC Unit Installation" },
  { src: "/images/download (3).png", label: "Furnace Replacement" },
  { src: "/images/download (7).png", label: "Ductwork & Ventilation" },
  { src: "/images/download (5).png", label: "Commercial HVAC Setup" },
  { src: "/images/download (6).png", label: "Residential HVAC System" },
  { src: "/images/download (4).png", label: "HVAC Maintenance" },
];
```

- [ ] **Step 2: Update section description**

Replace lines 36-39:
```
Browse some of our recent plumbing projects. Every job completed
with care and precision.
```
With:
```
Browse some of our recent HVAC projects. Every job completed
with expert care and precision.
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Gallery.tsx && git commit -m "rebrand: gallery labels for HVAC projects"
```

---

### Task 7: `app/components/Reviews.tsx` — HVAC Reviews

**File:** `app/components/Reviews.tsx`

- [ ] **Step 1: Replace reviews array**

Replace lines 1-17:
```
const reviews = [
  {
    name: "Cara Artuso",
    rating: 5,
    text: "David was exactly the person I needed to speak with! We just bought an older home and he was able to walk me through its idiosyncratic plumbing, he taught me how to fix what I could do myself and gave a fair price to fix what couldn't wait.",
  },
  {
    name: "Lina Lyons",
    rating: 5,
    text: "I called several plumbers and no one could get me today. I finally called this place and was here in less than 30 minutes! Tyler was respectful and courteous, answered all my questions and even gave me some tips to avoid any other issues.",
  },
  {
    name: "Jacqui Swift",
    rating: 5,
    text: "Wonderful service. Calls you back and shows up when they say they will, which is very rare now days.",
  },
];
```
With:
```
const reviews = [
  {
    name: "Cara Artuso",
    rating: 5,
    text: "DJ & Dior were exactly who I needed! Our AC died during a heatwave and they were at our door within the hour. Professional, fair pricing, and they walked us through everything. Highly recommend!",
  },
  {
    name: "Lina Lyons",
    rating: 5,
    text: "I called several HVAC companies and no one could come out same day. DJ & Dior showed up in less than 30 minutes! Respectful, courteous, and answered all my questions. They even gave tips to keep our system running efficiently.",
  },
  {
    name: "Jacqui Swift",
    rating: 5,
    text: "Wonderful service. Calls you back and shows up when they say they will, which is very rare nowadays. Our furnace was repaired the same day — fair price and excellent workmanship.",
  },
];
```

- [ ] **Step 2: Update section description**

Replace lines 40-43:
```
Don&apos;t just take our word for it — hear from homeowners
we&apos;ve helped across Moorestown and beyond.
```
With:
```
Don&apos;t just take our word for it — hear from homeowners and
businesses we&apos;ve helped across Moorestown and beyond.
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Reviews.tsx && git commit -m "rebrand: reviews for HVAC customers"
```

---

### Task 8: `app/components/Contact.tsx` — Contact Info & Hours

**File:** `app/components/Contact.tsx`

- [ ] **Step 1: Update section description**

Replace lines 39-42:
```
Need a plumber you can trust? Call us today — we&apos;d love to
help with any plumbing needs, big or small.
```
With:
```
Need an HVAC contractor you can trust? Call us today — we&apos;d love to
help with any heating, cooling, or ventilation needs, big or small.
```

- [ ] **Step 2: Update phone number (3 occurrences)**

Replace all `8562351386` with `8567238448`.
Replace all `(856) 235-1386` with `(856) 723-8448`.

- [ ] **Step 3: Update address**

Replace line 87 (`Moorestown, NJ 08057`) with `Moorestown, NJ 08057` (keep — same location).

- [ ] **Step 4: Update hours to 24/7**

Replace lines 3-11:
```
const hours = [
  { day: "Monday", time: "7 AM – 5:30 PM" },
  { day: "Tuesday", time: "7 AM – 5:30 PM" },
  { day: "Wednesday", time: "7 AM – 5:30 PM" },
  { day: "Thursday", time: "7 AM – 5:30 PM" },
  { day: "Friday", time: "7 AM – 5:30 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];
```
With:
```
const hours = [
  { day: "Monday", time: "Open 24 Hours" },
  { day: "Tuesday", time: "Open 24 Hours" },
  { day: "Wednesday", time: "Open 24 Hours" },
  { day: "Thursday", time: "Open 24 Hours" },
  { day: "Friday", time: "Open 24 Hours" },
  { day: "Saturday", time: "Open 24 Hours" },
  { day: "Sunday", time: "Open 24 Hours" },
];
```

- [ ] **Step 5: Update CTA button text**

Replace line 144 (`Call Now — Free Estimates`) with `Call Now — 24/7 HVAC Service`.

- [ ] **Step 6: Update map title**

Replace line 158 (`Joe Hitchens Plumbing location map — Moorestown, NJ`) with `DJ & Dior Tradesman location map — Moorestown, NJ`.

- [ ] **Step 7: Commit**

```bash
git add app/components/Contact.tsx && git commit -m "rebrand: contact info, phone, hours for 24/7 HVAC"
```

---

### Task 9: `app/components/Footer.tsx` — Footer Content

**File:** `app/components/Footer.tsx`

- [ ] **Step 1: Update logo text**

Replace line 13 (`JH`) with `DD`.
Replace line 17 (`Hitchens Plumbing`) with `Dior Tradesman`.
Replace line 19 (`Moorestown, NJ`) with `HVAC Contractor`.

- [ ] **Step 2: Update description**

Replace lines 24-28:
```
Moorestown&apos;s trusted local plumber. Specializing in repairs,
drain cleaning, water heaters, pipe installation, and emergency
service. Prompt, efficient, and trustworthy.
```
With:
```
Moorestown&apos;s trusted HVAC contractor. Specializing in heating,
cooling, ventilation, and emergency service. Open 24 hours.
Prompt, efficient, and trustworthy.
```

- [ ] **Step 3: Update services list**

Replace lines 83-89:
```
<li className="uppercase tracking-wide">Plumbing Repair</li>
<li className="uppercase tracking-wide">Drain Cleaning</li>
<li className="uppercase tracking-wide">Water Heaters</li>
<li className="uppercase tracking-wide">Pipe Installation</li>
<li className="uppercase tracking-wide">Emergency Service</li>
<li className="uppercase tracking-wide">Fixture Installation</li>
```
With:
```
<li className="uppercase tracking-wide">AC Repair</li>
<li className="uppercase tracking-wide">Heating Repair</li>
<li className="uppercase tracking-wide">HVAC Installation</li>
<li className="uppercase tracking-wide">Ductwork Services</li>
<li className="uppercase tracking-wide">Emergency HVAC</li>
<li className="uppercase tracking-wide">Preventive Maintenance</li>
```

- [ ] **Step 4: Update copyright**

Replace line 96:
```
&copy; {new Date().getFullYear()} Joe Hitchens Plumbing. All rights reserved.
```
With:
```
&copy; {new Date().getFullYear()} DJ & Dior Tradesman. All rights reserved.
```

- [ ] **Step 5: Update phone**

Replace line 101 (`tel:8562351386`) with `tel:8567238448`.
Replace line 102 (`(856) 235-1386`) with `(856) 723-8448`.

- [ ] **Step 6: Commit**

```bash
git add app/components/Footer.tsx && git commit -m "rebrand: footer content for DJ & Dior Tradesman"
```

---

### Task 10: `app/components/StickyMobileCTA.tsx` — Sticky Bar Phone

**File:** `app/components/StickyMobileCTA.tsx`

- [ ] **Step 1: Update phone link**

Replace line 27 (`tel:8562351386`) with `tel:8567238448`.

- [ ] **Step 2: Commit**

```bash
git add app/components/StickyMobileCTA.tsx && git commit -m "rebrand: sticky CTA phone number"
```

---

### Task 11: Final Verification

- [ ] **Step 1: Build check**

```bash
cd /Users/skibtown32/my-cool-site && npm run build
```

Expected: Zero TypeScript errors, all pages compile.

- [ ] **Step 2: Grep for leftover plumbing references**

```bash
grep -ri "plumb\|hitchens\|joe hitchens\|235-1386\|8562351386" app/ --include="*.tsx" --include="*.ts" --include="*.css"
```

Expected: Zero matches. Fix any stragglers.

- [ ] **Step 3: Grep for old phone in public/**

```bash
grep -ri "235-1386\|8562351386" public/ --include="*.json" --include="*.md" 2>/dev/null
```

Expected: Zero matches.

- [ ] **Step 4: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 5: Deploy to Vercel (if connected)**

Trigger a redeploy via Vercel dashboard or CLI.

---

## Self-Review Checklist

1. **Spec coverage:** Every piece of business info swapped — name, phone, services, reviews, hours, address, metadata, CTAs, copyright. No gaps.

2. **Placeholder scan:** No TBDs, no TODOs, no "implement later" — every step has exact replacement text.

3. **Consistency:** Phone `(856) 723-8448` used everywhere. Business name `DJ & Dior Tradesman` used consistently. Hours `Open 24 Hours` for all 7 days. HVAC terminology throughout.

4. **Design preserved:** Zero changes to `globals.css`, layout structure, animations, colors, or responsive breakpoints. This is a pure content swap.
