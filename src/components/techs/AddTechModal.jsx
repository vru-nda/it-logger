import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = (e) => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please Enter a firstname and lastname' });
    } else {
      const newTech = {
        firstname,
        lastname,
      };

      addTech(newTech);

      console.log(firstname, lastname);
      //clear fields
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor='firstname' className=''>
              FirstName
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor='lastname'>Lastname</label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addTech })(AddTechModal);
