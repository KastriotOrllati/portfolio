import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Blogs() {
  const [blog, setBlog] = useState();
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      blog number <span>{blogId}</span>
    </div>
  );
}

export default Blogs;
