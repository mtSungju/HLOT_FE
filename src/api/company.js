import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BE_MANAGEMENT_PORT = import.meta.env.VITE_BE_MANAGEMENT_PORT;
const REQUEST_URL = `${BASE_URL}:${BE_MANAGEMENT_PORT}`;
export default {

  company(id) {
    return axios.get(REQUEST_URL + `/api/company/${id}`);
  },

  companys(){
    return axios.get(REQUEST_URL + '/api/companys');
  },

  newCompany(company) {
    company.registUserName = '유영국';
    return axios.post(REQUEST_URL + '/api/company', company);
  },

  newCompanyManager(companyManager) {
    companyManager.registUserName = '유영국';
    return axios.post(REQUEST_URL + '/api/company/companyManager', companyManager);
  },

  deleteCompanyManager(id) {
    return axios.delete(REQUEST_URL + `/api/company/companyManager/${id}`);
  }

}
