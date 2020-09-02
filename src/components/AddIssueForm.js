import React, { useState } from 'react';
import firebase from '../Config';

const AddIssueForm = () => {
    
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [priority, setPriority] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('issues')
            .add({
                title,
                summary,
                priority
            })
            .then(()=>{
                setTitle('')
                setSummary('')
                setPriority('')
            })
    }

    return(
        <form onSubmit={onSubmit}>
            <h4>Add New Issue</h4>
            <div>
                <label>New Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.currentTarget.value)} />
            </div>
            <div>
                <label>Summary</label>
                <input type="text" value={summary} onChange={e=>setSummary(e.currentTarget.value)} />
            </div>
            <div>
                <label>Priority --</label>
                <input type="text" value={priority} onChange={e=>setPriority(e.currentTarget.value)} />
            </div>
            <button>Add New Issue</button>
        </form>
    )
}

export default AddIssueForm;