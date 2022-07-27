import { RootState } from './redux';

export const selectTableData = (state: RootState) => state.workingTable.rows;
export const selectFormattedTableData = (state: RootState) =>
  state.workingTable.rows.map(
    ({ company, vacancyLink, missingKnowledge, status, lastUpdate }) => ({
      company,
      vacancyLink,
      missingKnowledge: missingKnowledge
        ? missingKnowledge.split(',').map((item) => item.trim())
        : [],
      status,
      lastUpdate,
    })
  );
