import { useState } from 'react';
import { API_URL } from '../config';

export default function ImageUpload({ evtId, imageUploaded, token }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', image);
    formData.append('ref', 'events');
    formData.append('refId', evtId);
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className='file'>
          <input type='file' onChange={handleFileChange} />
        </div>
        <input type='submit' value='Upload' className='btn' />
      </form>
    </div>
  );
}
