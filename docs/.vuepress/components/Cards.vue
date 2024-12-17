<template>
  <div>
    <!-- 정렬 버튼 -->
     <div class="sort-select">
      <label for="sort-option">Sort by: </label>
      <select v-model="selectedSortOption" @change="applySort">
        <option value="stars-desc">Stars ↓</option>
        <option value="stars-asc">Stars ↑</option>
        <option value="forks-desc">Forks ↓</option>
        <option value="forks-asc">Forks ↑</option>
        <option value="name-desc">Name ↓</option>
        <option value="name-asc">Name ↑</option>
      </select>
     </div>
  </div>
  
  <!-- 카드 렌더링 -->
  <div class="card-container">
    <div v-for="data in datas" :key="data.name" class="card">
      <div v-if="data.header && data.header.trim()" class="card-header">
        <p>{{ data.header }}</p>
      </div>
      <div class="card-content">
        <div class="tag">
          {{ data.language || 'docs' }}
        </div>
        <div class="card-title">
          <a :href="data.url" class="text-blue-500 font-bold hover:underline">
            {{ data.name }}
          </a>
        </div>
        <div class="card-description">
          <p class="text-sm text-gray-500">{{ data.description || "No description available" }}</p>
        </div>
      </div>
      <div class="card-footer">
        <p class="text-xs text-gray-400">{{ data.last_updated || 'Forks: ' + data.forks + ' | Stars: ' + data.stars }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent ({
  name: "Card",
  props: {
    category: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      datas: [],
      selectedSortOption: "stars-desc", // 기본 정렬 옵션
    };
  },
  methods: {
    applySort() {
      const [sortKey, sortOrder] = this.selectedSortOption.split("-");
      this.datas.sort((a, b) => {
        if (sortKey === "name") {
          return sortOrder === "asc" ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey]);
        } else {
          return sortOrder === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
        }
      });
    },
  },
  async mounted() {
    try {
      const response = await fetch("/repos_data.json");
      const data = await response.json();
      if (this.category === "pages") {
        this.datas = data.pages || [];
      } else if (this.category === "repositories") {
        this.datas = data.repos || [];
      } else {
        this.datas = [];
      }
      this.applySort();
    } catch (error) {
      console.error("Failed to load repos_data.json:", error);
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/cards.scss";
</style>
