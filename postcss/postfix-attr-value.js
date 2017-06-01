module.exports = function postfixAttrValue(value, type) {
  switch (type) {
    case 'em':
    case 'ex':
    case 'px':
    case 'rem':
    case 'vw':
    case 'vh':
    case 'vmin':
    case 'vmax':
    case 'mm':
    case 'cm':
    case 'in':
    case 'pt':
    case 'pc':
    case 'deg':
    case 'grad':
    case 'rad':
    case 's':
    case 'ms':
    case 'Hz':
    case 'kHz':
    case '%':
      return value + type;
    default:
      return value;
  }
};
