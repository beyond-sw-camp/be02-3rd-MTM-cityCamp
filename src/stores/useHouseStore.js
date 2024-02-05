import { defineStore } from "pinia";
import axios from 'axios';

const backend = "http://13.125.229.218:8080";

export const useHouseStore = defineStore("house", {
  state: () => ({ houseList: [], houseDetails: null }),
  actions: {
    async getHouseList(page, size) {
      let response = await axios.get(
        backend + "/house/list?page=" + page + "&size=" + size
      );
      this.houseList = response.data;
      console.log(response);

      return response.data;
    },
    async getHouseDetails(id) {
      try {
        const response = await axios.get(backend + "/house/find/" + id);
        this.houseDetails = response.data;
        console.log(this.houseDetails);
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseListByName(page, size, name) {
      try {
        let response = await axios.get(
          backend + "/house/find/name?page=" + page + "&size=" + size + "&name=" + name
        );
        this.houseList = response.data;
        
        console.log(response);
        return response.data;
      } catch (error) {
        console.error("해당 이름의 숙소들이 존재하지 않습니다");
      }
    },
  },
});