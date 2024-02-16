import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Title from "@/components/Title";

function PostItem(post: Post) {
  return (
    <div className=" mb-6 flex gap-2 items-center">
      <time
        dateTime={post.date}
        className=" text-stone-400 mr-2 flex-shrink-0 inline-block"
      >
        {format(parseISO(post.date), "MM · yyyy")}
      </time>

      <Link className=" hover:underline" href={post.url}>
        {post.title}
      </Link>
    </div>
  );
}

export default function Work() {
  return (
    <div>
      <Title>In Progress...</Title>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        modi enim vero quia accusantium accusamus pariatur nisi? Est rem
        dignissimos totam, laborum, voluptas minus nulla quidem voluptate
        reprehenderit ab nostrum!
      </p>
    </div>
  );
}
