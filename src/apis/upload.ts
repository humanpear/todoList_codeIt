import axios from './axiosInstance';

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  const res = await axios.post<{ url: string }>(
    'images/upload',
    formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    transformRequest: [(data) => data],
  }
  );

  return res.data.url;
}