"use client"
import { getCurrentToken } from "@/app/_utils/getCurrentToken";
const headers = {
  "Content-Type": "application/json",
}

const throwErrorMessage = async (response:Response) => {
  const result = await response.json();
  const responseError = {
    type: 'Error',
    message: result.message || 'Something went wrong',
    data: result.data || '',
    code: result.code || '',
  };

  let error = new Error();
  error = { ...error, ...responseError };
  throw (error);
}
const http = {
  get: async <T>(url: string): Promise<{
    data?: T;
    message: string;
  } | undefined> => {
    const token = await getCurrentToken();
    const response = await fetch(url,{
      headers:{
        ...headers,
        Authorization: token
      }
    });
    if(response.ok){
      return await response.json();
    }
    return throwErrorMessage(response);
  },
  patch: async <T>(url: string, payload: T): Promise<{
    data?: T;
    message: string;
  } | undefined> => {
    const token = await getCurrentToken();
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers:{
        ...headers,
        Authorization: token
      }
    });
    if(response.ok){
      return await response.json();
    }
    return throwErrorMessage(response);
  },
  post: async <T>(url: string, payload: T): Promise<{
    data?: T;
    message: string;
  }| undefined> => {
    const token = await getCurrentToken();
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
        ...headers,
        Authorization: token
      }
    });
    if(response.ok){
      return await response.json();
    }
   return throwErrorMessage(response);
  },
};

export { http };
