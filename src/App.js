import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import Footer from "./components/Footer/Footer";
import SidePanel from "./components/SidePanel/SidePanel";
import { EditorState, convertToRaw } from "draft-js";
import { convertToHTML } from "draft-convert";

const App = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [title, setTitle] = useState("");
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // convert rich text into HTML
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
  let blockValue = blocks
    .map((block) => (!block.text.trim() && "") || block.text)
    .join("\n");

  return (
    <>
      <div>
        <SidePanel
          setShowSidePanel={setShowSidePanel}
          title={title}
          setTitle={setTitle}
          description={blockValue}
          showSidePanel={showSidePanel}
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <Header />
        <HeroComponent
          title={title}
          description={blockValue}
          editorState={editorState}
          convertedContent={convertedContent}
        />
        <ProductDescription />
        <Footer />
      </div>
      {!showSidePanel && (
        <button
          className="absolute top-24 z-30 bg-[#f6f6f9] rounded-r-full h-10 w-14 flex justify-center items-center"
          onClick={() => setShowSidePanel(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default App;
