import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getParts();
  },
  computed: mapState({
    parts: ({ robots }) =>
      robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      },
  }),
  methods: {
    ...mapActions('robots', ['getParts']),
  },
};
