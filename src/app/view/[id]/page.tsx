"use client";
import { RawNote } from "@/app/page";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { Button, Title } from "@tremor/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import c from "react-syntax-highlighter/dist/cjs/languages/prism/c";
import rangeParser from "parse-numeric-range";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("c", c);

const syntaxTheme = nightOwl;

const MarkdownComponents: object = {
  code({ node, inline, className, ...props }: any) {
    const hasLang = /language-(\w+)/.exec(className || "");
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data.meta?.replace(/\s/g, "");
        const strlineNumbers = RE?.test(metadata)
          ? RE?.exec(metadata)![1]
          : "0";
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string | null = highlight.includes(applyHighlights)
          ? "highlight"
          : null;
        return { data };
      } else {
        return {};
      }
    };

    return hasLang ? (
      <SyntaxHighlighter
        style={syntaxTheme}
        language={hasLang[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        wrapLines={hasMeta}
        useInlineStyles={true}
        lineProps={applyHighlights}
      >
        {props.children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};

const View = () => {
  const router = useRouter();
  const path = usePathname();
  const id = path.substring(6);
  const [isLoading, setIsLoading] = useState(false);
  const [currentNote, setCurrentNote] = useState<RawNote>({
    id: "",
    title: "",
    content: "",
    tagIds: [""],
  });

  // const notes = useLocalStorage<RawNote[]>("Notes", []);
  let notes;

  // console.log(notes);
  // let parsedNotes: RawNote[];
  // const [parsedNotes, setParsedNotes] = useState([
  let parsedNotes = [
    {
      id: "",
      content: "",
      tagIds: [""],
      title: "",
    },
  ];

  useEffect(() => {
    notes = localStorage!.getItem("Notes");
    // if (notes !== null && notes != undefined) setParsedNotes(JSON.parse(notes));
    parsedNotes = notes == null ? JSON.parse("{}") : JSON.parse(notes);
    // console.log("Note: ", parsedNotes);
    parsedNotes!.map((note) => {
      if (note.id === id) setCurrentNote(note);
    });

    // const currentNote = notes;

    // console.log(currentNote);
    //eslint-disable-next-line
  }, []);

  const handleDelete = () => {
    notes = localStorage!.getItem("Notes");
    // if (notes !== null && notes != undefined) setParsedNotes(JSON.parse(notes));
    parsedNotes = notes == null ? JSON.parse("{}") : JSON.parse(notes);
    if (parsedNotes) {
      // console.log(parsedNotes);
      parsedNotes = parsedNotes.filter((note) => note.id != id);
      // console.log("Delete note: ", parsedNotes);
      localStorage!.setItem("Notes", JSON.stringify(parsedNotes));
      router.back();
    }
  };

  if (currentNote) {
    return (
      <div className="w-[80%] mx-auto my-4 flex-grow" suppressHydrationWarning>
        <div className="my-4 flex justify-end items-center gap-4">
          <Link href={`/edit/${id}`}>
            <Button
              variant="secondary"
              loading={isLoading}
              onClick={() => setIsLoading(true)}
            >
              Edit Note
            </Button>
          </Link>
          <Button
            variant="primary"
            className="bg-red-600 hover:bg-red-500 border-none"
            onClick={() => handleDelete()}
          >
            Delete Note
          </Button>
        </div>
        <Title>{currentNote.title}</Title>
        <ReactMarkdown
          className="my-6 prose"
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents}
        >
          {currentNote.content}
        </ReactMarkdown>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default View;
