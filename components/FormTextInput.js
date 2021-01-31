import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'react-native-elements';

const FormTextInput = ({style, ...otherProps}) => {
  return <Input style={style} {...otherProps} />;
};

FormTextInput.PropTypes = {
  style: PropTypes.object,
};

export default FormTextInput;
