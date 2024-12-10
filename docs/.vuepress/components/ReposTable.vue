<template>
  <div class="repos-table">
    <!-- Pages Table -->
    <h2>Pages</h2>
    <div>
      <label for="pages-sort">Sort by:</label>
      <select id="pages-sort" v-model="pagesSortKey">
        <option value="name">Name</option>
        <option value="last_updated">Last Updated</option>
      </select>
      <button @click="sortPages(true)">Ascending</button>
      <button @click="sortPages(false)">Descending</button>
    </div>
    <table v-if="pages.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="page in sortedPages" :key="page.name">
          <td><a :href="page.url" target="_blank">{{ page.name }}</a></td>
          <td>{{ page.description }}</td>
          <td>{{ page.last_updated }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No Pages Data Available.</p>

    <!-- Repos Table -->
    <h2>Repos</h2>
    <div>
      <label for="repos-sort">Sort by:</label>
      <select id="repos-sort" v-model="reposSortKey">
        <option value="name">Name</option>
        <option value="forks">Forks</option>
        <option value="stars">Stars</option>
      </select>
      <button @click="sortRepos(true)">Ascending</button>
      <button @click="sortRepos(false)">Descending</button>
    </div>
    <table v-if="repos.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Forks</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repo in sortedRepos" :key="repo.name">
          <td><a :href="repo.url" target="_blank">{{ repo.name }}</a></td>
          <td>{{ repo.description }}</td>
          <td>{{ repo.language }}</td>
          <td>{{ repo.forks }}</td>
          <td>{{ repo.stars }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No Repos Data Available.</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ReposTable",
  data() {
    return {
      pages: [],
      repos: [],
      pagesSortKey: "name",
      reposSortKey: "name",
      pagesAscending: true,
      reposAscending: true,
    };
  },
  computed: {
    sortedPages() {
      return [...this.pages].sort((a, b) => {
        const valA = a[this.pagesSortKey];
        const valB = b[this.pagesSortKey];
        if (this.pagesAscending) return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
      });
    },
    sortedRepos() {
      return [...this.repos].sort((a, b) => {
        const valA = a[this.reposSortKey];
        const valB = b[this.reposSortKey];
        if (typeof valA === "string") {
          return this.reposAscending
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
        return this.reposAscending ? valA - valB : valB - valA;
      });
    },
  },
  methods: {
    sortPages(ascending) {
      this.pagesAscending = ascending;
    },
    sortRepos(ascending) {
      this.reposAscending = ascending;
    },
  },
  async mounted() {
    try {
      const response = await fetch("/repos_data.json");
      const data = await response.json();
      this.pages = data.pages || [];
      this.repos = data.repos || [];
    } catch (error) {
      console.error("Failed to load repos_data.json:", error);
    }
  },
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
table, th, td {
  border: 1px solid #ddd;
}
th, td {
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
</style>
