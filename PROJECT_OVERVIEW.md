# Arogya Mitra - Offline Care, Online Impact

A full-stack mobile healthcare application built with React Native (Expo) designed for ASHA workers and PHC staff to manage patient care in low-connectivity areas.

## Features

### 1. Offline-First Architecture
- Complete functionality without internet connectivity
- Automatic data synchronization when online
- Encrypted local storage for sensitive health records
- Background sync queue management

### 2. Electronic Health Records (EHR)
- Secure, encrypted patient records
- Support for ANC, PNC, immunization, and general visits
- Vital signs tracking (BP, temperature, pulse, weight, height)
- Medication management
- Attachment support

### 3. Patient Management
- Comprehensive patient profiles
- Search and filter functionality
- Status tracking (active, follow-up, critical)
- Village/area assignment

### 4. Appointment Scheduling
- Smart calendar system
- ANC/PNC/vaccination reminders
- Offline appointment creation
- Status management (scheduled, completed, missed)

### 5. Resource Hub
- Offline-accessible educational content
- Support for multiple formats (video, audio, documents, infographics)
- Multilingual resources
- Category-based organization
- Download management for offline use

### 6. Multilingual Support
- English, Hindi, Telugu, Tamil, Bengali, Marathi
- Easy language switching
- Persistent language preferences

### 7. Role-Based Access
- ASHA Worker role
- PHC Staff role
- Tailored dashboards per role
- Area-based access control

### 8. Adaptive UI/UX
- Automatic dark/light mode based on system preference
- Manual theme toggle
- Healthcare-focused color palette (Green, Teal, Blue)
- Professional, clean design
- High contrast for readability
- Large touch targets for low-tech literacy

## Technology Stack

### Frontend
- React Native (Expo SDK 54)
- Expo Router for navigation
- TypeScript for type safety
- React Context API for state management

### Storage & Sync
- AsyncStorage for local data persistence
- Expo Crypto for data encryption
- NetInfo for connectivity detection
- Custom sync queue system

### UI Components
- Lucide React Native for icons
- Custom component library (Button, Card, Input, etc.)
- React Native Reanimated for animations
- React Native Gesture Handler

### Backend Ready
- Supabase integration configured
- Database schema designed
- Authentication system prepared

## Project Structure

```
/app
  /(auth)
    sign-in.tsx         # Authentication screen
  /(tabs)
    _layout.tsx         # Tab navigation
    index.tsx           # Dashboard
    patients.tsx        # Patient management
    appointments.tsx    # Appointment scheduling
    resources.tsx       # Educational resources
    profile.tsx         # User profile & settings
  _layout.tsx           # Root layout
  index.tsx             # Entry point

/components
  Button.tsx            # Custom button component
  Card.tsx              # Card container
  Input.tsx             # Text input field
  StatusBadge.tsx       # Status indicator

/contexts
  AuthContext.tsx       # Authentication state
  ThemeContext.tsx      # Theme management
  LanguageContext.tsx   # Multilingual support
  OfflineContext.tsx    # Sync queue management

/constants
  theme.ts              # Design system (colors, spacing, typography)

/models
  HealthRecord.ts       # EHR data models
  Resource.ts           # Resource models

/utils
  storage.ts            # Encrypted storage utilities

/types
  env.d.ts              # Environment variable types
```

## Color Palette

### Light Mode
- Primary (Trust & Care): #2E7D32 (Green)
- Secondary (Calm): #00897B (Teal)
- Tertiary (Reliability): #1565C0 (Blue)
- Background: #F9FAFB
- Card: #FFFFFF
- Text: #212121
- Text Secondary: #616161

### Dark Mode
- Background: #121212
- Card: #1E1E1E
- Text: #E0E0E0
- Text Secondary: #BDBDBD

### Feedback Colors
- Success: #43A047
- Warning: #F9A825
- Error: #D32F2F
- Info: #0288D1

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Expo CLI

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build:web
```

### Type Check
```bash
npm run typecheck
```

## Key Features Implementation Status

✅ Offline-first architecture with AsyncStorage
✅ Theme system with adaptive dark/light mode
✅ Multilingual support (6 languages)
✅ Role-based authentication
✅ Tab-based navigation
✅ Patient management interface
✅ Appointment scheduling
✅ Resource hub
✅ Sync queue system
✅ Encrypted data storage
✅ Professional healthcare UI

## Security Features

- Local data encryption using Expo Crypto
- Secure storage utilities
- Authentication state management
- Role-based access control
- Encrypted health records

## Performance Optimizations

- Lightweight component design
- Efficient re-rendering with React Context
- AsyncStorage for fast local data access
- Background sync to minimize user wait times
- Lazy loading for resources

## Accessibility

- High contrast colors
- Large touch targets (48px minimum)
- Clear typography with proper line heights
- Simple navigation structure
- Offline indicators

## Future Enhancements

- Voice input for health records
- QR code patient identification
- Peer-to-peer data sharing via Bluetooth
- On-device ML for symptom triage
- Growth charts and visualization
- Push notifications for reminders
- Camera integration for documentation
- Biometric authentication

## Notes

- Demo authentication allows any email/password combination
- Database persistence can be added by connecting to the configured Supabase instance
- The app works fully offline with local storage
- All sensitive data is encrypted before storage
- Supports Android, iOS, and Web platforms
