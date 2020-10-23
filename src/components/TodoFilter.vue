<!--
 * @Author       : yznaisy
 * @Date         : 2020-10-10 22:19:39
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-10-23 23:38:26
-->
<template>
	<div class="filters">
		<!-- <span v-for="filter in filters" :key="filter.value" @click="$emit('change-filter',filter.value)"
			:class="{active:selected==filter.value}" class="filter">
			{{filter.label}}
		</span> -->
    <span
      class="filter"
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
      :class="{ active: selected === filter.value }"
      >{{ filter.label }}</span
    >
	</div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "TodoFilter",
  props: ["selected"],
  setup() {
    const filters = reactive([
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ]);

    return { filters };
  },
};
</script>

<style scoped>
	.filters {
		display: flex;
		margin: 24px 2px;
		color: #c0c2ce;
		font-size: 14px;
	}

	.filters .filter {
		margin-right: 14px;
		transition: .8s;
		cursor: pointer;
	}

	.filters .filter.active {
		color: #6b729c;
		transform: scale(1.2);
	}
</style>