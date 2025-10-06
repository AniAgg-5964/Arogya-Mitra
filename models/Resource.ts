export type ContentType = 'video' | 'audio' | 'document' | 'infographic';

export interface Resource {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  category: string;
  language: string;
  fileUrl: string;
  thumbnailUrl?: string;
  fileSize: number;
  duration?: number;
  tags: string[];
  isOfflineAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ConsentRecord {
  id: string;
  patientId: string;
  consentType: string;
  consentGiven: boolean;
  signatureData?: string;
  voiceConsentUrl?: string;
  witnessId: string;
  recordedAt: string;
}

export interface Feedback {
  id: string;
  feedbackType: 'grievance' | 'suggestion' | 'appreciation';
  category: string;
  message: string;
  isAnonymous: boolean;
  submittedBy?: string;
  status: 'pending' | 'reviewed' | 'resolved';
  createdAt: string;
}
