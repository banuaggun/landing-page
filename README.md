# Tree Foundation — Interactive Environmental Platform

An interactive environmental platform designed to communicate sustainability initiatives, explore ecosystem-focused programs, and turn environmental impact into a clear and engaging digital experience.

The project combines a custom Figma design with a responsive ReactJS implementation, interactive program pages, dynamic impact experiences, a dedicated contact experience, and reusable UI components.

> **Interactive environmental platform with ecosystem selection, dynamic impact calculations, validated planting workflow, personalized certificates, contact interaction, and print/PDF support.**

---

## 🌱 Project Overview

Tree Foundation is a concept environmental platform focused on ecosystem restoration, biodiversity, carbon offsetting, and forest monitoring.

The project was designed and developed from scratch with a strong focus on:

- Clear environmental storytelling
- Interactive user experiences
- Responsive layouts
- Reusable React components
- Consistent visual language
- Meaningful calls to action
- Program-based content architecture
- Interactive communication and contact experiences

The goal was to create more than a static landing page by building an experience where users can explore environmental programs, discover environmental projects, calculate their potential impact, personalize their environmental commitment, and interact with the foundation through dedicated workflows.

---

## ✨ Features

### Interactive Environmental Experience

- Ecosystem selection
- Dynamic impact calculations
- Validated planting workflow
- Personalized certificates
- Print / Save PDF certificate support
- Interactive environmental impact sections
- Clickable project locations
- Project information cards
- Program-based navigation
- Multiple CTA entry points for the planting workflow
- Dedicated contact experience

### 🌱 Planting & Certificate Workflow

The main action flow allows users to turn their environmental commitment into a personalized digital experience.

When users click primary action buttons such as **Plant a Tree**, **Join the Movement**, **Get Started**, or **Let's Save the Future**, they are guided through an interactive planting workflow.

The process includes:

1. **Choose Your Ecosystem**

   Users can select an ecosystem or environmental project from a dropdown.

2. **Scale Your Impact**

   Users specify the number of planting units they want to allocate.

   The interface dynamically calculates the estimated:
   - CO₂ reduction
   - Investment value
   - Environmental commitment

3. **Personal Details**

   Users provide their name and email address.

   The form includes client-side validation for required fields and email format.

4. **Certificate Generation**

   After successful submission, a personalized **Ecosystem Guardian Certificate** is generated using the submitted information.

   The certificate includes:
   - Participant name
   - Selected ecosystem
   - Number of allocated units
   - Estimated CO₂ impact
   - Deployment date
   - Certificate ID

5. **Print / Save as PDF**

   Users can print the generated certificate or use the browser's print dialog to save it as a PDF.

This workflow was designed to make the user's environmental contribution feel tangible and personal rather than ending with a simple form submission.

### 📩 Contact Experience

The platform includes a dedicated **Contact** page designed to provide a direct and interactive communication experience.

The page introduces the contact experience with the message:

> **Let's Build a Greener Future**

Users can select the reason they want to get in touch through an interactive dropdown before completing the contact form.

The contact workflow includes:

- Contact reason selection
- Full name input
- Email address input
- Message field
- Client-side email validation
- Required field validation
- Interactive error states
- Submission confirmation modal
- Return-to-home interaction

After a valid submission, the interface displays a **Message Received** confirmation state to provide clear feedback to the user.

The Contact page is implemented as a dedicated React page and uses reusable form components rather than a page-specific one-off form.

> **Note:** The current implementation is frontend-focused. The contact form validates the submitted data and displays a successful submission state, but it does not currently connect to a backend email or database service.

### Session Storage

The project uses the **Browser Session Storage API** to maintain relevant temporary user state during the current browsing session.

This allows selected information and interaction state to persist while users navigate through the experience without requiring a backend database.

---

## 📄 Program Pages

The platform includes dedicated pages for:

- **Biodiversity & Ecosystems**
- **Carbon Offset Program**
- **Forest Monitoring**

Each program has its own content structure while maintaining a consistent visual system throughout the platform.

### Program 01 — Biodiversity & Ecosystems

Focuses on protecting biodiversity, restoring habitats, strengthening ecosystems, and supporting local communities.

### Program 02 — Carbon Offset Program

Focuses on responsible carbon offset initiatives, verified projects, and long-term climate impact.

### Program 03 — Forest Monitoring

Focuses on monitoring forest ecosystems through fieldwork, data, and technology.

---

## 🗺️ Interactive Impact Map

The Global Impact section uses an interactive map to showcase environmental projects.

Project locations can be selected to reveal additional information such as:

- Project name
- Project duration
- Seeds / trees
- Target impact
- Project-specific information
- Call-to-action

This interaction was designed to transform environmental statistics into an explorable experience.

Rather than presenting environmental impact only as static numbers, the map allows users to explore individual project locations and discover additional project information.

---

## 🌍 Environmental Programs

The content architecture is organized around three main environmental areas.

### Biodiversity & Ecosystems

Protecting species, restoring habitats, strengthening ecosystems, and supporting local communities.

### Carbon Offset Program

Supporting measurable climate action through responsible and transparent carbon initiatives.

### Forest Monitoring

Using field observations, data, and technology to understand forest health and identify environmental risks.

---

## 🎨 Design Process

The visual design of the project was created in **Figma** before development.

The design process included:

- Layout and grid creation
- Typography selection
- Color system
- Component design
- Responsive layout planning
- Page hierarchy
- Navigation structure
- Program page design
- Impact and map sections
- Contact page design
- Form and interaction states

The final interface was then translated from the Figma design into a functional React application.

### Design → Development

The project was intentionally developed from the original design rather than relying on a pre-built template.

This allowed the visual system, spacing, typography, interactions, and reusable components to remain consistent between the design and implementation.

---

## 💻 Tech Stack

### Frontend

- ReactJS
- JavaScript
- HTML5
- CSS3
- Vite
- Browser Session Storage API

### Design

- Figma

### Development Approach

- Component-based architecture
- Reusable React components
- Custom CSS
- Responsive layouts
- Page-based content structure
- Interactive UI states
- Client-side form validation
- Session-based state persistence
- Browser print / PDF functionality
- Reusable form components

No CSS framework was used. The interface was styled using **plain CSS** to have full control over the visual design and responsive behavior.

---

## 🧩 Component Architecture

The project is structured around reusable React components instead of building every page independently.

Examples include:

- Navigation
- Footer
- Impact sections
- Interactive map elements
- Project cards
- Program sections
- Action form
- Certificate
- Contact page
- Contact form
- Dropdown
- Form input
- Form message
- CTA / Reinforce sections
- Shared typography styles

The **ActionForm** component handles the main planting workflow, including ecosystem selection, quantity input, impact calculations, user details, validation, and certificate generation.

The **Certificate** component creates a personalized certificate based on the user's submitted information and provides a print / Save PDF action.

The **ContactPage** component combines the contact introduction, reason selection, reusable contact form, and reinforcement section into a dedicated communication experience.

The **ContactForm** component manages form state, email validation, message validation, error states, and submission feedback.

This component-based approach makes it easier to maintain visual consistency and reuse sections across different pages.

---

## 📑 Pages

### Home

The main landing experience introduces the platform, its environmental purpose, and the primary user journey.

### About

The About page presents the foundation's mission, approach, environmental impact, and global projects.

### Programs

The platform contains three main environmental programs:

- Biodiversity & Ecosystems
- Carbon Offset Program
- Forest Monitoring

### Contact

The Contact page provides a dedicated communication experience where users can choose a reason for contacting the foundation and submit their name, email address, and message.

The page includes:

- Interactive contact reason selection
- Form validation
- Email format validation
- Required field validation
- Submission feedback
- Confirmation modal
- Return-to-home interaction

The contact experience was designed to feel like a natural extension of the platform rather than a generic standalone form.

---

## 📱 Responsive Implementation

The interface was developed to adapt to different screen sizes while preserving the original visual hierarchy.

Responsive considerations include:

- Flexible layouts
- Responsive typography
- Mobile navigation
- Adaptive spacing
- Flexible content sections
- Mobile-friendly interactions
- Responsive cards and map elements
- Responsive forms
- Responsive certificate layouts
- Responsive contact experience

The goal was to maintain a consistent visual and interactive experience across:

- Desktop
- Tablet
- Mobile

---

## 🎯 Project Goals

The main goals of the project were to:

1. Translate a detailed Figma design into a functional web experience.
2. Build reusable React components.
3. Create a clear information architecture for multiple program pages.
4. Develop interactive environmental content instead of a purely static landing page.
5. Build a complete planting and certificate workflow.
6. Implement client-side form validation and dynamic calculations.
7. Create a dedicated and reusable contact experience.
8. Maintain visual consistency across all pages.
9. Create a responsive experience without relying on a CSS framework.
10. Use browser-based Session Storage to manage temporary user state.
11. Provide a personalized certificate with print / Save PDF functionality.
12. Practice building a complete frontend portfolio project from design to implementation.

---

## 🔗 Project Links

### Live Demo

[View the live Tree Foundation website](https://landing-page-khaki-five-41.vercel.app/)

### Behance

The original UI/UX design and visual presentation were created in Figma and published as a project on Behance.

[View the design on Behance](https://www.behance.net/gallery/252660503/Green-Foundation-Landing-Page)

### Portfolio

This project is also featured in my personal portfolio, where you can explore this project along with other design and frontend development work.

[Visit my portfolio](https://portfolio-banuaggun.vercel.app/)

### LinkedIn

Connect with me on LinkedIn to explore my professional background, experience, and other work.

[LinkedIn Profile](https://www.linkedin.com/in/banuaggun/?locale=en-US)

> Interested in more of my work? Feel free to explore my portfolio and professional profiles to see other projects I've designed and developed.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/banuaggun/landing-page.git
```

Navigate to the project:

```bash
cd landing-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local Vite development server.

---

## 📌 What I Worked On

This project covers the complete design-to-development workflow:

- UI/UX design in Figma
- Visual design system
- Responsive layout design
- Page architecture
- React component development
- Custom CSS implementation
- Interactive UI development
- Program page creation
- Navigation and page connections
- Interactive impact/map experience
- Ecosystem selection workflow
- Dynamic environmental impact calculations
- Client-side form validation
- Personalized certificate generation
- Print / Save PDF functionality
- Contact page development
- Contact form development
- Form validation and error states
- Submission confirmation experience
- Session Storage implementation
- Responsive behavior
- Portfolio presentation
- Behance case study presentation

The project was developed as a frontend-focused portfolio piece to demonstrate both **design implementation and React development skills**.

---

## 🌿 Final Thoughts

Tree Foundation was created as an exploration of how environmental platforms can communicate impact through thoughtful visual design and interaction.

Rather than presenting sustainability information as a collection of static pages, the project focuses on creating a more interactive journey where users can:

- Explore environmental programs
- Discover environmental projects
- Interact with project locations
- Calculate their potential contribution
- Personalize their environmental commitment
- Generate a digital environmental certificate
- Connect with the foundation through an interactive contact experience

The project combines visual storytelling with practical frontend interaction to demonstrate how a concept environmental platform can become a complete digital experience rather than simply a static landing page.

**Designed in Figma. Built with ReactJS, JavaScript, and pure CSS.**

---

© 2026 Banu Ağgün. All rights reserved.

[Portfolio](https://portfolio-banuaggun.vercel.app/) · [Behance](https://www.behance.net/gallery/252660503/Green-Foundation-Landing-Page) · [LinkedIn](https://www.linkedin.com/in/banuaggun/?locale=en-US)
