import axios from 'axios';

export async function fetchMyJobs() {
  try {
    const { data } = await axios.get('/user/dibs');
    return data;
  } catch (e) {
    console.log(e);
  }
}
