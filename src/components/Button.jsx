<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

function Button({ label, handleClick }) {
	return <button onClick={handleClick}>{label}</button>
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default Button

=======
import React from "react";
import PropTypes from "prop-types";

function Button({label, handleClick}) {
  return <button onClick={handleClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button
>>>>>>> 07f579f7fc4f0e09e4aa03710ad9ae13198e1870
