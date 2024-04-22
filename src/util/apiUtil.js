import company from "@/sampleData/company.json"
import estimate from "@/sampleData/estimate.json"
import project from "@/sampleData/project.json"
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BE_PORT = import.meta.env.VITE_BE_PORT;

export default {
  name: "api",


  companySampleData: () => {
    return company.companyData;
  },

  estimateSampleData: () => {
    return estimate.estimateData;
  },

  projectSampleData: () => {
    return project.proejctData;
  }
}



