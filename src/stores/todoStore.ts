import { defineStore } from "pinia";

export interface TodoItem {
  id: string;
  todo: string;
  done: boolean;
}

export interface NewToDoItem {
  id: string;
  todo: string;
  done: false;
}

export const useTodoStore = defineStore("storeId", {
  state: () => {
    const localtodos: TodoItem[] | [] = JSON.parse(
      localStorage.getItem("todos") as string
    );

    return {
      todoList: <TodoItem[]>localtodos ? localtodos : [],
    };
  },
  actions: {
    addItem(item: NewToDoItem) {
      this.todoList.push(item);
    },
    loadLocalState(items: TodoItem[]) {
      this.todoList = [...items];
    },
  },
});
