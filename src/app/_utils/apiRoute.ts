const base = "http://localhost:3000";
const apiRoute = {
  users: {
    post: `${base}/api/users`,
    get: (id: string) => `${base}/api/users/${id}`,
    patch: (id: string) => `${base}/api/users/${id}`,
  },
} as const;

export { apiRoute };
