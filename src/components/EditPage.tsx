"use client";
import { RawNoteData } from "@/app/page";
import { Button, Col, Grid, TextInput } from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type EditPageProps = {
  onCreate: (notes: RawNoteData) => void;
  onEdit: (id: string, notes: RawNoteData) => void;
  id?: string;
  title?: string;
  content?: string;
};

const EditPage = ({ onCreate, onEdit, id, title, content }: EditPageProps) => {
  const router = useRouter();
  let titleRef = useRef<HTMLInputElement>(null);
  let contentRef = useRef<HTMLTextAreaElement>(null);
  let tagRef = useRef<HTMLInputElement>(null);

  // console.log(title, content);

  useEffect(() => {
    if (title && content) {
      if (titleRef.current) titleRef.current.value = title;
      if (contentRef.current) contentRef.current.value = content;
    } else {
      if (titleRef.current) titleRef.current.value = "";
      if (contentRef.current) contentRef.current.value = "";
    }
  }, [title]);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let contentObj = {
      title: titleRef.current?.value as string,
      content: contentRef.current?.value as string,
      tagIds: ["12"],
    };

    // console.log(id);
    if (!id) onCreate(contentObj);
    else onEdit(id, contentObj);

    router.back();
  }

  return (
    <div suppressHydrationWarning>
      <Grid numCols={1} className="mx-4 my-4 gap-8 flex-grow">
        <TextInput required placeholder="Title" ref={titleRef} />
        <Col numColSpan={1}>
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
    </div>
  );
};

export default EditPage;
