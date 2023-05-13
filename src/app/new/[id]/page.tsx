import EditPage from "@/components/EditPage";
import React, { useState } from "react";

const page = () => {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')

  return (
    <main>
      <EditPage title={title} setTitle={setTitle} content={content} setContent={setContent}/>
    </main>
  );
};

export default page;
