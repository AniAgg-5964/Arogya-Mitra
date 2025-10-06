import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useOffline } from '@/contexts/OfflineContext';
import { Card } from '@/components/Card';
import { StatusBadge } from '@/components/StatusBadge';
import { Users, Calendar, Activity, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function Dashboard() {
  const { colors, spacing, typography } = useTheme();
  const { t } = useLanguage();
  const { user } = useAuth();
  const { isOnline, syncQueue } = useOffline();

  const stats = [
    { label: 'Total Patients', value: '247', icon: Users, color: colors.primary },
    { label: 'Appointments Today', value: '8', icon: Calendar, color: colors.secondary },
    { label: 'Pending Follow-ups', value: '15', icon: Activity, color: colors.warning },
    { label: 'Critical Cases', value: '3', icon: AlertCircle, color: colors.error },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: spacing.xl }}
    >
      <View style={[styles.header, { paddingTop: spacing.xxl, paddingHorizontal: spacing.lg }]}>
        <View>
          <Text
            style={[
              styles.greeting,
              {
                color: colors.textSecondary,
                fontSize: typography.sizes.md,
              },
            ]}
          >
            Welcome back,
          </Text>
          <Text
            style={[
              styles.name,
              {
                color: colors.text,
                fontSize: typography.sizes.heading,
                fontWeight: typography.weights.bold,
                marginTop: spacing.xs,
              },
            ]}
          >
            {user?.fullName}
          </Text>
          <Text
            style={[
              styles.role,
              {
                color: colors.textSecondary,
                fontSize: typography.sizes.sm,
                marginTop: spacing.xs,
              },
            ]}
          >
            {user?.role === 'asha_worker' ? 'ASHA Worker' : 'PHC Staff'} • {user?.assignedArea}
          </Text>
        </View>
        <StatusBadge status={isOnline ? 'online' : 'offline'} />
      </View>

      {syncQueue.length > 0 && (
        <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.md }]}>
          <Card
            style={{
              backgroundColor: `${colors.info}15`,
              borderLeftWidth: 4,
              borderLeftColor: colors.info,
            }}
          >
            <Text
              style={[
                styles.syncText,
                {
                  color: colors.text,
                  fontSize: typography.sizes.sm,
                  fontWeight: typography.weights.medium,
                },
              ]}
            >
              {syncQueue.length} items pending sync
            </Text>
            <Text
              style={[
                styles.syncSubtext,
                {
                  color: colors.textSecondary,
                  fontSize: typography.sizes.xs,
                  marginTop: spacing.xs,
                },
              ]}
            >
              Data will sync automatically when online
            </Text>
          </Card>
        </View>
      )}

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.lg,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.md,
            },
          ]}
        >
          Overview
        </Text>

        <View style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const cardStyle = {
              flex: 1,
              marginRight: index % 2 === 0 ? spacing.sm : 0,
              marginBottom: spacing.sm,
            };

            return (
            <Card
              key={index}
              style={cardStyle}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: `${stat.color}15`,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: spacing.sm,
                  },
                ]}
              >
                <stat.icon size={20} color={stat.color} />
              </View>
              <Text
                style={[
                  styles.statValue,
                  {
                    color: colors.text,
                    fontSize: typography.sizes.xxl,
                    fontWeight: typography.weights.bold,
                  },
                ]}
              >
                {stat.value}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.sizes.xs,
                    marginTop: spacing.xs,
                  },
                ]}
              >
                {stat.label}
              </Text>
            </Card>
          );
          })}
        </View>
      </View>

      <View style={[styles.section, { paddingHorizontal: spacing.lg, marginTop: spacing.md }]}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.lg,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.md,
            },
          ]}
        >
          Recent Activity
        </Text>

        {[1, 2, 3].map(item => (
          <Card key={item}>
            <View style={styles.activityItem}>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.activityTitle,
                    {
                      color: colors.text,
                      fontSize: typography.sizes.md,
                      fontWeight: typography.weights.medium,
                    },
                  ]}
                >
                  Patient Visit Recorded
                </Text>
                <Text
                  style={[
                    styles.activityTime,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.sizes.sm,
                      marginTop: spacing.xs,
                    },
                  ]}
                >
                  2 hours ago
                </Text>
              </View>
              <StatusBadge status="success" text="Synced" />
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {},
  name: {},
  role: {},
  section: {},
  sectionTitle: {},
  syncText: {},
  syncSubtext: {},
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statCard: {},
  iconContainer: {},
  statValue: {},
  statLabel: {},
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {},
  activityTime: {},
});
