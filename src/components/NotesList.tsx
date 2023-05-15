"use client";

import { Note, RawNote } from "@/app/page";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { PlusIcon } from "@heroicons/react/outline";
import { Button, Card, Grid, Title } from "@tremor/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const NotesList = () => {
  const notes = useLocalStorage<RawNote[]>("Notes", []);
  const [isLoading, setIsLoading] = useState(false);

  //TODO: Update tag logic
  // const filteredNotes = useMemo(() => {
  //   return notes.map((note) => {
  //     return { ...note, tags: [{ id: "1", label: "12" }] };
  //   });
  // }, [notes]);

  console.log(notes)

  const filteredNotes = notes[0];

  return (
    <main className="w-[80vw] my-4 mx-auto">
      <div className="flex justify-end items-center my-4 mx-4">
        <Link href={`/new`}>
          <Button
            variant="secondary"
            onClick={() => setIsLoading(true)}
            icon={PlusIcon}
            loading={isLoading}
          >
            New Note
          </Button>
        </Link>
      </div>
      <Grid numCols={4} numColsMd={3} numColsSm={2} className="gap-2 w-[80vw]">
        {filteredNotes.map((note) => {
          return (
            <Link
              key={note.id + note.content}
              className="cursor-pointer "
              href={`/view/${note.id}`}
            >
              <Card className="hover:bg-slate-200  hover:duration-100 ease-out h-48 overflow-hidden">
                <Title>{note.title}</Title>
                <ReactMarkdown
                  className="prose my-2"
                  remarkPlugins={[remarkGfm]}
                >
                  {note.content}
                </ReactMarkdown>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </main>
  );
};

export default NotesList;
