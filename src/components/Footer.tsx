import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className=" mt-12 mb-20">
      <hr />
      <div className=" my-4 text-sm text-primary/60 leading-5">
        <p>Copyright © 2024 Pirtor. All rights reserved.</p>
        <p className=" text-xs">
          <span>Say Hello:</span>
          <Button variant="link" asChild size="sm">
            <a
              className=" text-primary/60 hover:text-primary"
              href="mailto:hello@pirtor.com?subject=Hello"
            >
              hello@pirtor.com
            </a>
          </Button>
        </p>
      </div>
    </div>
  );
}
