import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import blogImage1 from "../../assets/images/blog/modern-farming.jpg";
import blogImage2 from "../../assets/images/blog/pest-control.jpg";
import blogImage3 from "../../assets/images/blog/soil-analysis.jpg";
import authorImage from "../../assets/images/team/photoM.jpeg";

function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Modern Tarım Teknikleri",
      content:
        "Sürdürülebilir tarım için modern yaklaşımlar ve yenilikçi çözümler. Toprak sağlığından su yönetimine kadar detaylı bilgiler...",
      date: "15 Mart 2024",
      image: background,
      author: {
        name: "Melek Gök",
        avatar: authorImage,
        title: "Ziraat Mühendisi",
      },
    },
    {
      id: 2,
      title: "Zirai İlaçlama Yöntemleri",
      content:
        "Doğru ilaçlama teknikleri ve dikkat edilmesi gereken önemli noktalar...",
      date: "10 Mart 2024",
      image: background,
      author: {
        name: "Melek Gök",
        avatar: authorImage,
        title: "Ziraat Mühendisi",
      },
    },
    {
      id: 3,
      title: "Toprak Analizi Önemi",
      content:
        "Verimli bir üretim için toprak analizi ve gübreleme tavsiyeleri...",
      date: "5 Mart 2024",
      image: background,
      author: {
        name: "Melek Gök",
        avatar: authorImage,
        title: "Ziraat Mühendisi",
      },
    },
    {
      id: 4,
      title: "Doğru Gübreleme",
      content:
        "Bitki türüne ve toprak yapısına göre doğru gübreleme teknikleri...",
      date: "1 Mart 2024",
      image: background,
      author: {
        name: "Melek Gök",
        avatar: authorImage,
        title: "Ziraat Mühendisi",
      },
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card className="bg-rich-bg-light max-w-[24rem] overflow-hidden shadow-lg min-h-[450px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[200px] w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-6">
                <Typography
                  variant="h4"
                  className="text-lg font-bold mb-2 line-clamp-1 text-rich-dark"
                >
                  {post.title}
                </Typography>
                <Typography className="text-rich-dark font-normal text-sm line-clamp-3">
                  {post.content}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between p-6 pt-0 mt-auto">
                <div className="flex items-center">
                  <Tooltip className="text-rich-dark"
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
