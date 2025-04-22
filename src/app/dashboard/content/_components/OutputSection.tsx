import React, { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(aiOutput || '');
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5">
        <h2>Your Result</h2>
        <Button
          className="bg-indigo-600 hover:bg-indigo-500"
          onClick={() => {
            navigator.clipboard
              .writeText(aiOutput)
              .then(() => alert('Text copied!'))
              .catch(() => alert('Failed to copy!'));
          }}
        >
          <Copy /> Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="It will be displayed here"
        previewStyle="vertical"
        height="350px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
