import { getAllMdxMetadata } from "@/mdx";
import Link from "next/link";
import { format } from "date-fns";

export default async function Page() {
  const posts = await getAllMdxMetadata();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-5 md:px-10">
      {/* New Header */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-start mt-16 md:mt-32 md:mb-5">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight">
            The LoomLetter Blog
          </h1>
          <p className="text-foreground/70 text-lg mt-2 max-w-lg">
            Never Miss A Newsletter Again
          </p>
        </div>
        <div className="">
          {/* extra stuff can go here like a sign up button */}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-[1200px] mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
        {posts.map((post) => (
          <Link
            key={"post-" + post.slug}
            href={`/${post.slug}`}
            className="group"
          >
            <div className="w-full h-full bg-foreground/[0.03] border border-foreground/5 rounded-lg p-3 transition-all duration-200 hover:bg-foreground/[0.05] flex flex-col">
              <h2 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-all duration-200">
                {post.title}
              </h2>
              <p className="text-foreground/80 mt-0 mb-3 text-sm">
                {post.sub_title}
              </p>
              <p className="text-foreground/60 mt-2 text-sm">{post.excerpt}</p>

              <div className="flex-1 min-h-5" />
              <div className="mb-2 flex flex-row justify-between">
                <p className="text-sm text-foreground/50">{post.author}</p>
                <p className="text-sm text-foreground/50">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </p>
              </div>
              <button className="bg-foreground/5 md:bg-foreground/10 py-2 w-full rounded-xl text-primary font-medium group-hover:bg-primary/30">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full text-center mt-16 py-5">
        <p className="text-sm text-foreground/70">
          &copy; LoomLetter 2024-2025
        </p>
      </footer>
    </div>
  );
}
