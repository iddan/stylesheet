/**
 * @param {Object} attribute A CSS attribute selector presentation
 * @param {string} attribute.operator
 * @param {string} attribute.value
 * @param {boolean} attribute.insensitive
 * @param {string} value The element's attribute value
 */
export default function matchAttribute(attribute, value) {
  const { insensitive } = attribute;
  const attributeValue = insensitive ? attribute.value.toLowerCase() : attribute.value;
  const elementValue = insensitive ? value.toLowerCase() : value;
  switch (attribute.operator) {
    case '=': {
      return elementValue === attributeValue;
    }
    case '~=': {
      return whitespaceList(elementValue).includes(attributeValue);
    }
    case '|=': {
      return beforeDash(elementValue) === attributeValue;
    }
    case '^=': {
      return elementValue.startsWith(attributeValue);
    }
    case '$=': {
      return elementValue.endsWith(attributeValue);
    }
    case '*=': {
      return elementValue.includes(attributeValue);
    }
    default: {
      return Boolean(elementValue);
    }
  }
}

const beforeDash = string => string.split('-')[0];

const whitespaceList = string => string.split(/\s+/);
