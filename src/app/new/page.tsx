"use client";
import { Note, NoteData, RawNote, RawNoteData } from "@/app/page";
import EditPage from "@/components/EditPage";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewPage = () => {
  // const [notes, setNotes] = useLocalStorage<RawNote[]>("Notes", []);
  let notes
  
  if(typeof window !== "undefined"){
  notes = localStorage.getItem("Notes");
  }
  let parsedNotes: RawNote[];

  if (notes) parsedNotes = JSON.parse(notes);

  function onCreateNote({ tagIds, ...data }: RawNoteData) {
    parsedNotes = [...parsedNotes, { ...data, id: uuidv4(), tagIds: ["12"] }];

    localStorage.setItem('Notes', JSON.stringify(parsedNotes));
  }

  return (
    <main>
      <EditPage onCreate={onCreateNote} />
    </main>
  );
};

export default NewPage;
