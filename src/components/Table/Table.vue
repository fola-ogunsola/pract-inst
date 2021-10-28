<template>
  <div>
    <i-table-loading v-if="loading" :column-count="tableHeaders.length" />
    <div class="table" :class="{'admin': isAdmin}" v-else>
      <table>
        <caption class="hide-text">{{`A table containing details about all ${name}`}}</caption>
        <thead>
          <th
            :id="value"
            v-for="({ name, value }, index) in tableHeaders"
            :key="value">
            <input type="checkbox" name="item" :id="`selecteAll${name}`" v-model="checkAll" @click="selectAll" v-show="(isAdmin && !isDemo) && index === 0">
            {{ name }}
          </th>
        </thead>
        <tbody v-if="data && data.length">
          <tr v-for="item in data" :key="item.id" @click="openModal(item)">
            <td 
              v-for="({value, mobile, filter}, index) in tableHeaders"
              :class="`text-${filter}`"
              :key="value"
              :data-mobile="mobile">
              <span :data-status="value === 'status' && item[value]">
                <template v-if="isAdmin && index === 0">
                  <input
                    type="checkbox"
                    :name="`select-${name}`"
                    :id="`select-${name}-${item.id}`"
                    :value="item.id"
                    v-if="!isDemo"
                    v-model="itemsChecked">
                  <div class="table__image" v-if="showImage">
                    <img :src="item.imageUrl" :alt="item.name" v-if="item.imageUrl">
                    <span v-else class="table__image--placeholder">
                      {{item | truncateName}}
                    </span>
                  </div>
                </template>
                {{ item[value] | valueFilter(filter, item) }}
                <i-dropdown
                  v-if="isAdmin && index === tableHeaders.length - 1"
                  is-table
                  v-model="action"
                  @change="setAction($event, item)"
                  :options="actions" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <i-empty-state :message="emptyMessage" v-if="!loading && data && data.length === 0" />
    </div>
  </div>
</template>

<script>
import ITable from './Table'
export default ITable
</script>
<style lang="scss" scoped src="./Table.scss"></style>