import { AUTH_USERNAME } from "@/api/constants";
import { create } from "zustand";

interface UsernameStoreState {
  username: string;
  setUsername: (username: string) => void;
}

// Creating a Global State store for Username using Zustand
export const useUsernameStore = create<UsernameStoreState>((set) => {
  return {
    username: localStorage.getItem(AUTH_USERNAME) || "",
    setUsername: (username: string) => set(() => ({ username: username })),
  };
});
