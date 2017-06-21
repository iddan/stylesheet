import matchAttribute from '../../core/match-attribute';

const getClassName = ({ className }) => className;

const generateClassName = ({ className, attributes = [], attrs = [] }) => props =>
  [
    className,
    ...attrs.map(getClassName),
    ...attributes
      .filter(attribute => matchAttribute(attribute, props[attribute.name]))
      .map(getClassName),
  ].join(' ');

export default generateClassName;
