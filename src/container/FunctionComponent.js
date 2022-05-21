import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import '../container/drug.css';

const drugDetails = {
  fields: [
    {
      label: 'Date of Birth (YYYY-MM-DD)',
      key: 'birthday',
      isRequired: true,
      order: 1,
      isReadonly: false,
      type: 'date',
    },
    {
      label: 'Gestational Age',
      key: 'gestationalAge',
      isRequired: true,
      order: 3,
      unit: 'weeks',
      isReadonly: false,
      type: 'number',
    },
    {
      label: 'Sex',
      items: [
        {
          value: 'male',
          text: 'Male',
        },
        {
          value: 'female',
          text: 'Female',
        },
      ],
      key: 'sex',
      isRequired: true,
      order: 4,
      isReadonly: false,
      type: 'dropdown',
    },
    {
      label: 'Height',
      key: 'height',
      isRequired: true,
      order: 5,
      unit: 'cm',
      isReadonly: false,
      type: 'number',
    },
    {
      label: 'Weight',
      key: 'weight',
      isRequired: true,
      order: 6,
      unit: 'kg',
      isReadonly: false,
      type: 'number',
    },
    {
      label: 'BMI',
      key: 'bmi',
      order: 11,
      unit: 'kg/m²',
      isReadonly: true,
      type: 'number',
    },
  ],
};

const FunctionComponent = () => {
  return (
    <div>
      <div className='header'>
        {drugDetails &&
          drugDetails.fields.map((e, i) => {
            return (
              <>
                {e.type === 'dropdown' ? (
                  <FormControl required={e.isRequired} variant='standard' sx={{ minWidth: 120 }}>
                    <InputLabel id='demo-simple-select-label'>{e.label}</InputLabel>
                    <Select labelId='demo-simple-select-label' id='demo-simple-select' label={e.label}>
                      {e.items.map(ele => (
                        <MenuItem value={ele.value}>{ele.text}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <>
                    {e.type === 'date' ? (
                      <TextField
                        type={e.type}
                        className='fieldwidth'
                        InputLabelProps={{ shrink: true }}
                        name={e.key}
                        required={e.isRequired}
                        id={e.key}
                        label={e.label}
                        variant='standard'
                        InputProps={{
                          readOnly: e.isReadonly,
                          endAdornment: <InputAdornment position='start'>{e.unit}</InputAdornment>,
                        }}
                      />
                    ) : (
                      <TextField
                        type={e.type}
                        className='fieldwidth'
                        name={e.key}
                        required={e.isRequired}
                        id={e.key}
                        label={e.label}
                        variant='standard'
                        InputProps={{
                          readOnly: e.isReadonly,
                          endAdornment: <InputAdornment position='start'>{e.unit}</InputAdornment>,
                        }}
                      />
                    )}
                  </>
                )}
              </>
            );
          })}
      </div>
      <div className='submitButton'>
        <Button variant='outlined'>Submit</Button>
      </div>
    </div>
  );
};

export default FunctionComponent;
