export default class StylesheetEvent extends Event {
  constructor(type, props) {
    super(type, {
      bubbles: true,
      cancelable: false,
      scoped: false,
    });
    this.props = props;
  }
}
