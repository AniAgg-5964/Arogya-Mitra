# Arogya Mitra - Quick Start Guide

## Prerequisites

- Node.js 16 or higher
- npm or yarn
- Expo CLI (optional, but recommended)

## Installation

```bash
# Install dependencies
npm install

# Run type checking
npm run typecheck
```

## Running the App

### Web (Recommended for Development)
```bash
npm run dev
```
Then press `w` to open in web browser.

### iOS Simulator (requires macOS)
```bash
npm run dev
```
Then press `i` to open in iOS Simulator.

### Android Emulator
```bash
npm run dev
```
Then press `a` to open in Android Emulator.

### Physical Device
1. Install Expo Go app on your device
2. Run `npm run dev`
3. Scan the QR code with Expo Go

## Demo Authentication

The app uses demo authentication. Sign in with any email and password:

**Example credentials**:
- Email: `demo@example.com` (or any email)
- Password: `password` (or any password)

## Key Features to Explore

### 1. Dashboard Tab
- View overall statistics
- Check online/offline status
- Monitor sync queue
- See recent activity

### 2. Patients Tab
- Browse patient list
- Search patients
- View patient status (active/follow-up/critical)
- Add new patients (UI ready)

### 3. Appointments Tab
- View upcoming appointments
- See appointment types (ANC, PNC, Immunization, Follow-up)
- Check statistics (today/this week)
- Schedule new appointments (UI ready)

### 4. Resources Tab
- Browse educational content
- Filter by category
- Search resources
- Check offline availability
- Download resources (UI ready)

### 5. Profile Tab
- View user information
- Toggle dark/light mode
- Change language (6 languages available)
- Check sync status
- Sign out

## Testing Offline Mode

The app is built with offline-first architecture:

1. Open the app in web browser
2. Open DevTools (F12)
3. Go to Network tab
4. Select "Offline" from the throttling dropdown
5. The app continues to work fully offline
6. Data is queued for sync when online

## Switching Themes

### Automatic (System Preference)
The app automatically follows your system's dark/light mode preference.

### Manual Toggle
1. Go to Profile tab
2. Tap the theme toggle (Sun/Moon icon)
3. Theme switches immediately

## Changing Language

Currently supported languages:
- English (en)
- Hindi (hi)
- Telugu (te)
- Tamil (ta)
- Bengali (bn)
- Marathi (mr)

To change language:
1. Go to Profile tab
2. Tap on Language setting
3. Select your preferred language (current implementation shows selected language)

## Color Scheme

The app uses a healthcare-focused color palette:
- **Primary (Green)**: Trust & Care - #2E7D32
- **Secondary (Teal)**: Calm & Fresh - #00897B
- **Tertiary (Blue)**: Reliability - #1565C0

## Project Structure

```
app/
├── (auth)/              Authentication screens
├── (tabs)/              Main app tabs
│   ├── index.tsx       Dashboard
│   ├── patients.tsx    Patient management
│   ├── appointments.tsx Scheduling
│   ├── resources.tsx   Educational content
│   └── profile.tsx     User profile
components/              Reusable UI components
contexts/                Global state management
constants/               Theme and design tokens
models/                  Data type definitions
utils/                   Helper functions
types/                   TypeScript types
```

## Development Tips

### Hot Reload
The app supports hot reload. Save any file to see changes instantly.

### Type Safety
Run `npm run typecheck` to verify TypeScript types before committing.

### Component Development
All components are theme-aware and support dark/light modes automatically.

### Adding Translations
Edit `contexts/LanguageContext.tsx` to add new translation keys.

## Common Tasks

### Adding a New Screen
1. Create file in `app/(tabs)/` directory
2. Add to tab navigator in `app/(tabs)/_layout.tsx`
3. Import necessary contexts and components

### Creating a New Component
1. Create file in `components/` directory
2. Use `useTheme()` for theme-aware styling
3. Follow existing component patterns

### Adding Data Models
1. Define types in `models/` directory
2. Create storage functions in `utils/` if needed
3. Update contexts for state management

## Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### TypeScript errors
```bash
# Run type check
npm run typecheck
```

### Module not found errors
```bash
# Ensure all dependencies are installed
npm install
```

## Building for Production

### Web
```bash
npm run build:web
```

### iOS/Android
Requires Expo Application Services (EAS) or ejecting to bare workflow. The app is ready for either approach.

## Next Steps

1. **Connect Database**: Integrate with Supabase backend
2. **Enable Authentication**: Set up real user authentication
3. **Add Real Data**: Connect to actual patient/appointment data
4. **Test Offline Sync**: Verify sync mechanism with backend
5. **Deploy**: Build and deploy to app stores

## Documentation

- `PROJECT_OVERVIEW.md` - Complete feature documentation
- `DESIGN_SYSTEM.md` - Design guidelines and specifications
- `IMPLEMENTATION_SUMMARY.md` - Technical implementation details

## Support

For issues or questions:
1. Check documentation files
2. Review code comments
3. Verify TypeScript types

## License

This project is built for healthcare worker support in low-connectivity environments.

---

**Arogya Mitra** - Offline Care, Online Impact
