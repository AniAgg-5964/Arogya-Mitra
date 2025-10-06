import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/Card';
import { Search, Video, FileText, Mic, Image as ImageIcon, Download } from 'lucide-react-native';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'document' | 'audio' | 'image';
  category: string;
  language: string;
  size: string;
  isOffline: boolean;
}

export default function Resources() {
  const { colors, spacing, typography, borderRadius } = useTheme();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'ANC', 'PNC', 'Immunization', 'Nutrition', 'First Aid'];

  const mockResources: Resource[] = [
    {
      id: '1',
      title: 'Antenatal Care Guidelines',
      description: 'Complete guide for ANC visits and monitoring',
      type: 'document',
      category: 'ANC',
      language: 'English',
      size: '2.5 MB',
      isOffline: true,
    },
    {
      id: '2',
      title: 'Proper Breastfeeding Techniques',
      description: 'Video tutorial on breastfeeding positions',
      type: 'video',
      category: 'PNC',
      language: 'Hindi',
      size: '45 MB',
      isOffline: false,
    },
    {
      id: '3',
      title: 'Immunization Schedule Audio Guide',
      description: 'Audio explanation of vaccination schedule',
      type: 'audio',
      category: 'Immunization',
      language: 'English',
      size: '8 MB',
      isOffline: true,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'document':
        return FileText;
      case 'audio':
        return Mic;
      case 'image':
        return ImageIcon;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return colors.error;
      case 'document':
        return colors.primary;
      case 'audio':
        return colors.secondary;
      case 'image':
        return colors.info;
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
          {t('resources')}
        </Text>
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
            placeholder="Search resources..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.categoriesScroll, { marginTop: spacing.md }]}
        contentContainerStyle={{ paddingHorizontal: spacing.lg }}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              {
                backgroundColor:
                  selectedCategory === category ? colors.primary : colors.card,
                borderRadius: borderRadius.button,
                paddingHorizontal: spacing.md,
                paddingVertical: spacing.sm,
                marginRight: spacing.sm,
              },
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                {
                  color: selectedCategory === category ? '#FFFFFF' : colors.text,
                  fontSize: typography.sizes.sm,
                  fontWeight: typography.weights.medium,
                },
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
        ]}
      >
        {mockResources.map(resource => {
          const TypeIcon = getTypeIcon(resource.type);
          const typeColor = getTypeColor(resource.type);

          return (
            <Card key={resource.id} onPress={() => console.log('View resource:', resource.id)}>
              <View style={styles.resourceCard}>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: `${typeColor}20`,
                      width: 50,
                      height: 50,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <TypeIcon size={24} color={typeColor} />
                </View>

                <View style={[styles.resourceInfo, { flex: 1, marginLeft: spacing.md }]}>
                  <View style={styles.resourceHeader}>
                    <Text
                      style={[
                        styles.resourceTitle,
                        {
                          color: colors.text,
                          fontSize: typography.sizes.md,
                          fontWeight: typography.weights.bold,
                          flex: 1,
                        },
                      ]}
                      numberOfLines={1}
                    >
                      {resource.title}
                    </Text>
                    {resource.isOffline && (
                      <View
                        style={[
                          styles.offlineBadge,
                          {
                            backgroundColor: `${colors.success}20`,
                            paddingHorizontal: spacing.xs,
                            paddingVertical: 2,
                            borderRadius: 4,
                            marginLeft: spacing.sm,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.offlineText,
                            {
                              color: colors.success,
                              fontSize: 10,
                              fontWeight: typography.weights.medium,
                            },
                          ]}
                        >
                          Offline
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.resourceDescription,
                      {
                        color: colors.textSecondary,
                        fontSize: typography.sizes.sm,
                        marginTop: spacing.xs,
                      },
                    ]}
                    numberOfLines={2}
                  >
                    {resource.description}
                  </Text>

                  <View style={[styles.resourceMeta, { marginTop: spacing.sm }]}>
                    <Text
                      style={[
                        styles.metaText,
                        {
                          color: colors.textSecondary,
                          fontSize: typography.sizes.xs,
                        },
                      ]}
                    >
                      {resource.language} • {resource.size}
                    </Text>
                    {!resource.isOffline && (
                      <TouchableOpacity style={{ marginLeft: spacing.md }}>
                        <Download size={16} color={colors.primary} />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  title: {},
  searchContainer: {},
  searchBox: {},
  searchInput: {},
  categoriesScroll: {},
  categoryChip: {},
  categoryText: {},
  list: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {},
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {},
  resourceInfo: {},
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceTitle: {},
  offlineBadge: {},
  offlineText: {},
  resourceDescription: {},
  resourceMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {},
});
