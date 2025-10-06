import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Language = 'en' | 'hi' | 'te' | 'ta' | 'bn' | 'mr';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  appName: {
    en: 'Arogya Mitra',
    hi: 'आरोग्य मित्र',
    te: 'ఆరోగ్య మిత్ర',
    ta: 'ஆரோக்கிய மித்ரா',
    bn: 'আরোগ্য মিত্র',
    mr: 'आरोग्य मित्र',
  },
  tagline: {
    en: 'Offline Care, Online Impact',
    hi: 'ऑफलाइन देखभाल, ऑनलाइन प्रभाव',
    te: 'ఆఫ్‌లైన్ కేర్, ఆన్‌లైన్ ప్రభావం',
    ta: 'ஆஃப்லைன் பராமரிப்பு, ஆன்லைன் தாக்கம்',
    bn: 'অফলাইন যত্ন, অনলাইন প্রভাব',
    mr: 'ऑफलाइन काळजी, ऑनलाइन प्रभाव',
  },
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड',
    te: 'డాష్‌బోర్డ్',
    ta: 'டாஷ்போர்டு',
    bn: 'ড্যাশবোর্ড',
    mr: 'डॅशबोर्ड',
  },
  patients: {
    en: 'Patients',
    hi: 'मरीज़',
    te: 'రోగులు',
    ta: 'நோயாளிகள்',
    bn: 'রোগী',
    mr: 'रुग्ण',
  },
  appointments: {
    en: 'Appointments',
    hi: 'नियुक्तियाँ',
    te: 'నియామకాలు',
    ta: 'சந்திப்புகள்',
    bn: 'অ্যাপয়েন্টমেন্ট',
    mr: 'भेटी',
  },
  resources: {
    en: 'Resources',
    hi: 'संसाधन',
    te: 'వనరులు',
    ta: 'வளங்கள்',
    bn: 'সংস্থান',
    mr: 'संसाधने',
  },
  profile: {
    en: 'Profile',
    hi: 'प्रोफ़ाइल',
    te: 'ప్రొఫైల్',
    ta: 'சுயவிவரம்',
    bn: 'প্রোফাইল',
    mr: 'प्रोफाइल',
  },
  signIn: {
    en: 'Sign In',
    hi: 'साइन इन करें',
    te: 'సైన్ ఇన్',
    ta: 'உள்நுழைய',
    bn: 'সাইন ইন',
    mr: 'साइन इन',
  },
  signOut: {
    en: 'Sign Out',
    hi: 'साइन आउट करें',
    te: 'సైన్ అవుట్',
    ta: 'வெளியேறு',
    bn: 'সাইন আউট',
    mr: 'साइन आउट',
  },
  addPatient: {
    en: 'Add Patient',
    hi: 'मरीज़ जोड़ें',
    te: 'రోగిని జోడించండి',
    ta: 'நோயாளியைச் சேர்',
    bn: 'রোগী যোগ করুন',
    mr: 'रुग्ण जोडा',
  },
  scheduleAppointment: {
    en: 'Schedule Appointment',
    hi: 'नियुक्ति निर्धारित करें',
    te: 'అపాయింట్‌మెంట్ షెడ్యూల్ చేయండి',
    ta: 'சந்திப்பை திட்டமிடு',
    bn: 'অ্যাপয়েন্টমেন্ট সময়সূচী',
    mr: 'भेटीचे वेळापत्रक',
  },
  offline: {
    en: 'Offline',
    hi: 'ऑफलाइन',
    te: 'ఆఫ్‌లైన్',
    ta: 'ஆஃப்லைன்',
    bn: 'অফলাইন',
    mr: 'ऑफलाइन',
  },
  online: {
    en: 'Online',
    hi: 'ऑनलाइन',
    te: 'ఆన్‌లైన్',
    ta: 'ஆன்லைன்',
    bn: 'অনলাইন',
    mr: 'ऑनलाइन',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = '@arogya_language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const saved = await AsyncStorage.getItem(LANGUAGE_KEY);
      if (saved) {
        setLanguageState(saved as Language);
      }
    } catch (error) {
      console.error('Failed to load language:', error);
    }
  };

  const setLanguage = async (lang: Language) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
      setLanguageState(lang);
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
