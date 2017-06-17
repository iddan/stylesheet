import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import { Footer as StyledFooter, TodoCount, ClearCompleted } from './Footer.css';

const Footer = ({ onFilterSelect, onClearCompleted, filter, complete, incomplete }) => (
  <StyledFooter>
    <TodoCount>
      <strong>{incomplete}</strong> item{incomplete !== 1 && 's'} left
    </TodoCount>
    <Filters onSelect={onFilterSelect} selected={filter} />
    {Boolean(complete) && <ClearCompleted onClick={onClearCompleted} />}
  </StyledFooter>
);

Footer.propTypes = {
  onFilterSelect: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  complete: PropTypes.number.isRequired,
  incomplete: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
