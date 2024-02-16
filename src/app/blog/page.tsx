import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Title from "@/components/Title";
import { posts } from "./getPosts";

function PostItem(post: Post) {
  return (
    <div className=" mb-6 flex gap-2 items-center">
      <time
        dateTime={post.date}
        className=" text-stone-400 mr-2 flex-shrink-0 inline-block"
      >
        {format(parseISO(post.date), "MM · yyyy")}
      </time>

      <Link className=" text-lg hover:underline" href={post.url}>
        {post.title}
      </Link>
    </div>
  );
}

export default function Blog() {
  return (
    <div>
      <Title>Blog</Title>

      {posts.map((post, idx) => (
        <PostItem key={idx} {...post} />
      ))}
    </div>
  );
}
