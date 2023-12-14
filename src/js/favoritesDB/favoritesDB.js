//M. Startsev

import { store, db } from '../firebase-service';

export const favoritesDB = {
  add: async function (key, value) {
    return new Promise((resolve, reject) => {
      try {
        store.addData(key, value);
        resolve(true);
      } catch (error) {
        // reject(error);
        console.log(error);
      }
    });
  },

  get: async function () {
    return new Promise((resolve, reject) => {
      try {
        const res = store.getData();
        resolve(res);
      } catch (error) {
        // reject(error);
        console.error(error);
      }
    });
  },

  addAndGet: async function (key, value) {
    return new Promise(async (resolve, reject) => {
      try {
        await store.addData(key, value);

        setTimeout(async () => {
          resolve(await store.getData());
        }, 200);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },

  remove: async function (key) {
    return new Promise((resolve, reject) => {
      try {
        store.removeData(key);
        resolve(true);
      } catch (error) {
        // reject(error);
        console.error(error);
      }
    });
  },
};
