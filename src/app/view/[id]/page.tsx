"use client";
import { RawNote } from "@/app/page";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { Title } from "@tremor/react";
import { usePathname } from "next/navigation";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const id = () => {
  const path = usePathname();
  const id = path.substring(6);

  const notes = useLocalStorage<RawNote[]>("Notes", []);
  const currentNote = notes[0].filter((note) => note.id === id);

  return (
    <div className="w-[80%] mx-auto my-4">
      <Title>{currentNote[0].title}</Title>
      <ReactMarkdown className="my-6 prose" remarkPlugins={[remarkGfm]}>
        {currentNote[0].content}
      </ReactMarkdown>
    </div>
  );
};

export default id;
