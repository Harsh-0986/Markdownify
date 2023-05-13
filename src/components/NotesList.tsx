import { NoteData } from "@/app/page";
import { Card, Col, Grid, Title } from "@tremor/react";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const notes: NoteData[] = [
  {
    title: "Note 1",
    id: "123",
    content: `# Hello, *world*!
     `,
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1",
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1",
    tags: [{ id: "12", label: "First" }],
  },
  {
    title: "Note 1",
    id: "123",
    content: "Note 1",
    tags: [{ id: "12", label: "First" }],
  },
];

const NotesList = () => {
  return (
    <main className="w-[80vw] my-4 mx-auto">
      <Grid numCols={4} numColsMd={3} numColsSm={2} className="gap-2 w-[80vw]">
        {notes.map((note) => {
          return (
            <Card>
              <Title>{note.title}</Title>
              <ReactMarkdown
                children={note.content}
                remarkPlugins={[remarkGfm]}
              />
            </Card>
          );
        })}
      </Grid>
    </main>
  );
};

export default NotesList;
