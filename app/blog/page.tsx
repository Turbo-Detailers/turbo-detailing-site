import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "components/material-tailwind/TailwindComponents";

function PostCard(post: Post) {
  return (
    // <div className="mb-8">
    //   <h2 className="mb-1 text-xl">
    //     <Link href={post.url} className="text-blue-700 hover:text-blue-900">
    //       {post.title}
    //     </Link>
    //   </h2>
    //   <h4 className="mb-2 block text-s text-gray-400">{post.subtitle}</h4>
    //   <time dateTime={post.date} className="mb-2 block text-xs text-gray-500">
    //     {format(parseISO(post.date), "LLLL d, yyyy")}
    //   </time>
    //   <div
    //     className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
    //     dangerouslySetInnerHTML={{
    //       __html: post.body.raw.substring(0, 250) + "...",
    //     }}
    //   />
    // </div>
    <div className={"flex-row justify-center"}>
      <Card key={post._id} className="mt-6 w-96 mb-6">
        <CardHeader color="blue-gray" className="relative h-56">
          <Image src={post.image} alt="img-blur-shadow" fill />
        </CardHeader>
        <CardBody color={"gray"}>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            <Link href={post.url}>{post.title}</Link>
          </Typography>
          <Typography>{post.subtitle}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="red">
            <Link href={post.url}>Continue reading</Link>
          </Button>
          <Typography>
            <time
              dateTime={post.date}
              className="mt-2 block text-xs text-gray-700"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <title>Blog - Turbo Detailers</title>
      <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
