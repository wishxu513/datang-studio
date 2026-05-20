# **App Name**: Datang Interiors

## Core Features:

- Initial Loading & Intro Experience: A full-screen loading animation with custom logo and progress bar, preloading essential assets (images, hero video). Followed by a single-play, full-screen hero video intro, gracefully fading into the main homepage upon completion.
- Homepage & Core Content Display: Renders the main homepage layout including Datang Logo, tagline, and navigation links (ABOUT, PROJECT, WORKFLOW, CONTACT) with active state highlighting. This feature also covers displaying content for the About, Workflow, Contact Information, and Footer sections.
- Project Gallery & Filtering: Displays all projects in a two-column grid with categorization tabs (All, Residential, Commercial, Show Homes). Project thumbnails feature a grayscale to color hover effect with project name fade-in. Project data is managed using a local JSON array.
- Project Detail Pages: Provides dedicated pages for individual projects (/projects/[slug]), showcasing project main image, name, category, year, location, size, design description, and an image gallery. Includes navigation to previous/next projects and back to the gallery. Project data is sourced from a local JSON array.
- Contact Form & Submission: An interactive contact form for user inquiries (name, phone, email, space type, budget, needs) with backend submission handling and success messaging upon completion.
- Vertical Section Navigation: Adds a vertical dot navigation on the right side of the screen, providing smooth scrolling and direct access to ABOUT, PROJECT, WORKFLOW, and CONTACT sections.
- Responsive Design & SEO: Ensures the application's layout adapts seamlessly across desktop and mobile devices. Implements essential SEO metadata and Open Graph images for optimal search engine visibility and social media sharing.

## Style Guidelines:

- Primary color: Warm gold (#D8B98A), selected for interactive elements and active navigation states, evoking a sense of understated luxury. HSL: 38, 38%, 73%.
- Main background: Pure white (#FFFFFF), providing a clean, spacious, and minimalist aesthetic as specified for the homepage and content areas.
- Accent color: Muted rose-tan (#C7978B), an analogous complement to the primary gold, used for subtle highlights and elegant details. HSL: 8, 25%, 60%.
- Secondary background: Soft cream (#F7F4EE), used specifically for the footer background, offering a gentle warmth to break the white dominance. HSL: 37, 45%, 97%.
- Text and dark elements: Deep charcoal (#2A3034), used for main body text, navigation, and primary UI elements to provide strong contrast and a modern, refined feel. HSL: 205, 11%, 18%.
- A font pairing of 'Noto Sans TC' (sans-serif) for all Chinese text and 'Inter' (sans-serif) for Latin characters, numbers, and technical details, ensuring clear readability and a modern aesthetic.
- Minimalist, clean line-art style icons that complement the sophisticated and elegant design, avoiding unnecessary visual clutter.
- Spacious, white-dominated layouts with abundant negative space to highlight content and convey a premium, clean aesthetic. Responsive design transitioning from staggered two-column desktop grids to streamlined single-column mobile views, including two-column project listings.
- Subtle, smooth animations limited to transitions (like hero video fade-out to homepage), elegant image hover effects (grayscale to color for projects), and smooth scrolling for navigation points, prioritizing stability and sophistication over flashy movement.