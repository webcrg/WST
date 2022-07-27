import React from 'react';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectTableData } from '@/store/selectors';
import { workingTableSlice } from '@/store/reducers/working-table-slice';

function Table() {
  const tableData = useSelector(selectTableData);
  const dispatch = useDispatch();
  const { editCell, removeRow } = workingTableSlice.actions;

  const columns: GridColDef[] = [
    {
      field: 'company',
      headerName: 'Company',
      editable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'vacancyLink',
      headerName: 'Link',
      editable: true,
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'missingKnowledge',
      headerName: 'Missing knowledge',
      editable: true,
      minWidth: 210,
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: true,
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'action',
      headerName: '',
      type: 'actions',
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={(e) => {
              e.stopPropagation(); // don't select this row after clicking
              dispatch(removeRow(params.row.id));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const processRowUpdate = React.useCallback(
    async (newRow: GridRowModel) => {
      const updatedRow = { ...newRow, lastUpdate: new Date().toISOString() };
      dispatch(editCell(updatedRow));
      return updatedRow;
    },
    [dispatch, editCell]
  );

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row) => row.id}
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.log(error)}
        disableSelectionOnClick
      />
    </Box>
  );
}

export { Table };
