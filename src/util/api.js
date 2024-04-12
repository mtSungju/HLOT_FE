export default {
  name: "api",

  getSampleData: async() => {
    return {
      requestUrl : "/sample/sampleData",
      responseData : getSample()
    }
  }

}







/*
* 테스트용 데이터
*/
const getSample = () => {
  return [
    {
      "companyName": "엠티데이타",
      "businessNo": "123-45-67890",
      "telNo": "031-438-1111",
      "companyAddress": "경기도 성남시 분당구 삼평동 618",
      "note": "비고",
    },
    {

      "companyName": "카카오클라우드",
      "businessNo": "123-45-67890",
      "telNo": "031-438-1111",
      "companyAddress": "경기도 성남시 분당구 삼평동 618",
      "note": "비고",
    },
    {

      "companyName": "NHN",
      "businessNo": "123-45-67890",
      "telNo": "031-438-1111",
      "companyAddress": "경기도 성남시 분당구 삼평동 618",
      "note": "비고",
    },
    {

      "companyName": "ATSYS",
      "businessNo": "123-45-67890",
      "telNo": "031-438-1111",
      "companyAddress": "경기도 성남시 분당구 삼평동 618",
      "note": "비고",
    }
  ]
}
