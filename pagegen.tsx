export const pageGen = (component: any) => {
  return `
  import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/index.ts';

  ${component}

  export default function Home(props) {
    const tmp = props.url.href.split('/');
    console.log(tmp[tmp.length - 1]);

    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css"
          />
          <link rel="stylesheet" href="/post.css"></link>
        </Head>
        <Page>
          <MDXContent/>
        </Page>
      </div>
    );
  }
  
  `;
};
