import { CommentsPayload } from "./types";

const uuid = () => Math.floor(Math.random() * 10000).toString();

export const comments: CommentsPayload[] = [
  {
    eventId: "e1",
    id: uuid(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e1",
    id: uuid(),
    content: "Another comment ",
    author: "Patricia",
  },
  {
    eventId: "e2",
    id: uuid(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e2",
    id: uuid(),
    content: "Another comment ",
    author: "Patricia",
  },
  {
    eventId: "e3",
    id: uuid(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e3",
    id: uuid(),
    content: "Another comment ",
    author: "Patricia",
  },
];
