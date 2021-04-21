<template functional>
  <Board1 :content="content" />
</template>

<script>
import Board1 from './Board1';

export default {
  props: {
    content: {
      required: true,
      type: Object,
    },
    type: {
      required: true,
      type: String,
    },
  },
  components: {
    Board1,
  },
};
</script>
