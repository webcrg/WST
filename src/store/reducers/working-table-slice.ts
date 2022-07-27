import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createId } from '@/common/helpers';

const initialState = {
  rows: [
    {
      id: 1,
      company: 'placeholderCompany',
      vacancyLink: 'link',
      missingKnowledge: 'some knowledge separated with comma',
      status: 'open',
      lastUpdate: new Date().toISOString(),
    },
  ],
};

export const workingTableSlice = createSlice({
  name: 'WorkingTableSlice',
  initialState,
  reducers: {
    addNewRow(state, action: PayloadAction<any>) {
      state.rows.push({
        ...action.payload,
        id: createId(),
        status: 'open',
        lastUpdate: new Date().toISOString(),
      });
    },

    editCell(state, action: PayloadAction<any>) {
      state.rows = state.rows.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
    },

    removeRow(state, action: PayloadAction<any>) {
      state.rows = state.rows.filter((item) => item.id !== action.payload);
    },
  },
});

export default workingTableSlice.reducer;
