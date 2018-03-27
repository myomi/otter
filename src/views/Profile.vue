<template>
    <div>
        <h1>Profile</h1>
        <h2>{{fullName}}</h2>
        <form>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="lastName">
            </div>
            <button @click="addTag()">Add</button>
            <ul v-for="(tag, index) in tags" :key="tag.id">
                <li>
                    <input type="number" v-model="tag.id">
                    <input type="text" v-model="tag.name">
                    <button @click="removeTag(index)">Delete</button>
                </li>
            </ul>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
export default Vue.extend({
  name: 'Profile',
  data: function(): Profile {
    return {
      tags: [
        {
          id: 1,
          name: 'Java'
        },
        {
          id: 2,
          name: 'Elm'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    };
  },
  computed: {
    firstName: function(): string {
      // return this.$store.profile.state.firstName;
      return 'aaa';
    },
    lastName: function(): string {
      return 'bbb';
      // return this.$store.profile.state.lastName;
    },
    fullName: function(): string {
      return 'xxx';
      // return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    addTag: function() {
      this.tags.push({});
    },

    removeTag: function(index: number) {
      this.tags.splice(index, 1);
    }
  }
});

interface Profile {
  tags: Tag[];
}

interface Tag {
  id?: number;
  name?: string;
}
</script>

