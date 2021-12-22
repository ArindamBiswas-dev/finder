import React, { useContext } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCreateJIPost } from '../hooks/useCreateJIPost';
import { useCreateCoursePost } from '../hooks/useCreateCoursePost';
import { UserContext } from '../App';
import { toast } from 'react-toastify';
import { Rating } from './Rating';

function CreatePost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [typeOfPost, settypeOfPost] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [title, setTitle] = useState();
  const [rating, setRating] = useState(null);
  const user = useContext(UserContext);
  const { mutate: createJIPost, isLoading: jiLoading } = useCreateJIPost();
  const { mutate: createCoursePost, isLoading: courseLoading } =
    useCreateCoursePost();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const createPost = (event) => {
    event.preventDefault();
    console.log('createPost');
    try {
      if (typeOfPost === 'freeCourse') {
        const formData = {
          title,
          description: convertToRaw(editorState.getCurrentContent()),
          rating: rating,
          userId: user,
        };
        console.log(formData);
        createCoursePost(formData);
        toast.success('Course added successfully');
        return;
      }
      if (typeOfPost === 'ji') {
        const formData = {
          title,
          description: convertToRaw(editorState.getCurrentContent()),
          userId: user,
          startDate,
          endDate,
        };
        createJIPost(formData);
        toast.success('Job/Internship added successfully');
        return;
      }
    } catch (error) {
      toast.error('Something wrong happend');
    }
  };

  return (
    <div className="md:ml-28 flex justify-center">
      <form>
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
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {typeOfPost.length > 0 && typeOfPost !== 'ji' && (
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-base font-semibold text-gray-600">
                  Rating
                </span>
              </label>
              <Rating setRating={setRating} rating={rating} />
            </div>
          )}
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
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="flex sticky top-0 z-50"
              editorClassName="px-3"
              wrapperClassName="wrapperClassName"
            />
          </div>
          <button
            className={`btn btn-info mt-8 ml-auto ${
              jiLoading || courseLoading ? 'loading' : ''
            }`}
            disabled={typeOfPost.length === 0}
            onClick={createPost}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
