import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
);

export function getNextPost(post: Post) {
  const index = posts.findIndex((item) => {
    return item._id === post._id;
  });
  if (index > -1) {
    let nextIndex = index + 1;
    nextIndex = nextIndex >= posts.length ? 0 : nextIndex;
    return posts[nextIndex];
  }
}
