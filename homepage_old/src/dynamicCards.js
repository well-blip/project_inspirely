import { useState } from "react";

const Cards = (props) => {
  const { read, views } = props;
  console.log(read);
  console.log(views);
  const [blogs, setNewBlogs] = useState([
    { title: "How to Train your Dragon", id: 1 },
    { title: "What did the fox say", id: 2 },
  ]);

  return (
    <div className="Blogs">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <p>{blog.title}</p>
            <div className="delete-button">
              <button
                // onClick={() => {
                //   handleDelete(blog.id);
                // }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
