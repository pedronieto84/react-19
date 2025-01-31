export interface IState {
    count: number,
    posts: string[],
    loading: boolean,
    error: string | null
  }

  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }