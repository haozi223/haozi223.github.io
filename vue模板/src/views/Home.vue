<template>
  <div class="home">
    <classify />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      value: '123'
    }
  },
  components: {
    classify: () => import('../components/分类！')
  },
  methods: {

  }
}
</script>
