import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Filters as StyledFilters, Link } from './Filters.css';

const Filters = ({ onSelect, selected }) => (
  <StyledFilters>
    <Filter label="All" onSelect={onSelect} value="all" selected={selected === 'all'} />
    <Filter label="Active" onSelect={onSelect} value="active" selected={selected === 'active'} />
    <Filter
      label="Completed"
      onSelect={onSelect}
      value="completed"
      selected={selected === 'completed'}
    />
  </StyledFilters>
);

Filters.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

class Filter extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  };

  handleSelect = () => {
    const { onSelect, value } = this.props;
    onSelect(value);
  };

  render() {
    const { label, value, selected } = this.props;
    return (
      <li>
        <Link href={`#/${ value }`} onClick={this.handleSelect} selected={selected}>{label}</Link>
      </li>
    );
  }
}

export default Filters;
