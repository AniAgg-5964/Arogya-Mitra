export interface VitalSigns {
  bloodPressure?: string;
  temperature?: number;
  pulse?: number;
  weight?: number;
  height?: number;
  respiratoryRate?: number;
  oxygenSaturation?: number;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  startDate: string;
}

export type RecordType = 'anc' | 'pnc' | 'immunization' | 'general';

export interface HealthRecord {
  id: string;
  patientId: string;
  recordType: RecordType;
  visitDate: string;
  symptoms: string[];
  diagnosis?: string;
  treatment?: string;
  medications: Medication[];
  vitalSigns: VitalSigns;
  notes?: string;
  attachments: string[];
  recordedBy: string;
  isSynced: boolean;
  localId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: string;
  patientId: string;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  contactNumber?: string;
  address?: string;
  villageArea: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  appointmentType: 'ANC' | 'PNC' | 'Immunization' | 'Follow-up' | 'General';
  scheduledDate: string;
  status: 'scheduled' | 'completed' | 'missed' | 'cancelled';
  reminderSent: boolean;
  notes?: string;
  createdBy: string;
  completedAt?: string;
  isSynced: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PatientProgress {
  id: string;
  patientId: string;
  metricType: 'weight' | 'height' | 'bmi' | 'hemoglobin' | 'blood_pressure';
  value: number;
  unit: string;
  recordedDate: string;
  recordedBy: string;
  notes?: string;
  isSynced: boolean;
  createdAt: string;
}
