// TinyEditor.jsx
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor() {
  const editorRef = useRef(null);

  const handleSubmit = () => {
    if (editorRef.current) {
      alert(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Editor
        apiKey="1aqp3kuify9a0imazdgyk9x5c6o9mpwy7uyrjazx9zhzi332" // optional, can be used without API key
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Write something amazing...</p>"
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | image | removeformat | help'
        }}
      />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Show Content
      </button>
    </div>
  );
}
