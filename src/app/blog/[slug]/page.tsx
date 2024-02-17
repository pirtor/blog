import Title from "@/components/Title";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import "highlight.js/styles/vs2015.min.css";
import { getNextPost, posts } from "../getPosts";
import Link from "next/link";
import Comments from "@/components/Comments";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = posts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  const nextPost = getNextPost(post);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Title>{post.title}</Title>

      <div className="dark:prose-invert max-w-none prose prose-stone prose-headings:font-normal prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-pre:p-0">
        <MDXContent />
      </div>

      <div className=" mt-12 mb-6">
        <Comments />
      </div>

      {nextPost ? (
        <Link
          href={nextPost?.url}
          className="flex flex-row-reverse items-center overflow-hidden"
        >
          <div className="text-sm border w-1/2 px-3 py-2 cursor-pointer overflow-hidden text-right rounded">
            <p className=" text-sm text-primary/60 mb-1">Next: </p>
            <span className=" truncate block">{nextPost.title}</span>
          </div>
        </Link>
      ) : null}
    </>
  );
}
