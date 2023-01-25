import { defineStore } from 'pinia'
import axios, { Axios } from 'axios';

const SERVER = import.meta.env.VITE_SERVERURL;

export const useDataStore = defineStore('data', {
  state() {
    return {
      
    }
  },

  actions: {
    loadData() {
      
    }
  }
})
