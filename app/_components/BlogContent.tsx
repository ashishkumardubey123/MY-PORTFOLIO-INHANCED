import React from "react";
import { Button } from "@/components/ui/button";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

interface BlogContentProps {
  blogStyle: "grid" | "list";
  onToggleStyle: () => void;
}

export function BlogContent({ blogStyle, onToggleStyle }: BlogContentProps) {
  const blogPosts = [
    {
      title: "First Blog Post",
      excerpt: "This is the first blog post...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Second Blog Post",
      excerpt: "This is the second blog post...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Third Blog Post",
      excerpt: "This is the third blog post...",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to My Blog</h1>
        <Button
          onClick={onToggleStyle}
          className="bg-blue-500 text-white rounded-lg py-2 px-3 hover:bg-blue-600"
        >
          {blogStyle === "grid" ? <FaThList size={20} /> : <IoGrid size={20} />}
        </Button>
      </div>
      <div
        className={
          blogStyle === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "space-y-4"
        }
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={
              blogStyle === "grid"
                ? "border rounded-lg overflow-hidden"
                : "flex items-center space-x-4 border-b pb-4"
            }
          >
            {/* <img
              src={post.image}
              alt={post.title}
              className={
                blogStyle === "grid"
                  ? "w-full h-40 object-cover"
                  : "w-24 h-24 object-cover rounded"
              }
            /> */}
            <div className={blogStyle === "grid" ? "p-4" : "flex-grow"}>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
