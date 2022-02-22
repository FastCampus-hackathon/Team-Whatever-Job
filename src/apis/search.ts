import axios from 'axios';

// 카테고리 목록 조회
export async function fetchJobCategories() {
  try {
    const { data } = await axios.get('/category/job');

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchJobTypeCategories() {
  try {
    const { data } = await axios.get('/category/jobType');

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchLocationCategories() {
  try {
    const { data } = await axios.get('/category/location');

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchLocationDetailCategories(location: string) {
  try {
    const { data } = await axios.get(`/category/location/${location}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}
