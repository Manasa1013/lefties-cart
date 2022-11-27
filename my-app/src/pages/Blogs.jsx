import { BlogCard } from "../components/BlogCard";
import { blogSources } from "../data/data";
import { Footer } from "../components/Footer";
export const Blogs = () => {
  return (
    <>
      <main>
        <div className="grid-container">
          {blogSources.map((blogSource) => {
            return (
              <BlogCard
                key={blogSource.id}
                blogger={blogSource.blogger}
                title={blogSource.title}
                imgSrc={blogSource.imgSrc}
                id={blogSource.id}
                altText={blogSource.altText}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};
