const base = "http://localhost:3000/api";
const apiRoute = {
  users: {
    post: `${base}/api/users`,
    get: (id: string) => `${base}/users/${id}`,
    patch: (id: string) => `${base}/users/${id}`,
  },
  businesses: {
    post: `${base}/businesses`,
    get: (id: string) => `${base}/businesses/${id}`,
    patch: (id: string) => `${base}/businesses/${id}`,
  }
} as const;

export { apiRoute };
