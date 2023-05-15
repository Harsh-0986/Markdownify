"use client";
import { Note, NoteData, RawNoteData } from "@/app/page";
import { Button, Col, Grid, Text, TextInput } from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

type EditPageProps = {
  onCreate: (notes: RawNoteData) => void;
};

const EditPage = ({ onCreate }: EditPageProps) => {
  const router = useRouter();
  let titleRef = useRef<HTMLInputElement>(null);
  let contentRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let contentObj = {
      title: titleRef.current?.value as string,
      content: contentRef.current?.value as string,
      tagIds: ["12"],
    };

    onCreate(contentObj);
    router.push("/");
  }

  return (
    <>
      <Grid numCols={2} className="mx-4 my-4 gap-8">
        <TextInput required placeholder="Title" ref={titleRef} />
        <TextInput placeholder="Tags" />
        <Col numColSpan={2}>
          <div className="tremor-TextInput-root relative w-full flex items-center min-w-[10rem] focus:outline-none focus:ring-2 bg-white hover:bg-gray-50 text-gray-500 border-gray-300 focus:ring-blue-200 rounded-md border shadow-sm">
            <textarea
              ref={contentRef}
              required
              className="border-2 h-[60vh] tremor-TextInput-input w-full focus:outline-none focus:ring-0 bg-transparent pl-4 pr-4 py-2 text-sm font-medium rounded-md placeholder:text-gray-500"
            />
          </div>
        </Col>
      </Grid>
      <div className="flex justify-end items-center my-4 mx-4 gap-2">
        <Button variant="secondary" onClick={(e) => handleSubmit(e)}>
          Save
        </Button>
        <Link href={"/"}>
          <Button>Cancel</Button>
        </Link>
      </div>
    </>
  );
};

export default EditPage;
