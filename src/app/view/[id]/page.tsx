"use client";
import { RawNote } from "@/app/page";
import { Title } from "@tremor/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const View = () => {
  const path = usePathname();
  const id = path.substring(6);
  const [currentNote, setCurrentNote] = useState<RawNote>({
    id: "",
    title: "",
    content: "",
    tagIds: [""],
  });

  // const notes = useLocalStorage<RawNote[]>("Notes", []);
  let notes;

  if (typeof window !== "undefined") {
    notes = localStorage.getItem("Notes");
  }
  let parsedNotes: RawNote[];
  if (notes) parsedNotes = JSON.parse(notes);

  useEffect(() => {
    parsedNotes!.map((note) => {
      if (note.id === id) setCurrentNote(note);
    });
    // const currentNote = notes;

    console.log(currentNote);
    //eslint-disable-next-line
  }, []);

  if (notes && notes![0].length != 0)
    return (
      <div className="w-[80%] mx-auto my-4">
        <Title>{currentNote.title}</Title>
        <ReactMarkdown className="my-6 prose" remarkPlugins={[remarkGfm]}>
          {currentNote.content}
        </ReactMarkdown>
      </div>
    );
};

export default View;
