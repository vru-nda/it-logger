import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setmessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setmessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = (e) => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please Enter a message and text' });
    } else {
      const upLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(upLog);
      M.toast({ html: `Log updated by ${tech}` });

      //clear fields
      setmessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='john doe'>John Doe</option>
              <option value='sara smith'>Sara Smith</option>
              <option value='sam smith'>Sara Smith</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
