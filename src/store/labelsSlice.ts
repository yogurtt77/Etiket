import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Label, LabelFormData, LabelsState } from '@/types/label';

const initialState: LabelsState = {
  labels: [],
  editingLabel: null,
  isLoading: false,
  error: null,
};

const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    addLabel: (state, action: PayloadAction<LabelFormData>) => {
      const newLabel: Label = {
        id: uuidv4(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.labels.push(newLabel);
    },
    
    updateLabel: (state, action: PayloadAction<{ id: string; data: LabelFormData }>) => {
      const { id, data } = action.payload;
      const labelIndex = state.labels.findIndex(label => label.id === id);
      if (labelIndex !== -1) {
        state.labels[labelIndex] = {
          ...state.labels[labelIndex],
          ...data,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    
    deleteLabel: (state, action: PayloadAction<string>) => {
      state.labels = state.labels.filter(label => label.id !== action.payload);
      if (state.editingLabel?.id === action.payload) {
        state.editingLabel = null;
      }
    },
    
    setEditingLabel: (state, action: PayloadAction<Label | null>) => {
      state.editingLabel = action.payload;
    },
    
    loadLabelsFromStorage: (state, action: PayloadAction<Label[]>) => {
      state.labels = action.payload;
    },
    
    clearEditingLabel: (state) => {
      state.editingLabel = null;
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addLabel,
  updateLabel,
  deleteLabel,
  setEditingLabel,
  loadLabelsFromStorage,
  clearEditingLabel,
  setError,
  setLoading,
} = labelsSlice.actions;

export default labelsSlice.reducer;
