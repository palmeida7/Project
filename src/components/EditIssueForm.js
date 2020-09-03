import React, { useState, useEffect } from "react";
import firebase, { db } from "../Config";
import fb from "../Config";

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

  if (!loading) {
    return (
      <form onSubmit={onSubmit}>
        <h4>Edit Issue</h4>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Summary</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Priority --</label>
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.currentTarget.value)}
          />
        </div>
        <button>Edit Issue</button>
      </form>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
