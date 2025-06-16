# Bank Accordion React

A modern, accessible accordion UI for a demp project, built with React, Vite, and TypeScript.  
Includes dark mode, Font Awesome icons, and responsive design.

## Features

- Accessible accordion with keyboard navigation
- Grouped accordions with context
- Font Awesome icon support
- Dark mode toggle
- Responsive/mobile-friendly styles
- Unit tests with Vitest and Testing Library

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Testing

```sh
npm run test
```

## Project Structure

```
src/
  components/
    accordion/
      Accordion.tsx
      AccordionGroup.tsx
      AccordionContext.ts
      Accordion.scss
    buttons/
      PrimaryButton.tsx
      SecondaryButton.tsx
    DarkModeToggle.tsx
  pages/
    Home.tsx
  index.scss
```

## Accessibility

- Accordions use proper ARIA roles and keyboard navigation.
- Buttons and links have descriptive `aria-label`s.

## Customization

- **Accordion:** Following the WAI-ARIA Accordion Pattern.
- **Icons:** Uses [Font Awesome](https://fontawesome.com/).
- **Dark Mode:** Toggle via the button in the top left.

## License

MIT