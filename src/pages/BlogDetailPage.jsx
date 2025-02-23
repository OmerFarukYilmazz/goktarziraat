import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowLeft,
} from "react-icons/fa";
import BlogSection from "../components/home/BlogSection";
import { Avatar } from "@mui/material";
import { useToast } from '../context/ToastContext';
import ShareIcon from "@mui/icons-material/Share";

function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const relatedPosts = blogPosts
    .filter((p) => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);
  const { showToast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent)) {
        await navigator.share({
          title: post.title,
          text: post.content.slice(0, 100) + '...',
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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog yazısı bulunamadı</h2>
          <Link
            to="/blog"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <FaArrowLeft />
            <span>Blog'a Dön</span>
          </Link>

          <button 
            onClick={handleShare}
            className="p-2 rounded-full bg-primary-bg hover:bg-primary hover:text-white transition-all"
            sx={{
              color: "#556B2F",
              "&:hover": {
                color: "#556B2F",
                bgcolor: "#556B2F10",
              },
            }}
          >
            <ShareIcon />
          </button>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <span className="flex items-center gap-2">
                  <FaCalendar /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaUser /> {post.author?.name}
                </span>
                <span className="flex items-center gap-2">
                  <FaTag /> {post.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-12 p-8 bg-gradient-to-r from-primary-bg to-secondary-bg rounded-2xl">
            {post.author?.avatar ? (
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full ring-4 ring-white"
              />
            ) : (
              <Avatar
                className="w-20 h-20 rounded-full ring-4 ring-white bg-primary/10 text-primary text-3xl"
              >
                {post.author?.name ? post.author.name.charAt(0).toUpperCase() : '?'}
              </Avatar>
            )}
            <div>
              <h3 className="font-bold text-xl mb-1">{post.author?.name || 'Yazar'}</h3>
              <p className="text-rich-dark/80 mb-2">{post.author?.title}</p>
              <div className="flex gap-4">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {post.date}
                </span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-16">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-rich-dark/90 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 mb-20">
              <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-rich-bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-rich-dark/70">
                          {relatedPost.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="mt-32 border-t pt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Diğer Blog Yazıları
          </h2>
          <BlogSection />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
