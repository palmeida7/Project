import React, { useState, useEffect } from "react";
//import firebase, { db } from "../Config";
import fb from "../Config";
import '../App.css';

export default ({ match, history }) => {
  const {
    params: { id },
  } = match;
  console.log(id);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [priority, setPriority] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIssue = async () => {
      setLoading(true);
      const res = await fb.firestore().collection("issues").doc(id).get();
      setTitle(res.data().title);
      setSummary(res.data().summary);
      setPriority(res.data().priority);
      setLoading(false);
    };

    getIssue();
  }, [id]);

  async function onSubmit(e) {
    e.preventDefault();

    await fb.firestore().collection("issues").doc(id).set(
      {
        title,
        summary,
        priority,
      },
      { merge: true }
    );

    history.push("/");
  }
  async function onDelete(e) {
    e.preventDefault();

    await fb.firestore().collection("issues").doc(id).delete(
    );

    history.push("/");
  }

  if (!loading) {
    return (
      <form className="edit-form" onSubmit={onSubmit}>
        <h4>Edit Issue</h4>
        <div class="row">
        <div class="form-group w-25">
          <label>Title</label>
          <input
            class="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        </div>
        <div class="row">
        <div class="form-group w-25">
          <label>Summary</label>
          <input
            class="form-control"
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.currentTarget.value)}
          />
        </div>
        </div>
        <div class="row">
        <div class="form-group w-25">
          <label>- Priority -</label>
          <input
            class="form-control"
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.currentTarget.value)}
          />
        </div>
        </div>
        <button type="button" class="btn btn-success"onClick={onSubmit}>Edit Issue</button>
        <button type="button" class="btn btn-warning" onClick={onDelete}>Delete</button>
      </form>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
