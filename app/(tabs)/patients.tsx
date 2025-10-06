import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Search, Plus, User } from 'lucide-react-native';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  village: string;
  lastVisit: string;
  status: 'active' | 'followup' | 'critical';
}

export default function Patients() {
  const { colors, spacing, typography, borderRadius } = useTheme();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const mockPatients: Patient[] = [
    {
      id: '1',
      name: 'Lakshmi Devi',
      age: 28,
      gender: 'Female',
      village: 'Rampur',
      lastVisit: '2 days ago',
      status: 'active',
    },
    {
      id: '2',
      name: 'Ramesh Kumar',
      age: 45,
      gender: 'Male',
      village: 'Sitapur',
      lastVisit: '1 week ago',
      status: 'followup',
    },
    {
      id: '3',
      name: 'Sita Sharma',
      age: 35,
      gender: 'Female',
      village: 'Rampur',
      lastVisit: '3 days ago',
      status: 'critical',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return colors.success;
      case 'followup':
        return colors.warning;
      case 'critical':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'followup':
        return 'Follow-up';
      case 'critical':
        return 'Critical';
      default:
        return status;
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
          {t('patients')}
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

      <View style={[styles.searchContainer, { paddingHorizontal: spacing.lg, marginTop: spacing.lg }]}>
        <View
          style={[
            styles.searchBox,
            {
              backgroundColor: colors.card,
              borderRadius: borderRadius.input,
              borderWidth: 1,
              borderColor: colors.border,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: spacing.md,
              height: 48,
            },
          ]}
        >
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={[
              styles.searchInput,
              {
                flex: 1,
                marginLeft: spacing.sm,
                color: colors.text,
                fontSize: typography.sizes.md,
              },
            ]}
            placeholder="Search patients..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
        ]}
      >
        {mockPatients.map(patient => (
          <Card key={patient.id} onPress={() => console.log('View patient:', patient.id)}>
            <View style={styles.patientCard}>
              <View
                style={[
                  styles.avatar,
                  {
                    backgroundColor: `${colors.primary}20`,
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <User size={24} color={colors.primary} />
              </View>

              <View style={[styles.patientInfo, { flex: 1, marginLeft: spacing.md }]}>
                <View style={styles.patientHeader}>
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
                    {patient.name}
                  </Text>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor: `${getStatusColor(patient.status)}20`,
                        paddingHorizontal: spacing.sm,
                        paddingVertical: 4,
                        borderRadius: 8,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        {
                          color: getStatusColor(patient.status),
                          fontSize: typography.sizes.xs,
                          fontWeight: typography.weights.medium,
                        },
                      ]}
                    >
                      {getStatusLabel(patient.status)}
                    </Text>
                  </View>
                </View>

                <Text
                  style={[
                    styles.patientDetails,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.sizes.sm,
                      marginTop: spacing.xs,
                    },
                  ]}
                >
                  {patient.age} yrs • {patient.gender} • {patient.village}
                </Text>
                <Text
                  style={[
                    styles.lastVisit,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.sizes.xs,
                      marginTop: spacing.xs,
                    },
                  ]}
                >
                  Last visit: {patient.lastVisit}
                </Text>
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
  searchContainer: {},
  searchBox: {},
  searchInput: {},
  list: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {},
  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {},
  patientInfo: {},
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patientName: {},
  statusBadge: {},
  statusText: {},
  patientDetails: {},
  lastVisit: {},
});
