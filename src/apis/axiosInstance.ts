import axios from 'axios';

const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID || 'public';

export default axios.create({
  baseURL: `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}`,
  headers: { 'Content-Type': 'application/json' },
});
