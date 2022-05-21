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
      order: 2,
      isReadonly: false,
      type: 'dropdown',
    },
    {
      label: 'Weight',
      key: 'weight',
      isRequired: true,
      order: 3,
      unit: 'kg',
      isReadonly: false,
      type: 'number',
    },
  ],
};
class Drug2Input extends Component {
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
                      <input type={e.type} readonly={e.isReadonly} name={e.key} required={e.isRequired} style={{ height: '100%', width: '100%' }} />
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

export default Drug2Input;
