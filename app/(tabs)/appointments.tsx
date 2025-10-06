import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/Card';
import { Calendar, Clock, Plus, MapPin } from 'lucide-react-native';

interface Appointment {
  id: string;
  patientName: string;
  type: 'ANC' | 'PNC' | 'Immunization' | 'Follow-up';
  date: string;
  time: string;
  location: string;
  status: 'scheduled' | 'completed' | 'missed';
}

export default function Appointments() {
  const { colors, spacing, typography, borderRadius } = useTheme();
  const { t } = useLanguage();

  const mockAppointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Lakshmi Devi',
      type: 'ANC',
      date: 'Today',
      time: '10:00 AM',
      location: 'Rampur Village',
      status: 'scheduled',
    },
    {
      id: '2',
      patientName: 'Sita Sharma',
      type: 'Immunization',
      date: 'Today',
      time: '02:00 PM',
      location: 'PHC Center',
      status: 'scheduled',
    },
    {
      id: '3',
      patientName: 'Ramesh Kumar',
      type: 'Follow-up',
      date: 'Tomorrow',
      time: '11:00 AM',
      location: 'Sitapur Village',
      status: 'scheduled',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ANC':
        return colors.secondary;
      case 'PNC':
        return colors.primary;
      case 'Immunization':
        return colors.info;
      case 'Follow-up':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
          {t('appointments')}
        </Text>
        <TouchableOpacity
          style={[
            styles.addButton,
            {
              backgroundColor: colors.primary,
              width: 40,
              height: 40,
              borderRadius: borderRadius.button,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <Plus size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={[styles.statsContainer, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <View style={styles.statsRow}>
          <View style={[styles.statBox, { flex: 1, marginRight: spacing.sm }]}>
            <Card style={{ alignItems: 'center' }}>
              <Text
                style={[
                  styles.statNumber,
                  {
                    color: colors.primary,
                    fontSize: typography.sizes.xxl,
                    fontWeight: typography.weights.bold,
                  },
                ]}
              >
                8
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
                Today
              </Text>
            </Card>
          </View>
          <View style={[styles.statBox, { flex: 1, marginLeft: spacing.sm }]}>
            <Card style={{ alignItems: 'center' }}>
              <Text
                style={[
                  styles.statNumber,
                  {
                    color: colors.secondary,
                    fontSize: typography.sizes.xxl,
                    fontWeight: typography.weights.bold,
                  },
                ]}
              >
                23
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
                This Week
              </Text>
            </Card>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontSize: typography.sizes.md,
              fontWeight: typography.weights.bold,
              marginBottom: spacing.md,
            },
          ]}
        >
          Upcoming
        </Text>

        {mockAppointments.map(appointment => (
          <Card key={appointment.id} onPress={() => console.log('View appointment:', appointment.id)}>
            <View style={styles.appointmentCard}>
              <View
                style={[
                  styles.typeIndicator,
                  {
                    backgroundColor: getTypeColor(appointment.type),
                    width: 4,
                    height: '100%',
                    borderRadius: 2,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  },
                ]}
              />

              <View style={[styles.appointmentContent, { paddingLeft: spacing.md }]}>
                <View style={styles.appointmentHeader}>
                  <Text
                    style={[
                      styles.patientName,
                      {
                        color: colors.text,
                        fontSize: typography.sizes.md,
                        fontWeight: typography.weights.bold,
                      },
                    ]}
                  >
                    {appointment.patientName}
                  </Text>
                  <View
                    style={[
                      styles.typeBadge,
                      {
                        backgroundColor: `${getTypeColor(appointment.type)}20`,
                        paddingHorizontal: spacing.sm,
                        paddingVertical: 4,
                        borderRadius: 8,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.typeText,
                        {
                          color: getTypeColor(appointment.type),
                          fontSize: typography.sizes.xs,
                          fontWeight: typography.weights.medium,
                        },
                      ]}
                    >
                      {appointment.type}
                    </Text>
                  </View>
                </View>

                <View style={[styles.detailRow, { marginTop: spacing.md }]}>
                  <Calendar size={16} color={colors.textSecondary} />
                  <Text
                    style={[
                      styles.detailText,
                      {
                        color: colors.textSecondary,
                        fontSize: typography.sizes.sm,
                        marginLeft: spacing.xs,
                      },
                    ]}
                  >
                    {appointment.date} at {appointment.time}
                  </Text>
                </View>

                <View style={[styles.detailRow, { marginTop: spacing.xs }]}>
                  <MapPin size={16} color={colors.textSecondary} />
                  <Text
                    style={[
                      styles.detailText,
                      {
                        color: colors.textSecondary,
                        fontSize: typography.sizes.sm,
                        marginLeft: spacing.xs,
                      },
                    ]}
                  >
                    {appointment.location}
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {},
  addButton: {},
  statsContainer: {},
  statsRow: {
    flexDirection: 'row',
  },
  statBox: {},
  statNumber: {},
  statLabel: {},
  list: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {},
  sectionTitle: {},
  appointmentCard: {
    position: 'relative',
  },
  typeIndicator: {},
  appointmentContent: {},
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patientName: {},
  typeBadge: {},
  typeText: {},
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {},
});
