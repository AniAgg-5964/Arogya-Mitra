import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useOffline } from '@/contexts/OfflineContext';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import {
  User,
  Phone,
  MapPin,
  Globe,
  Moon,
  Sun,
  Wifi,
  WifiOff,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react-native';

export default function Profile() {
  const router = useRouter();
  const { colors, spacing, typography, colorScheme, toggleColorScheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const { user, signOut } = useAuth();
  const { isOnline, syncQueue } = useOffline();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/(auth)/sign-in');
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: spacing.xl }}
    >
      <View style={[styles.header, { paddingTop: spacing.xxl, paddingHorizontal: spacing.lg }]}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
              fontSize: typography.sizes.heading,
              fontWeight: typography.weights.bold,
            },
          ]}
        >
          {t('profile')}
        </Text>
      </View>

      <View style={[styles.profileSection, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Card>
          <View style={styles.profileCard}>
            <View
              style={[
                styles.avatar,
                {
                  backgroundColor: colors.primary,
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <User size={32} color="#FFFFFF" />
            </View>

            <View style={[styles.profileInfo, { marginLeft: spacing.md, flex: 1 }]}>
              <Text
                style={[
                  styles.userName,
                  {
                    color: colors.text,
                    fontSize: typography.sizes.lg,
                    fontWeight: typography.weights.bold,
                  },
                ]}
              >
                {user?.fullName}
              </Text>
              <Text
                style={[
                  styles.userRole,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.sizes.sm,
                    marginTop: spacing.xs,
                  },
                ]}
              >
                {user?.role === 'asha_worker' ? 'ASHA Worker' : 'PHC Staff'}
              </Text>
              <Text
                style={[
                  styles.userEmail,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.sizes.sm,
                    marginTop: spacing.xs,
                  },
                ]}
              >
                {user?.email}
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.md,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.sm,
            },
          ]}
        >
          Personal Information
        </Text>

        <Card>
          <View style={styles.infoItem}>
            <Phone size={20} color={colors.textSecondary} />
            <Text
              style={[
                styles.infoText,
                {
                  color: colors.text,
                  fontSize: typography.sizes.md,
                  marginLeft: spacing.md,
                  flex: 1,
                },
              ]}
            >
              {user?.phoneNumber || 'Not provided'}
            </Text>
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border, marginVertical: spacing.md }]} />

          <View style={styles.infoItem}>
            <MapPin size={20} color={colors.textSecondary} />
            <Text
              style={[
                styles.infoText,
                {
                  color: colors.text,
                  fontSize: typography.sizes.md,
                  marginLeft: spacing.md,
                  flex: 1,
                },
              ]}
            >
              {user?.assignedArea || 'Not assigned'}
            </Text>
          </View>
        </Card>
      </View>

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.md,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.sm,
            },
          ]}
        >
          Preferences
        </Text>

        <Card>
          <TouchableOpacity style={styles.settingItem} onPress={toggleColorScheme}>
            <View style={styles.settingLeft}>
              {colorScheme === 'dark' ? (
                <Moon size={20} color={colors.textSecondary} />
              ) : (
                <Sun size={20} color={colors.textSecondary} />
              )}
              <Text
                style={[
                  styles.settingText,
                  {
                    color: colors.text,
                    fontSize: typography.sizes.md,
                    marginLeft: spacing.md,
                  },
                ]}
              >
                {colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: colors.border, marginVertical: spacing.md }]} />

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Globe size={20} color={colors.textSecondary} />
              <Text
                style={[
                  styles.settingText,
                  {
                    color: colors.text,
                    fontSize: typography.sizes.md,
                    marginLeft: spacing.md,
                  },
                ]}
              >
                Language
              </Text>
            </View>
            <Text
              style={[
                styles.settingValue,
                {
                  color: colors.textSecondary,
                  fontSize: typography.sizes.sm,
                },
              ]}
            >
              {languages.find(l => l.code === language)?.name}
            </Text>
          </View>
        </Card>
      </View>

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.md,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.sm,
            },
          ]}
        >
          Sync Status
        </Text>

        <Card>
          <View style={styles.syncItem}>
            {isOnline ? (
              <Wifi size={20} color={colors.success} />
            ) : (
              <WifiOff size={20} color={colors.error} />
            )}
            <View style={[styles.syncInfo, { marginLeft: spacing.md, flex: 1 }]}>
              <Text
                style={[
                  styles.syncTitle,
                  {
                    color: colors.text,
                    fontSize: typography.sizes.md,
                    fontWeight: typography.weights.medium,
                  },
                ]}
              >
                {isOnline ? 'Connected' : 'Offline Mode'}
              </Text>
              <Text
                style={[
                  styles.syncSubtitle,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.sizes.sm,
                    marginTop: spacing.xs,
                  },
                ]}
              >
                {syncQueue.length > 0
                  ? `${syncQueue.length} items pending sync`
                  : 'All data synced'}
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Button
          title={t('signOut')}
          onPress={handleSignOut}
          variant="outline"
          fullWidth
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  title: {},
  profileSection: {},
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {},
  profileInfo: {},
  userName: {},
  userRole: {},
  userEmail: {},
  section: {},
  sectionTitle: {},
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {},
  divider: {
    height: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {},
  settingValue: {},
  syncItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  syncInfo: {},
  syncTitle: {},
  syncSubtitle: {},
});
