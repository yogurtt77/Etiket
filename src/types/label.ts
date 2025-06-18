export interface Label {
  id: string;
  text: string;
  textColor: string;
  backgroundColor: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LabelFormData {
  text: string;
  textColor: string;
  backgroundColor: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
}

export interface LabelsState {
  labels: Label[];
  editingLabel: Label | null;
  isLoading: boolean;
  error: string | null;
}
