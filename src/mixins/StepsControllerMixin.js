export default {
  data() {
    return {
      current: 0,
      steps: []
    };
  },
  computed: {
    component() {
      return this.steps[this.current];
    }
  },
  methods: {
    minMax(number) {
      return Math.max(0, Math.min(number, this.steps.length));
    },
    next() {
      this.current = this.minMax(this.current + 1);
    },
    back() {
      this.current = this.minMax(this.current - 1);
    }
  }
};
