import NotesList from "@/components/NotesList";
import { Card } from "@tremor/react";
import Image from "next/image";
import { useRouter } from "next/router";

export type NoteData = {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export default function Home() {
  return <NotesList />;
}
