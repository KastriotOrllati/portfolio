import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const defaultPic =
  "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010?s=612x612";
import styles from "../../styles/Blog.module.css";

export default function Blog() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:43464/api/blog");
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className={styles.blogGrid}>
      <h1>Welcome to my blog!</h1>
      <div className={styles.blogFlex}>
        {blogs?.map((blog) => (
          <Link key={blog.id} href={{ pathname: `/blog/${blog.id}` }} passHref>
            <div className={styles.blogCard}>
              <Image
                src={defaultPic}
                width={150}
                height={200}
                alt="defaultPicture"
              />

              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{blog.blogTitle}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
