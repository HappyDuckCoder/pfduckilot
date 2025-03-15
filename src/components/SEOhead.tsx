import Head from "next/head";

const SEOHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default SEOHead;
