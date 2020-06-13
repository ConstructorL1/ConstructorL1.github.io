<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>考点</td>
          <td>编号</td>
          <td>教程页面</td>
          <td>历年真题</td>
        </tr>
      </thead>
      <tbody >
        <tr v-for=" (item, index) in data.items" > 
          <td><a :href="item.path">{{ item.title }}</a></td>
          <td>{{ item.frontmatter.No }}</td>
          <td>{{ item.frontmatter.page }}</td>
          <td>{{ item.frontmatter.test }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: {
        items:[]
      }
    }
  },

  props: ['tag'],

  created: function () {
    this.show();
  },

  computed: {
    pages () {
      const pages = [];

      if (this.tag) {
        this.$site.pages.forEach(item => {
          if (item.frontmatter.tags) {
            let tags = item.frontmatter.tags.split("|");
            if (tags.indexOf(this.tag) >= 0) {
              pages.push (item);
            }
          }
        });
      }

      return pages;
    },
  },
  
  methods: {
    show() {
      this.data.items = this.pages;
    }
  }
}
</script>
