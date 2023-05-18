import NotesList from "@/components/NotesList";
import { Card } from "@tremor/react";
import Head from "next/head";
import Image from "next/image";

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
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <NotesList />
    </>
  );
}
