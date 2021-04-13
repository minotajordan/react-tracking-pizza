// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://account.cloudmersive.com
//import CloudmersiveValidateApiClient from "cloudmersive-validate-api-client";
// import "isomorphic-fetch";

class Api {
  constructor() {
    const env = process.env.NEXT_PUBLIC_SRV || "prod";
  }

  async validatePhone(phone) {
    const response = await fetch(`https://api.cloudmersive.com/validate/phonenumber/basic`, {
      method: "POST",
      timeout: 0,
      headers: {
            "Content-Type": "application/json",
            "Apikey": "c3a2603a-b7bd-4e1b-8a5e-131979d598bd"
      },
      body: JSON.stringify({
        PhoneNumber: `01157${phone}`,
        DefaultCountryCode: "" 
      }),
    });
    if (response.status !== 200)
      return { error: "@error.response", status: response.status };
    return await response.json();
  };
}

export default new Api();
