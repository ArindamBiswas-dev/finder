import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CreatePost() {
  const [editorSate, setEditorState] = useState(EditorState.createEmpty());
  const [typeOfPost, settypeOfPost] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onEditorStateChange = (editorSate) => {
    setEditorState(editorSate);
  };

  return (
    <div className="md:ml-28 flex justify-center">
      <div className="max-w-screen-lg w-full py-6 px-4 flex flex-col">
        <h1 className="text-2xl font-semibold mb-8">Create New Post</h1>
        <div className="flex justify-end mb-4">
          <select
            className="select select-bordered select-info w-full max-w-xs"
            onChange={(e) => settypeOfPost(e.target.value)}
            value={typeOfPost}
          >
            <option value="">Choose the type of post</option>
            <option value="freeCourse">Free Course</option>
            <option value="ji">Job/Internship</option>
          </select>
        </div>
        <div className="form-control mb-8">
          <label className="label">
            <span className="label-text text-base font-semibold text-gray-600">
              Title of the post
            </span>
          </label>
          <input
            type="text"
            placeholder="Title of the post"
            className="input input-lg input-info input-bordered font-semibold text-xl"
          />
        </div>
        {typeOfPost.length > 0 && typeOfPost === 'ji' && (
          <div className="flex mb-4 space-x-3">
            <div className="font-semibold p-1">
              <p className="mb-2 text-gray-600">Start Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className="input input-info"
              />
            </div>
            <div className="font-semibold p-1">
              <p className="mb-2 text-gray-600">End Date</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                className="input input-info"
              />
            </div>
          </div>
        )}
        <label className="label">
          <span className="label-text text-base font-semibold text-gray-600">
            Content
          </span>
        </label>
        <div className="border border-blue-500 rounded-md p-2">
          <Editor
            editorState={editorSate}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="flex sticky top-0 z-50"
            editorClassName="px-3"
            wrapperClassName="wrapperClassName"
          />
        </div>
        <button
          className="btn btn-info mt-8 ml-auto"
          disabled={typeOfPost.length === 0}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
