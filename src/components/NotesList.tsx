"use client";

import { NoteData } from "@/app/page";
import { Button, Card, Col, Grid, Title } from "@tremor/react";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { v4 as uuidV4 } from "uuid";

const notes: NoteData[] = [
  {
    title: "Note 1",
    id: "123",
    content: ` Hello, *world*! \n   *hello*`,
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1wr",
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1wer",
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1qrewt",
    tags: [{ id: "12", label: "First" }],
  },
];

const NotesList = () => {
  return (
    <main className="w-[80vw] my-4 mx-auto">
      <div className="flex justify-end items-center my-4 mx-4">
        <Link href={`/new/${uuidV4()}`}>
          <Button variant="secondary" icon={PlusIcon}>
            New Note
          </Button>
        </Link>
      </div>
      <Grid numCols={4} numColsMd={3} numColsSm={2} className="gap-2 w-[80vw]">
        {notes.map((note) => {
          return (
            <Link
              key={note.id + note.content}
              className="cursor-pointer "
              href={`/edit/${note.id}`}
            >
              <Card className="  hover:bg-slate-200  hover:duration-100 ease-out">
                <Title>{note.title}</Title>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
