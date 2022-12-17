import { defineStore } from "pinia";
import { plainToClass } from "class-transformer";
import { Item, ItemPosition } from "./entities/item.entity";
interface ItemsStoreState {
  items: Item[];
  selectedItem: Item | null;
}

export const useItemsStore = defineStore("itemsStore", {
  state: (): ItemsStoreState => {
    return {
      items: [],
      selectedItem: null,
    };
  },
  actions: {
    createItems() {
      this.items = [
        new Item(0, 4, new ItemPosition(1, 1), "#7FAA65"),
        new Item(1, 2, new ItemPosition(2, 1), "#AA9765"),
        new Item(2, 3, new ItemPosition(3, 1), "#656CAA"),
      ];
      this.saveItemsToStorage();
    },
    saveItemsToStorage() {
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    fetchItems() {
      const itemsStr = localStorage.getItem("items");
      if (itemsStr) {
        this.items = plainToClass<Item, Object>(Item, JSON.parse(itemsStr));
        if (!this.items.length) this.createItems();
      } else this.createItems();
    },
    deleteItem(item: Item) {
      const editedItem = this.items.find((i) => i.id === item.id);
      if (!editedItem) return;
      editedItem.count = item.count;
      if (editedItem.count <= 0)
        this.items = this.items.filter((i) => i.id !== item.id);
      this.saveItemsToStorage();
    },
    selectItem(item: Item) {
      this.selectedItem = item;
    },
  },
});
