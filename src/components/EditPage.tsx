"use client";
import { Button, Col, Grid, Text, TextInput } from "@tremor/react";
import Link from "next/link";
import React from "react";

type EditPageProps = {
  title: string;
  content: string;
  setContent: (content: string) => void;
  setTitle: (title: string) => void;
};

// function handleSubmit(e){
//
// }

const EditPage = ({ title, setTitle, content, setContent }: EditPageProps) => {
  return (
    <>
      <Grid numCols={2} className="mx-4 my-4 gap-8">
        <TextInput
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput placeholder="Tags" />
        <Col numColSpan={2}>
          <div className="tremor-TextInput-root relative w-full flex items-center min-w-[10rem] focus:outline-none focus:ring-2 bg-white hover:bg-gray-50 text-gray-500 border-gray-300 focus:ring-blue-200 rounded-md border shadow-sm">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-2 h-[60vh] tremor-TextInput-input w-full focus:outline-none focus:ring-0 bg-transparent pl-4 pr-4 py-2 text-sm font-medium rounded-md placeholder:text-gray-500"
            />
          </div>
        </Col>
      </Grid>
      <div className="flex justify-end items-center my-4 mx-4 gap-2">
        <Button variant="secondary" onClick={handleSubmit}>
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
