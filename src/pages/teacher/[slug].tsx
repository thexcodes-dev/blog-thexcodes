import { GetServerSideProps } from "next";

interface TeacherProps {
  slug: string,
}

export default function Teacher({ slug }: TeacherProps){
    return (
      <h1>{slug}</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  return {
    props: { 
      slug: slug,
     },
  }
}