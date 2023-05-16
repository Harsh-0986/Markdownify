"use client";

import { Note, RawNote } from "@/app/page";
import { PlusIcon } from "@heroicons/react/outline";
import { Button, Card, Grid, Text, Title } from "@tremor/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const NotesList = () => {
  // const notes = useLocalStorage<RawNote[]>("Notes", []);
  let notes;
  const [parsedNotes, setParsedNotes] = useState<RawNote[] | null>();
  // let parsedNotes: RawNote[] = [
  //   {
  //     id: "",
  //     content: "",
  //     tagIds: [""],
  //     title: "",
  //   },
  // ];
  useEffect(() => {
    typeof window === undefined
      ? (notes = "")
      : (notes = localStorage!.getItem("Notes"));
    if (notes) {
      setParsedNotes(JSON.parse(notes));
    } else setParsedNotes(null);
    console.log(parsedNotes);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  //TODO: Update tag logic
  // const filteredNotes = useMemo(() => {
  //   return notes.map((note) => {
  //     return { ...note, tags: [{ id: "1", label: "12" }] };
  //   });
  // }, [notes]);

  // const filteredNotes = parsedNotes;

  return (
    <main className="w-[80vw] my-4 mx-auto flex-grow">
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
        {parsedNotes ? (
          parsedNotes.map((note, index) => {
            if (index != 0)
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
          })
        ) : (
          <div className="w-[80vw] mx-auto ">
            <Text className="text-2xl my-4">
              Looks like you haven't created any note yet!
            </Text>
            <Text className="text-2xl ">
              Click on the "New Note" button to get started!
            </Text>
          </div>
        )}
      </Grid>
    </main>
  );
};

export default NotesList;
