"use client"
import { getCurrentToken } from "@/app/(main)/_utils/getCurrentToken";

const headers = {
  "Content-Type": "application/json",
}

const http = {
  get: async <T>(url: string): Promise<{
    data?: T;
    message: string;
  }> => {
    const token = await getCurrentToken();
    const response = await fetch(url,{
      headers:{
        ...headers,
        Authorization: token
      }
    });
    return response.json();
  },
  patch: async <T>(url: string, payload: T): Promise<{
    data?: T;
    message: string;
  }> => {
    const token = await getCurrentToken();
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers:{
        ...headers,
        Authorization: token
      }
    });
    return response.json();
  },
};

export { http };
