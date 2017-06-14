import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import { Footer as StyledFooter, TodoCount } from './Footer.css';

const Footer = ({ onFilterSelect, filter, incomplete }) => (
  <StyledFooter>
    <TodoCount>
      <strong>{incomplete}</strong> item{incomplete !== 1 && 's'} left
    </TodoCount>
    <Filters onSelect={onFilterSelect} selected={filter} />
  </StyledFooter>
);

Footer.propTypes = {
  onFilterSelect: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  incomplete: PropTypes.number.isRequired,
};

export default Footer;
