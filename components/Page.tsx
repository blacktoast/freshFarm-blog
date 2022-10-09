import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "./Header.tsx";

interface Page2Props {
  children: ComponentChildren;
}

export const Page = ({ children }: Page2Props) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/post.css"></link>
      </Head>
      <div class="lg:max-w-screen-md md:max-w-screen-sm px-6 pt-8 mx-auto">
        {children}
      </div>
      {" "}
    </>
  );
};
