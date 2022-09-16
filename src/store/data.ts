import { defineStore } from "pinia";
import dataFile from "../data";

const useDataStore = defineStore("data", {
  state: () => ({
    data: dataFile,
  }),
  getters: {
    getRandomizedData: (state) => {
      const data = [...state.data];
      return data.sort(() => Math.random() - 0.5);
    },
  },
  actions: {
    toggleStorySeen(username: string) {
      const data = this.data.find((d) => d.user.nickname === username);

      if (data?.storySeen === false) {
        data.storySeen = true;
      }
    },
  },
});

export default useDataStore;
