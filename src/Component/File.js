import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./../Style/file.css";

const maxFileSize = 44 * 1024;

function File() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const serviceId = location.pathname.split("/")[2];

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  function onFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (preview) URL.revokeObjectURL(preview);
    setStatus("");
    if (!selectedFile) { setFile(null); setPreview(""); return; }
    if (!selectedFile.type.startsWith("image/")) { setFile(null); setPreview(""); setStatus("Choose an image file (PNG, JPG, or WebP)."); return; }
    if (selectedFile.size > maxFileSize) { setFile(null); setPreview(""); setStatus("This image is larger than 44 KB. Choose a smaller image before uploading."); return; }
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  async function upload(event) {
    event.preventDefault();
    if (!file) { setStatus("Choose an image before uploading."); return; }
    setIsSubmitting(true); setStatus("");
    const formData = new FormData(); formData.append("image", file);
    try {
      const response = await axios.post(`http://localhost:3001/upload/${serviceId}`, formData);
      setStatus(response.data?.Status === "Success" ? "Image uploaded successfully." : "The image could not be uploaded. Please try again.");
    } catch { setStatus("The image could not be uploaded. Please check your connection and try again."); }
    finally { setIsSubmitting(false); }
  }

  return <main className="image_file" id="main-content"><section className="file">
    <Link to="/datalog_one" className="file-back">← Back to service members</Link>
    <p className="eyebrow">Profile image</p><h1 id="file-topic">Upload a service image</h1><p className="file-copy">Use a clear, square photo to make the service profile easier to recognise.</p>
    <div className="condition"><span aria-hidden="true">i</span><p>Choose a PNG, JPG, or WebP image up to 44 KB.</p></div>
    <form className="file-input" onSubmit={upload}>
      <label htmlFor="images">Choose image<input type="file" name="images" id="images" accept="image/png,image/jpeg,image/webp" onChange={onFileChange} /></label>
      {preview && <img src={preview} alt="Selected upload preview" id="image-show" />}
      <button id="file-submit" type="submit" disabled={!file || isSubmitting}>{isSubmitting ? "Uploading…" : "Upload image"}</button>
      {status && <p className={status.includes("successfully") ? "file-status file-status--success" : "file-status"} role="status">{status}</p>}
    </form>
  </section></main>;
}

export default File;
