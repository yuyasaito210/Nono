import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

const Spacer = ({ size }) => (
  <View style={{ height: size }} />
);

Spacer.defaultProps = {
  size: 20,
};

export default Spacer;
