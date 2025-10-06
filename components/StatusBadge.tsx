import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface StatusBadgeProps {
  status: 'online' | 'offline' | 'syncing' | 'success' | 'error';
  text?: string;
}

export function StatusBadge({ status, text }: StatusBadgeProps) {
  const { colors, spacing, typography } = useTheme();

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return colors.success;
      case 'offline':
        return colors.textSecondary;
      case 'syncing':
        return colors.info;
      case 'success':
        return colors.success;
      case 'error':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = () => {
    if (text) return text;
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'syncing':
        return 'Syncing';
      case 'success':
        return 'Success';
      case 'error':
        return 'Error';
      default:
        return '';
    }
  };

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: `${getStatusColor()}20`,
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.xs,
        },
      ]}
    >
      <View
        style={[
          styles.dot,
          {
            backgroundColor: getStatusColor(),
            marginRight: spacing.xs,
          },
        ]}
      />
      <Text
        style={[
          styles.text,
          {
            color: getStatusColor(),
            fontSize: typography.sizes.xs,
            fontWeight: typography.weights.medium,
          },
        ]}
      >
        {getStatusText()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {},
});
