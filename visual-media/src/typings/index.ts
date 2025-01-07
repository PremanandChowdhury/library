export type User = {
  id: number;
  name: string;
};

export type usersStateProps = {
  data: User[];
  isLoading: boolean;
  error: Error | null;
};
