import Title from "@/components/Title";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Title>404</Title>
      <Link className=" text-sm underline flex items-center" href="/">
        Return Home
      </Link>
    </div>
  );
}
