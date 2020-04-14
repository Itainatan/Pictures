import React from 'react';
import axios from "axios";

const Uploader = (props) => {
    let inputImage = React.createRef();
    const inputTag = React.createRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        let upload = new FormData();
        upload.append('file', inputImage);
        upload.append('tags', inputTag.current.value);
        try {
            await axios.post(`/api/pics`, upload);
            props.history.push("/");
        }
        catch (err) { console.log(err) }
    }

    return (
        <div className='tc'>
            <p> UPLOAD </p>
            <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 ba b--black'>
                <h3>Choose an image to upload:</h3>
                <form onSubmit={onSubmit} >
                    <input type="file" onChange={(e) => inputImage = e.target.files[0]} />
                    <h3>Enter HASHTAGS:</h3>
                    <input className='pa3 ba b--light-blue bg-washed-blue' placeholder="enter here" ref={inputTag} />
                    <div>
                        <button type='submit'> Upload! </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Uploader;