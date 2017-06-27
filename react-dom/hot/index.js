const Stylesheet = {
  instances: [],
  register(instance) {
    this.instances.push(instance);
  },
  unregister(instance) {
    this.instances.splice(this.instances.indexOf(instance), 1);
  },
  handleAccept() {
    setTimeout(() => {
      for (const instance of this.instances) {
        instance.init();
        instance.forceUpdate();
      }
    }, 1);
  },
};

export default Stylesheet;
