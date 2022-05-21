import React, { Component } from 'react';
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
class Drug1Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='header'>
            {drugDetails &&
              drugDetails.fields.map((e, i) => {
                return (
                  <label>
                    <label for='fields'>{e.label} : </label>
                    {e.type === 'dropdown' ? (
                      <select style={{ height: '100%', width: '100%' }} name={e.key} id={e.key}>
                        {e.items.map((ele, ind) => (
                          <option value={ele.value}>{ele.text}</option>
                        ))}
                      </select>
                    ) : (
                      <>{e.label === 'BMI' ? <input type={e.type} readonly='true' name={e.key} required={e.isRequired} style={{ height: '100%', width: '100%' }} /> : <input type={e.type} readonly={e.isReadonly} name={e.key} required={e.isRequired} style={{ height: '100%', width: '100%' }} />}</>
                    )}
                  </label>
                );
              })}
          </div>
          <div className='submitButton'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default Drug1Input;
