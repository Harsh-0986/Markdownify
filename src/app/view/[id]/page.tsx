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

  console.log(notes);
  // let parsedNotes: RawNote[];
  // const [parsedNotes, setParsedNotes] = useState([
  let parsedNotes = [
    {
      id: "",
      content: "",
      tagIds: [""],
      title: "",
    },
  ];

  useEffect(() => {
    notes = localStorage!.getItem("Notes");
    // if (notes !== null && notes != undefined) setParsedNotes(JSON.parse(notes));
    parsedNotes = notes == null ? JSON.parse("{}") : JSON.parse(notes);
    console.log("Note: ", parsedNotes);
    parsedNotes!.map((note) => {
      if (note.id === id) setCurrentNote(note);
    });

    // const currentNote = notes;

    console.log(currentNote);
    //eslint-disable-next-line
  }, []);

  if (currentNote) {
    return (
      <div className="w-[80%] mx-auto my-4" suppressHydrationWarning>
        <Title>{currentNote.title}</Title>
        <ReactMarkdown className="my-6 prose" remarkPlugins={[remarkGfm]}>
          {currentNote.content}
        </ReactMarkdown>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default View;
