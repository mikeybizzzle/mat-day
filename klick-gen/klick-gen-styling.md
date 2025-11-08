# Klick-Gen Styling Instructions

This file contains instructions for creating CSS classes for the Klick-Gen project.

## Naming Convention

All CSS classes must follow this format:
```
klick-gen-{component-name}
```

### Examples:
- `klick-gen-button`
- `klick-gen-card`
- `klick-gen-header`
- `klick-gen-nav-item`
- `klick-gen-hero-section`

## Class Creation Guidelines

### 1. Naming Rules
- **Prefix**: All classes MUST start with `klick-gen-`
- **Descriptive**: Use clear, semantic names that describe the component's purpose
- **Kebab-case**: Use lowercase with hyphens (e.g., `klick-gen-primary-button`)
- **Modifiers**: Add state or variant modifiers with additional hyphens (e.g., `klick-gen-button-primary`, `klick-gen-button-disabled`)

### 2. Component Structure
Organize related styles hierarchically:
```css
.klick-gen-card { }
.klick-gen-card-header { }
.klick-gen-card-body { }
.klick-gen-card-footer { }
```

### 3. Modifier Pattern
Use BEM-inspired modifiers for variants:
```css
.klick-gen-button { }
.klick-gen-button-primary { }
.klick-gen-button-secondary { }
.klick-gen-button-large { }
.klick-gen-button-small { }
```

### 4. State Classes
Indicate component states clearly:
```css
.klick-gen-input-focused { }
.klick-gen-menu-active { }
.klick-gen-tab-selected { }
.klick-gen-item-disabled { }
```

## Modern CSS Best Practices

### 1. Use CSS Custom Properties (Variables)
Define reusable design tokens:
```css
:root {
  --klick-gen-color-primary: #3b82f6;
  --klick-gen-color-secondary: #8b5cf6;
  --klick-gen-spacing-sm: 0.5rem;
  --klick-gen-spacing-md: 1rem;
  --klick-gen-spacing-lg: 2rem;
  --klick-gen-radius-sm: 0.25rem;
  --klick-gen-radius-md: 0.5rem;
  --klick-gen-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --klick-gen-shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}
```

### 2. Mobile-First Responsive Design
Start with mobile styles, enhance for larger screens:
```css
.klick-gen-container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .klick-gen-container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .klick-gen-container {
    padding: 3rem;
  }
}
```

### 3. Flexbox and Grid Layouts
Prefer modern layout methods:
```css
.klick-gen-flex-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.klick-gen-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

### 4. Smooth Transitions
Add subtle animations for better UX:
```css
.klick-gen-button {
  transition: all 0.2s ease-in-out;
}

.klick-gen-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--klick-gen-shadow-md);
}
```

### 5. Accessibility Considerations
- Ensure sufficient color contrast (WCAG AA minimum)
- Include focus states for keyboard navigation
- Use semantic HTML with appropriate ARIA attributes
```css
.klick-gen-button:focus-visible {
  outline: 2px solid var(--klick-gen-color-primary);
  outline-offset: 2px;
}
```

## Visual Aesthetics

### 1. Consistent Spacing
Use a spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)

### 2. Typography Hierarchy
```css
.klick-gen-heading-1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
}

.klick-gen-heading-2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  line-height: 1.3;
}

.klick-gen-body {
  font-size: 1rem;
  line-height: 1.6;
}
```

### 3. Color System
- Primary: Main brand color for CTAs
- Secondary: Supporting actions
- Neutral: Text and backgrounds
- Semantic: Success, warning, error states

### 4. Modern Effects
```css
/* Glassmorphism */
.klick-gen-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Subtle shadows */
.klick-gen-elevated {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Gradient backgrounds */
.klick-gen-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Responsive Breakpoints

```css
/* Mobile: < 640px (base styles) */
/* Tablet: 640px - 1024px */
@media (min-width: 640px) { }

/* Desktop: 1024px - 1536px */
@media (min-width: 1024px) { }

/* Large Desktop: > 1536px */
@media (min-width: 1536px) { }
```

## Performance Optimization

1. **Minimize specificity**: Keep selectors simple
2. **Avoid `!important`**: Use proper cascade instead
3. **Group related properties**: Improve readability
4. **Use shorthand**: When appropriate
5. **Optimize animations**: Use `transform` and `opacity` for better performance

## Example Component

```css
.klick-gen-card {
  background: white;
  border-radius: var(--klick-gen-radius-md);
  box-shadow: var(--klick-gen-shadow-sm);
  padding: var(--klick-gen-spacing-lg);
  transition: box-shadow 0.3s ease;
}

.klick-gen-card:hover {
  box-shadow: var(--klick-gen-shadow-md);
}

.klick-gen-card-header {
  margin-bottom: var(--klick-gen-spacing-md);
  padding-bottom: var(--klick-gen-spacing-md);
  border-bottom: 1px solid #e5e7eb;
}

.klick-gen-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.klick-gen-card-body {
  color: #4b5563;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .klick-gen-card {
    padding: var(--klick-gen-spacing-lg) calc(var(--klick-gen-spacing-lg) * 1.5);
  }
}
```
