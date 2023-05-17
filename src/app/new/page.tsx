"use client";
import { Note, NoteData, RawNote, RawNoteData } from "@/app/page";
import EditPage from "@/components/EditPage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewPage = () => {
  // const [notes, setNotes] = useLocalStorage<RawNote[]>("Notes", []);
  let notes;
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
    typeof window === undefined
      ? (notes = "")
      : (notes = localStorage!.getItem("Notes"));
    if (notes) parsedNotes = JSON.parse(notes);
  }, []);

  function onCreateNote({ tagIds, ...data }: RawNoteData) {
    parsedNotes = [...parsedNotes, { ...data, id: uuidv4(), tagIds: ["12"] }];

    console.log(parsedNotes);
    localStorage.setItem("Notes", JSON.stringify(parsedNotes));
  }

  return (
    <main>
      <EditPage onEdit={() => {}} onCreate={onCreateNote} />
    </main>
  );
};

export default NewPage;
