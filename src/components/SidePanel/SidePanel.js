import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

const SidePanel = ({
  setShowSidePanel,
  title,
  setTitle,
  description,
  showSidePanel,
  editorState,
  setEditorState,
}) => {
  const resetForm = () => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(""))
      )
    );
    setTitle("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 && description.trim().length === 0) {
      alert("Please fill out the form bellow.");
      return;
    } else if (title.trim().length === 0) {
      alert("Please fill out the title field bellow.");
      return;
    } else if (description.trim().length === 0) {
      alert("Please fill out the description field bellow.");
      return;
    } else {
      fetch("http://localhost:8000/data/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      }).then((res) => res.json());

      alert("Thank you for submitting your data.");
      setShowSidePanel(false);
      setTitle("");
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(""))
        )
      );
    }
  };

  return (
    <div
      className={`top-0 left-0  w-[50vw] h-[20vw] md:w-[28vw] absolute ml-[-23px] z-20 ${
        showSidePanel ? "translate-x-6" : "translate-x-0"
      } ease-in-out duration-300`}
    >
      {showSidePanel && (
        <>
          <div className="flex flex-col justify-end py-4 border-b-2 border-[#f6f6f9] bg-white ">
            <div className="flex justify-between items-center">
              {/* left side */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="bg-[#f6f6f9] rounded-r-full h-10 w-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
                <div className="flex flex-col ml-3">
                  <p>Pages</p>
                  <div className="flex items-center">
                    {title === "" || description === "" ? (
                      <span className="w-2 h-2 rounded-full mr-2 bg-yellow-500"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full mr-2 bg-green-700"></span>
                    )}
                    <p>Unsaved changes</p>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-[#d1d5db]  h-10 w-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="bg-[#f6f6f9]  rounded-l-full h-10 w-14 hover:cursor-pointer"
                  onClick={() => setShowSidePanel(false)}
                >
                  <path
                    strokeLinecapp="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* homepage hero */}
          <div className="flex justify-between  bg-white px-3 py-3">
            <p className="uppercase">Homepage hero</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                onClick={() => resetForm()}
                className="hover:cursor-pointer w-8 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <form onSubmit={handleChange} className="h-fit bg-white">
            <div className="bg-[#f6f6f9] p-4">
              <label htmlFor="title" className="font-bold">
                Title
              </label>
              <br />
              <input
                type="text"
                value={title}
                id="title"
                name="title"
                className="border-2 border-[#d1d5db] w-full mb-5"
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />

              <div htmlFor="title" className="font-bold mb-2">
                Description
              </div>
              <div className="bg-white border-2 border-[#f6f6f9] pb-5">
                <Editor
                  contentState={editorState}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              </div>
            </div>

            <div className="flex justify-around py-5 w-full ">
              <button
                type="button"
                onClick={() => resetForm()}
                className="w-1/4 px-4 py-2 rounded-full bg-[#f6f6f9] border-2 border-[#d1d5db]"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-2/4 rounded-full text-white bg-[#3982f7]"
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SidePanel;
