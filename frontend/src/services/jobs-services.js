import axios from 'axios'

const JOBS_API = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=2c25d4d0&app_key=009f1de806e3f3f590b34157ceed84a0&results_per_page=10&what=';

export const findJobsBySearchTerm = async (term) => {
    const response = await axios.get(`${JOBS_API}${term}`);
    return response.data;
} 

