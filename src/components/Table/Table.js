import IEmptyState from '@/components/EmptyState'
import ITableLoading from './TableLoading'
import IModal from '@/components/Modal/Modal.vue'
import IDropdown from '@/components/Dropdown/Dropdown.vue'
import { format } from 'date-fns'

export default {
  name: "ITable",
  components: {
    IEmptyState,
    ITableLoading,
    IModal,
    IDropdown
  },
  props: {
    tableHeaders: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyMessage: {
      type: String
    },
    name: {
      type: String,
      require: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    isDemo: {
      type: Boolean,
      default: false
    },
    actions: {
      default: () => ([])
    },
    showImage: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showDetails: false,
    selectedItem: {},
    itemsChecked: [],
    checkAll: false,
    action: ''
  }),
  methods: {
    closeModal() {
      this.showDetails = false;
      this.selectedItem = {}
    },
    openModal(item) {
      this.selectedItem = {...item};
      this.showDetails = true;
    },
    selectAll() {
      this.itemsChecked = []
      if (!this.checkAll) {
        for (const item in this.data) {
          this.itemsChecked.push(this.data[item].id);
        }
      }
    },
    async setAction(action, item) {
      await this.$emit('actionCalled', { action, item  })
      this.action = ''
    }
  },

  filters: {
    filterKey(value) {
      if(value === 'updatedAt') { return 'date'}
      return (value && value.replace(/([A-Z])/g, ' $1').trim())
    },
    valueFilter(value, name, item) {
      const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      switch (name) {
        case "date":
          return `${format(new Date(value), "PP")} | ${format(new Date(value), "p")}`;
          case "capitalize":
            return value.replace('_', " ");
          case "name":
            return `${item.firstName} ${item.lastName}`;
          case "limit":
            return value.length > 65 ? `${value.substr(0, 65)} ${'...'}` : value
          case "money": 
          return `₦ ${formatter.format(value).toString()}`;
        default:
          return value;
      }
    },

    truncateName(value) {
      const { name, firstName = '', lastName = '' } = value
      if(name) {
        let nameArray = name.split('_')
        return nameArray.length === 1 ? 
          nameArray[0].split("")[0] : 
          nameArray[0].split("")[0] + nameArray[1].split("")[0]
      } else {
        return firstName.split('')[0] + lastName.split('')[0]
      }
    }
  },
  watch: {
    itemsChecked: {
      deep: true,
      handler(val) {
        this.$emit('checked', val)
        if(val.length !== this.data.length) {
          this.checkAll = false
        }
      }
    }
  }
}