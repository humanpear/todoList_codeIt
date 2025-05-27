import axios from './axiosInstance';

export interface Todo {
  id: string;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export type CreateTodoDto = {
  name: string;
};

export type UpdateTodoDto = Partial<{
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}>;

export async function getTodos(): Promise<Todo[]> {
  const res = await axios.get<Todo[]>('/items');
  return res.data;
}

export async function getTodoById(id: string): Promise<Todo> {
  const res = await axios.get<Todo>(`/items/${id}`);
  return res.data;
}

export async function createTodo(params: CreateTodoDto): Promise<Todo> {
  const res = await axios.post<Todo>('/items', params);
  return res.data;
}

export async function updateTodo(
  id: string,
  params: UpdateTodoDto
): Promise<Todo> {
  const res = await axios.patch<Todo>(`/items/${id}`, params);
  return res.data;
}

export async function deleteTodo(id: string): Promise<void> {
  await axios.delete(`/items/${id}`);
}
