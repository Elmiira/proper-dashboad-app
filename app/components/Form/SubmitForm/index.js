/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator/index';
import 'assets/style/login.scss';

/**
 *
 * SubmitForm
 * This presentational component makes a submit form
 *  based on its submit form values
 */
function SubmitForm({
  welcomeMsg,
  formDescription,
  formValues,
  onSubmit,
  disabled,
  submitLabel,
  loading,
  error,
}) {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="description-login-box">
          <div className="h1">{welcomeMsg}</div>
          <div className="description-login">{formDescription}</div>
        </div>
        <>
          <InputForm formValues={formValues} />
          <Submit
            onSubmit={onSubmit}
            disabled={disabled}
            submitLabel={submitLabel}
            loading={loading}
          />
        </>
      </div>
      {error && <div className={'error-msg'}></div>}
    </div>
  );
}

const InputForm = ({ formValues }) => (
  <>
    {formValues.map(({ value, label, displayLabel, type, updateValue }) => (
      <div className="form-row" key={`formRow${label}`}>
        <div className="form-group">
          <label className="control-label">{displayLabel}</label>
          <input
            type={label}
            autoComplete={label === 'password' ? 'current-password' : type}
            className="form-control"
            placeholder={label}
            value={value}
            onChange={e => updateValue(e.target.value)}
          />
        </div>
      </div>
    ))}
  </>
);

const Submit = ({ onSubmit, disabled, submitLabel, loading }) => (
  <div className="submit-container">
    <LoadingIndicator show={loading} size={30} />
    <button
      className="btn btn-primary cancellation-button"
      onClick={e => {
        e.preventDefault();
        onSubmit();
      }}
      disabled={disabled}
      type="submit"
    >
      {submitLabel}
    </button>
  </div>
);

export default SubmitForm;

// SubmitForm.propTypes = {
//   welcomeMsg: PropTypes.string,
//   formDescription: PropTypes.string,
//   formValues: PropTypes.array.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
//   submitLabel: PropTypes.string,
//   loading: PropTypes.bool,
// };

SubmitForm.defaultProps = {
  welcomeMsg: 'Hi!',
  submitLabel: 'submit',
};
// TODO: Validate and auto Correction
