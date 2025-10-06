# Arogya Mitra Design System

## Color Palette

### Primary Colors
- **Green (Trust & Care)**: `#2E7D32` - Used for primary actions, branding
- **Teal (Calm & Fresh)**: `#00897B` - Secondary elements, accents
- **Blue (Reliability)**: `#1565C0` - Informational elements

### Neutral Base

#### Light Mode
- Background: `#F9FAFB`
- Card: `#FFFFFF`
- Border/Divider: `#E0E0E0`
- Text Primary: `#212121`
- Text Secondary: `#616161`

#### Dark Mode
- Background: `#121212`
- Card: `#1E1E1E`
- Border/Divider: `#2C2C2C`
- Text Primary: `#E0E0E0`
- Text Secondary: `#BDBDBD`

### Feedback Colors
- Success: `#43A047` (Green)
- Warning: `#F9A825` (Amber)
- Error: `#D32F2F` (Red)
- Info: `#0288D1` (Light Blue)

## Typography

### Font Sizes
- Extra Small: 12px
- Small: 14px
- Medium: 16px (Body)
- Large: 18px
- Extra Large: 20px
- Double Extra Large: 24px
- Heading: 28px
- Title: 32px

### Font Weights
- Regular: 400
- Medium: 500
- Bold: 700

### Line Heights
- Body Text: 1.5 (150%)
- Headings: 1.2 (120%)

## Spacing System (8px Grid)

- Extra Small: 4px
- Small: 8px
- Medium: 16px
- Large: 24px
- Extra Large: 32px
- Double Extra Large: 40px

## Border Radius

### Hierarchical Approach
- Card: 8px (slight roundness)
- Input: 12px (medium roundness)
- Button: 20px (more rounded)
- Small: 4px
- Large: 16px

**Design Principle**: Different components use different radii to establish visual hierarchy. Buttons are more rounded to draw attention, cards are subtle.

## Shadows

### Light Mode
- Small: shadowOpacity 0.05, shadowRadius 2, elevation 1
- Medium: shadowOpacity 0.1, shadowRadius 4, elevation 3
- Large: shadowOpacity 0.15, shadowRadius 8, elevation 5

### Dark Mode
- Small: shadowOpacity 0.3, shadowRadius 2, elevation 1
- Medium: shadowOpacity 0.4, shadowRadius 4, elevation 3
- Large: shadowOpacity 0.5, shadowRadius 8, elevation 5

## Component Design

### Buttons
- Minimum height: 48px (touch-friendly)
- Large horizontal padding: 24px-32px
- Clear contrast between variants
- Loading states with spinners
- Support for full-width layouts

**Variants**:
- Primary: Solid green background, white text
- Secondary: Solid teal background, white text
- Outline: Transparent with border, primary text color
- Danger: Solid red background, white text

### Cards
- Subtle shadows for depth
- 8px border radius
- Consistent padding: 16px
- Used for patient info, appointments, resources

### Inputs
- 48px minimum height
- 12px border radius
- Clear labels above fields
- Error states with red border and message
- Placeholder text in secondary color

### Status Badges
- Small rounded pills
- Colored backgrounds with 20% opacity
- Solid colored text
- Icon + text combination
- 6px indicator dot

## Icons

### Icon Library
- Lucide React Native exclusively
- Default size: 24px
- Consistent stroke width: 2px
- Use color prop for theming

### Icon Usage
- Navigation: 24px
- Cards: 20px
- Badges: 16px
- Small indicators: 14px

## Layout Guidelines

### Screen Structure
```
Header (40px top padding)
  - Title (28px)
  - Action buttons (40x40)

Content Area
  - Section spacing: 16px-24px
  - Card spacing: 12px
  - Horizontal padding: 24px

Bottom Tab Bar (65px height)
```

### Touch Targets
- Minimum: 48x48px
- Preferred: 56x56px for primary actions
- Spacing between targets: 8px minimum

### Grid System
- 2-column layouts for stats/metrics
- Single column for lists
- Responsive padding: 16px-24px

## Accessibility

### Color Contrast
- Text on light background: 4.5:1 minimum
- Text on dark background: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### Visual Feedback
- Clear active states
- Loading indicators for async actions
- Error messages inline with context
- Success confirmations

### Readability
- Adequate line spacing (150% for body)
- Sufficient font sizes (minimum 14px)
- Clear visual hierarchy
- High contrast between elements

## Theme Switching

### Adaptive Behavior
- Automatically follows system preference
- Manual toggle available in profile
- Smooth transitions between themes
- All components support both modes
- Consistent experience across modes

## Professional Healthcare Aesthetic

### Design Principles
1. **Trust**: Use green tones, clean layouts, consistent spacing
2. **Clarity**: High contrast, clear typography, obvious actions
3. **Efficiency**: Minimal clicks, quick access, offline-first
4. **Accessibility**: Large targets, simple navigation, multilingual

### What to Avoid
- Cartoonish illustrations
- Heavy purple/violet gradients (unless specifically requested)
- Inconsistent border radii across similar components
- Small touch targets (<48px)
- Low contrast text
- Cluttered interfaces
- Excessive animations

### What to Emphasize
- Clean, professional appearance
- Intuitive workflows
- Visible system status (online/offline)
- Clear data hierarchy
- Helpful error messages
- Consistent patterns
