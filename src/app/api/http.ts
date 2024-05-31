const http = {
  get: async <T>(url: string): Promise<{
    data?: T;
    message: string;
  }> => {
    const response = await fetch(url);
    return response.json();
  },
  patch: async <T>(url: string, payload: T): Promise<{
    data?: T;
    message: string;
  }> => {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
};

export { http };
