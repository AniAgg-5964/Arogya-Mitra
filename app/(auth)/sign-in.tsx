import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Heart } from 'lucide-react-native';

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();
  const { colors, spacing, typography } = useTheme();
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
      router.replace('/(tabs)');
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.header, { marginTop: spacing.xxl }]}>
          <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
            <Heart size={40} color="#FFFFFF" fill="#FFFFFF" />
          </View>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
                fontSize: typography.sizes.title,
                fontWeight: typography.weights.bold,
                marginTop: spacing.md,
              },
            ]}
          >
            {t('appName')}
          </Text>
          <Text
            style={[
              styles.tagline,
              {
                color: colors.textSecondary,
                fontSize: typography.sizes.md,
                marginTop: spacing.xs,
              },
            ]}
          >
            {t('tagline')}
          </Text>
        </View>

        <View style={[styles.form, { marginTop: spacing.xxl }]}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="enter your password"
            secureTextEntry
          />

          {error ? (
            <Text style={[styles.error, { color: colors.error, marginBottom: spacing.md }]}>
              {error}
            </Text>
          ) : null}

          <Button
            title={t('signIn')}
            onPress={handleSignIn}
            loading={loading}
            fullWidth
          />

          <Text
            style={[
              styles.demoNote,
              {
                color: colors.textSecondary,
                fontSize: typography.sizes.sm,
                marginTop: spacing.lg,
                textAlign: 'center',
              },
            ]}
          >
            Demo: Use any email and password to sign in
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  tagline: {
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  error: {
    marginBottom: 16,
  },
  demoNote: {},
});
