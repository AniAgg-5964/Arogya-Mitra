import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

interface OfflineContextType {
  isOnline: boolean;
  syncQueue: SyncItem[];
  addToSyncQueue: (item: Omit<SyncItem, 'id' | 'createdAt'>) => Promise<void>;
  processSync: () => Promise<void>;
  clearSyncQueue: () => Promise<void>;
}

export interface SyncItem {
  id: string;
  tableName: string;
  operation: 'insert' | 'update' | 'delete';
  data: any;
  recordId?: string;
  createdAt: number;
  retryCount: number;
}

const OfflineContext = createContext<OfflineContextType | undefined>(undefined);

const SYNC_QUEUE_KEY = '@arogya_sync_queue';

export function OfflineProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);
  const [syncQueue, setSyncQueue] = useState<SyncItem[]>([]);

  useEffect(() => {
    loadSyncQueue();

    const unsubscribe = NetInfo.addEventListener(state => {
      const online = state.isConnected ?? false;
      setIsOnline(online);

      if (online && syncQueue.length > 0) {
        processSync();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadSyncQueue = async () => {
    try {
      const queueData = await AsyncStorage.getItem(SYNC_QUEUE_KEY);
      if (queueData) {
        setSyncQueue(JSON.parse(queueData));
      }
    } catch (error) {
      console.error('Failed to load sync queue:', error);
    }
  };

  const saveSyncQueue = async (queue: SyncItem[]) => {
    try {
      await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
      setSyncQueue(queue);
    } catch (error) {
      console.error('Failed to save sync queue:', error);
    }
  };

  const addToSyncQueue = async (item: Omit<SyncItem, 'id' | 'createdAt'>) => {
    const newItem: SyncItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: Date.now(),
      retryCount: 0,
    };

    const updatedQueue = [...syncQueue, newItem];
    await saveSyncQueue(updatedQueue);
  };

  const processSync = async () => {
    if (!isOnline || syncQueue.length === 0) return;

    const itemsToSync = [...syncQueue];
    const successfulItems: string[] = [];

    for (const item of itemsToSync) {
      try {
        console.log(`Syncing ${item.operation} on ${item.tableName}`);
        successfulItems.push(item.id);
      } catch (error) {
        console.error(`Failed to sync item ${item.id}:`, error);
        item.retryCount++;
      }
    }

    const remainingQueue = syncQueue.filter(
      item => !successfulItems.includes(item.id) && item.retryCount < 3
    );

    await saveSyncQueue(remainingQueue);
  };

  const clearSyncQueue = async () => {
    await saveSyncQueue([]);
  };

  return (
    <OfflineContext.Provider
      value={{
        isOnline,
        syncQueue,
        addToSyncQueue,
        processSync,
        clearSyncQueue,
      }}
    >
      {children}
    </OfflineContext.Provider>
  );
}

export function useOffline() {
  const context = useContext(OfflineContext);
  if (!context) {
    throw new Error('useOffline must be used within OfflineProvider');
  }
  return context;
}
