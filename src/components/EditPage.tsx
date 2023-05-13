"use client";
import { Col, Grid, Text, TextInput } from "@tremor/react";
import React from "react";

const EditPage = () => {
  return (
    <Grid numCols={2} className="mx-4 my-4 gap-8">
      <TextInput placeholder="Title" />
      <TextInput placeholder="tags" />
      <Col numColSpan={2}>
        <textarea className=" h-[60vh] tremor-TextInput-input w-full focus:outline-none focus:ring-0 bg-transparent pl-4 pr-4 py-2 text-sm font-medium border-0 placeholder:text-gray-500" />
      </Col>
    </Grid>
  );
};

export default EditPage;
