import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Button,
  Box,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { workingTableSlice } from '@/store/reducers/working-table-slice';

function Form() {
  const dispatch = useDispatch();
  const [company, setCompany] = useState('');
  const [vacancyLink, setVacancyLink] = useState('');
  const [missingKnowledge, setMissingKnowledge] = useState('');
  const { addNewRow } = workingTableSlice.actions;

  const changeCompanyNameHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(target.value);
  };

  const changeLinkHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setVacancyLink(target.value);
  };

  const changeMissingKnowledgeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMissingKnowledge(target.value);
  };

  const addRowHandler = () => {
    if (company && vacancyLink) {
      const newRow = {
        company,
        vacancyLink,
        missingKnowledge,
        status: undefined,
      };

      dispatch(addNewRow(newRow));
      setCompany('');
      setVacancyLink('');
      setMissingKnowledge('');
    }
  };

  return (
    <Paper sx={{ mb: 3, mt: 3 }} elevation={2}>
      <Box>
        <form action="">
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="company-name">Company name</InputLabel>
            <OutlinedInput
              id="company-name"
              onChange={changeCompanyNameHandler}
              value={company}
              label="Company name"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '100px' }} variant="outlined">
            <InputLabel htmlFor="link">Link</InputLabel>
            <OutlinedInput
              id="link"
              onChange={changeLinkHandler}
              value={vacancyLink}
              label="link"
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="missing-knowledge">
              Missing knowledge
            </InputLabel>
            <OutlinedInput
              id="missing-knowledge"
              onChange={changeMissingKnowledgeHandler}
              value={missingKnowledge}
              label="missing-knowledge"
            />
          </FormControl>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            size="large"
            endIcon={<ArrowCircleDownIcon />}
            onClick={addRowHandler}
          >
            add to table
          </Button>
        </form>
      </Box>
    </Paper>
  );
}

export { Form };
