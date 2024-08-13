import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sidebar from '../../app/components/dashboard/Sidebar';
import Navbar from '../../app/components/dashboard/navbar';
import './NewsManager.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function NewsManager() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    primary_image: '',
    content: '',
    redacteur_id: '',
    type: 'event',
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [news, setNews] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData({ ...formData, primary_image: base64 });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8000/api/news/${editId}`, formData);
        setPopupMessage('News updated successfully!');
      } else {
        await axios.post('http://localhost:8000/api/news', formData);
        setPopupMessage('News created successfully!');
      }
      setShowPopup(true);
      resetForm();
      fetchNews();
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('Error. Please try again.');
      setShowPopup(true);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      primary_image: '',
      content: '',
      redacteur_id: '',
      type: 'event',
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (newsItem) => {
    setFormData({
      title: newsItem.title,
      description: newsItem.description,
      primary_image: newsItem.primary_image,
      content: newsItem.content,
      redacteur_id: newsItem.redacteur_id,
      type: newsItem.type,
    });
    setIsEditing(true);
    setEditId(newsItem.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        await axios.delete(`http://localhost:8000/api/news/${id}`);
        setPopupMessage('News deleted successfully!');
        setShowPopup(true);
        fetchNews();
      } catch (error) {
        console.error('Error deleting news:', error);
        setPopupMessage('Error deleting news Please try again.');
        setShowPopup(true);
      }
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">

        <div className="main-content">
          <Navbar />
          <div className="dashboard">
            <h1 className="h1">News Manager</h1>
            <div className="panel">
              <h2 className="h2">{isEditing ? 'Edit News' : 'Add News'}</h2>
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <label className="label" htmlFor="title">Title</label>
                  <input
                    className="input"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="label" htmlFor="description">Description</label>
                  <textarea
                    className="textarea"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="label" htmlFor="primary_image">Primary Image</label>
                  <input
                    className="fileInput"
                    type="file"
                    id="primary_image"
                    name="primary_image"
                    onChange={handleImageUpload}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="content">Content</label>
                  <ReactQuill
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={{ toolbar: [['bold', 'italic'], [{ 'header': [1, 2, 3, false] }], [{ 'list': 'ordered' }, { 'list': 'bullet' }], ['link', 'image']] }}
                    formats={['header', 'bold', 'italic', 'list', 'bullet', 'link', 'image']}
                    placeholder="Write the content here..."
                  />
                </div>
                <div>
                  <label className="label" htmlFor="redacteur_id">Redacteur ID</label>
                  <input
                    className="input"
                    type="text"
                    id="redacteur_id"
                    name="redacteur_id"
                    value={formData.redacteur_id}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="label" htmlFor="type">Type</label>
                  <select
                    className="select"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="event">Event</option>
                    <option value="bource">Bource</option>
                    <option value="concoure">Concoure</option>
                  </select>
                </div>
                <button className="button" type="submit">{isEditing ? 'Update News' : 'Add News'}</button>
              </form>
            </div>
            <div className="newsList">
              {news.map((newsItem) => (
                <div key={newsItem.id} className="newsItem">
                  <h3>{newsItem.title}</h3>
                  <p>{newsItem.description}</p>
                  <div className="newsItemActions">
                    <button className="button editButton" onClick={() => handleEdit(newsItem)}>Edit</button>
                    <button className="button deleteButton" onClick={() => handleDelete(newsItem.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <div className="popupContent">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}