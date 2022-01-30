import React, { useState } from "react";
import { UilMessage } from "@iconscout/react-unicons";
import stylez from "../../styles/Blog.module.css";
import styles from "../../styles/Home.module.css";

const initialValue = {
  blogTitle: "",
  blogContent: "",
};

function New(props) {
  const [blog, setBlog] = useState(initialValue);

  function handleSubmit(e, data) {
    e.preventDefault();
    fetch("http://localhost:43464/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(resetForm())
      .catch((err) => {
        console.log(err);
      });
  }
  const resetForm = () => {
    setBlog(initialValue);
  };

  return (
    <div className={stylez.blogGrid}>
      <h1>So, what are you writing today...</h1>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e, blog)}
        className={styles.form}
      >
        <div className={styles.contactInput}>
          <div className={styles.contactContent}>
            <label htmlFor="text" className={styles.contactLabel}>
              Blog Title
            </label>
            <input
              type="text"
              onChange={(e) => setBlog({ ...blog, blogTitle: e.target.value })}
              className={styles.contactInput}
              value={blog.blogTitle}
            />
          </div>
          <div className={styles.contactContent}>
            <label htmlFor="email" className={styles.contactLabel}>
              Message
            </label>
            <textarea
              cols={0}
              rows={4}
              type="text"
              className={styles.contactInput}
              value={blog.blogContent}
              onChange={(e) =>
                setBlog({ ...blog, blogContent: e.target.value })
              }
            />
          </div>

          <button type="submit" className={styles.button}>
            Create Blog <UilMessage className={styles.buttonIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default New;
