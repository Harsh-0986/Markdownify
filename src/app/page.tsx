import NotesList from "@/components/NotesList";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  content: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  content: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};
export default function Home() {
  return (
    <>
      <NotesList />
    </>
  );
}
