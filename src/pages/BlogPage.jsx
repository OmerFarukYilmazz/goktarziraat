import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { blogPosts, categories } from "../data/blogData";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useToast } from '../context/ToastContext';
import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function BlogCard({ post }) {
  const { showToast } = useToast();
  const [expanded, setExpanded] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault(); // Link tıklamasını engelle
    try {
      if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent)) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
        showToast('Başarıyla paylaşıldı', 'success');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link kopyalandı', 'success');
      }
    } catch (err) {
      showToast('Paylaşım başarısız oldu', 'error');
    }
  };

  return (
    <Link to={`/blog/${post.id}`}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
          bgcolor: "background.paper",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          },
          "& .MuiCardHeader-root": {
            bgcolor: "rgb(248, 249, 250)",
          },
          "& .MuiCardHeader-title": {
            color: "#132020",
            fontWeight: 600,
          },
          "& .MuiCardHeader-subheader": {
            color: "#4B3621",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar src={post.author.avatar}>{post.author.name[0]}</Avatar>
          }
          action={
            <Typography
              variant="caption"
              sx={{
                bgcolor: "#556B2F20",
                color: "#556B2F",
                px: 1.5,
                py: 0.5,
                borderRadius: "1rem",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              {post.category}
            </Typography>
          }
          title={post.author.name}
          subheader={post.date}
        />
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <CardMedia
            component="img"
            image={post.image}
            alt={post.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#1C1C1C",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4B3621",
              lineHeight: 1.6,
            }}
          >
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            borderTop: 1,
            borderColor: "#e9ecef",
            px: 2,
            py: 1,
          }}
        >
          <IconButton
            aria-label="beğen"
            sx={{
              color: "#556B2F",
              "&:hover": {
                color: "#556B2F",
                bgcolor: "#556B2F10",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={handleShare}>
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="daha fazla göster"
            sx={{
              color: "#556B2F",
              "&:hover": {
                bgcolor: "#556B2F10",
              },
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            sx={{
              bgcolor: "#f8f9fa",
              color: "#4B3621",
            }}
          >
            <Typography paragraph>
              {post.content || "Detaylı içerik yakında eklenecek..."}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Link>
  );
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  }).isRequired
};

function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl mx-4 shadow-xl">
        {/* Ana background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/blog/banner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.85)",
          }}
        />

        {/* Sol taraftaki dekoratif çizgi */}
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary-dark/60 to-transparent transform -skew-x-12" />

        {/* Dekoratif pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              background: `
                radial-gradient(circle at 3px 3px, #000 1px, transparent 2px) 0 0 / 20px 20px repeat-x,
                radial-gradient(circle at 3px 3px, #000 1px, transparent 2px) 10px 10px / 20px 20px repeat-x
              `,
            }}
          />
        </div>

        {/* İçerik */}
        <div className="relative h-full container mx-auto px-4">
          <div className="flex items-center h-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-1.5 bg-secondary rounded-full" />
                <span className="text-rich-light text-xl font-bold tracking-wide">
                  Göktar Blog
                </span>
              </div>
              <h1 className="text-6xl font-bold text-rich-light mb-8 leading-tight">
                Blog & Makaleler
              </h1>
              <p className="text-xl text-rich-light max-w-xl leading-relaxed">
                Tarım ve zirai ilaçlama konularında güncel bilgiler, teknik
                makaleler ve uzman görüşleri
              </p>
            </div>
          </div>
        </div>

        {/* Sağ alt köşedeki dekoratif şekil */}
        <div className="absolute bottom-0 right-0">
          <div className="w-64 h-64 bg-secondary-light/20 backdrop-blur-sm rounded-tl-full" />
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Sağ Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-24">
                {/* Kategoriler */}
                <div className="bg-primary-bg p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6">Kategoriler</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full flex items-center justify-between p-3 rounded-xl 
                          hover:bg-primary hover:text-white hover:shadow-md 
                          group transition-all duration-300 ease-in-out"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform">
                            {category.icon}
                          </span>
                          <span>{category.name}</span>
                        </span>
                        <span className="bg-primary-bg group-hover:bg-white/20 px-2 py-1 rounded-full text-sm transition-colors">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popüler Yazılar */}
                <div className="bg-primary-bg p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6">Popüler Yazılar</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="flex gap-3 group hover:bg-primary-bg/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg group-hover:shadow-md transition-shadow"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
