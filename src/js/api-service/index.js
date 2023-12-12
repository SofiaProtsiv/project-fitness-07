import axios from 'axios';

const http = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api/',
});

export default class ApiService {
  constructor() {
    this.exerciseId = null;
    this.maxPages = null;
    this.searchQuery = '';
    this.pageCounter = 1;
    this.muscles = '';
    this.equipment = '';
    this.bodyPart = '';
  }

  async fetchMuscles() {
    const URL = `filters?filter=Muscles&page=${this.pageCounter}&limit=12`;
    try {
      const response = await http.get(URL);
      this.maxPages = response.data.totalPages;
      return response.data.results;
    } catch (error) {
      return error;
    }
  }
  async fetchMuscles() {
    const URL = `filters?filter=Muscles&page=${this.pageCounter}&limit=12`;
    try {
      const response = await http.get(URL);
      this.maxPages = response.data.totalPages;
      return response.data.results;
    } catch (error) {
      return error;
    }
  }
  async fetchExerciseById() {
    const URL = `exercises/${this.exerciseId}`;
    try {
      const response = await http.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  }
  //
  async fetchQuote() {
    const URL = `quote`;
    try {
      const response = await http.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  }
  async fetchFilteredExercises() {
    const URL = `exercises?bodypart=${this.bodyPart}&muscles=${this.muscles}&equipment=${this.equipment}&keyword=${this.searchQuery}&page=${this.pageCounter}&limit=10`;
    try {
      const response = await http.get(URL);
      return response.data.results;
    } catch (error) {
      return error;
    }
  }

  get id() {
    return this.exerciseId;
  }

  set id(newExerciseId) {
    return (this.exerciseId = newExerciseId);
  }

  get page() {
    return this.pageCounter;
  }
  set page(newPage) {
    return (this.pageCounter = newPage);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
  get musclesFeature() {
    return this.muscles;
  }

  set musclesFeature(newMuscles) {
    this.muscles = newMuscles;
  }

  get equipmentFeature() {
    return this.equipment;
  }

  set equipmentFeature(newEquipment) {
    this.equipment = newEquipment;
  }

  get bodyPartFeature() {
    return this.bodyPart;
  }

  set bodyPartFeature(newBodyPart) {
    this.bodyPart = newBodyPart;
  }
}

// example how to use in your code
// import ApiService from './js/api-service';
// const fetch = new ApiService();
// fetch.fetchMuscles().then(data => {
//   console.log(data);
// });
// fetch.id = '64f389465ae26083f39b17a2';
// fetch.fetchExerciseById().then(data => {
//   console.log(data);
// });
