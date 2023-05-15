"use client";
import { Note, NoteData, RawNote, RawNoteData } from "@/app/page";
import EditPage from "@/components/EditPage";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

const NewPage = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("Notes", []);

  function onCreateNote( { tagIds, ...data }: RawNoteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...data,  id: uuidv4(), tagIds: ["12"] }];
    });
  }

  return (
    <main>
      <EditPage onCreate={onCreateNote}  />
    </main>
  );
};

export default NewPage;
