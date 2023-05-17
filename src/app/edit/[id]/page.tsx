"use client";

import { RawNote, RawNoteData } from "@/app/page";
import EditPage from "@/components/EditPage";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const path = usePathname();
  const id = path.substring(6);

  const [currentNote, setCurrentNote] = useState<RawNote>({
    id: "",
    title: "",
    content: "",
    tagIds: [""],
  });

  let notes;

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

  function onEditNote(id: string, { tagIds, ...data }: RawNoteData) {
    parsedNotes = [...parsedNotes, { ...data, id, tagIds: ["12"] }];

    console.log(parsedNotes);
    localStorage.setItem("Notes", JSON.stringify(parsedNotes));
  }

  if (currentNote)
    return (
      <EditPage
        onCreate={() => {}}
        onEdit={onEditNote}
        title={currentNote.title}
        id={id}
        content={currentNote.content}
      />
    );
  else return <div>Loading...</div>;
};

export default Edit;
