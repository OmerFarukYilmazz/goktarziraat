import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

function BlogSection() {
  const truncateContent = (content) => {
    const firstParagraph = content.split("\n\n")[0];
    if (firstParagraph.length > 120) {
      return firstParagraph.substring(0, 120) + "...";
    }
    return firstParagraph;
  };

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.slice(0, 4).map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card className="bg-rich-bg-light max-w-[24rem] h-[400px] overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[200px] w-full object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/30">
                      {post.author ? post.author.name.charAt(0).toUpperCase() : '?'}
                    </span>
                  </div>
                )}
              </CardHeader>
              <CardBody className="p-6">
                <Typography
                  variant="h4"
                  className="text-lg font-bold mb-2 line-clamp-1 text-rich-dark"
                >
                  {post.title}
                </Typography>
                <Typography className="text-rich-dark font-normal text-sm">
                  {truncateContent(post.content)}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between p-6 pt-0 mt-auto">
                <div className="flex items-center">
                  <Tooltip
                    className="text-rich-dark"
                    content={`${post.author.name}`}
                  >
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt={post.author.name}
                      src={post.author.avatar}
                      className="rounded-full w-10 h-10 border-2 border-primary-bg-dark hover:z-10 cursor-pointer"
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal text-sm text-primary">
                  {post.date}
                </Typography>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
