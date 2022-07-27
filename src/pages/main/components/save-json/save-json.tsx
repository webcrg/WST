import React from 'react';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';
import { selectFormattedTableData } from '@/store/selectors';

function SaveJson() {
  const formattedTableData = useSelector(selectFormattedTableData);
  const blob = new Blob([JSON.stringify(formattedTableData)]);
  const fileName = 'table.json';

  return (
    <Box>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        onClick={() => {
          saveAs(blob, fileName);
        }}
      >
        Save json
      </Button>
    </Box>
  );
}

export { SaveJson };
