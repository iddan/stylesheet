"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StylesheetEvent;
function StylesheetEvent(type, props) {
  this.props = props;
}

StylesheetEvent.prototype = Object.create(Event.prototype);
//   constructor(type, props) {
//     const event = new Event(type, {
//       bubbles: true,
//       cancelable: false,
//       scoped: false,
//     });
//     super(type, );
//     this.props = props;
//   }
// }