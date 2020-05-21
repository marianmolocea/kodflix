import React, {useState} from 'react'
import './AddMovie.css'

export default function AddMovie() {

    const [imageData, setImageData] = useState({});
    const [wallpaperData, setWallpaperData] = useState({});
    const [title, setTitle] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [trailer, setTrailer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('cover', imageData, imageData.name);
        formData.append('wallpaper', wallpaperData, wallpaperData.name);
        formData.append('title', title);
        formData.append('synopsis', synopsis);
        formData.append('trailer', trailer);

        const response = await fetch('/manage/tv-shows/new-movie', {
            method: "POST",
            body: formData
        });
        let result = await response.json();
        console.log(result)
    }

    return (
        <form className="AddMovie">
            <label>Movie title</label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title.."
                onChange={e => setTitle(e.target.value)}
                />
            <label>Movie synopsis</label>
            <textarea
                type="text"
                name="synopsis"
                id="synopsis"
                placeholder="Enter synopsis.."
                onChange={e => setSynopsis(e.target.value)}
            />
            <label>Select a cover image</label>
            <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg"
                onChange={e => setImageData(e.target.files[0])}
            />
            <label>Select a wallpaper</label>
            <input
                type="file"
                name="wallpaper"
                id="wallpaper"
                accept="image/png, image/jpeg"
                onChange={e => setWallpaperData(e.target.files[0])}
            />
            <label>Trailer URL</label>
            <input
                type="text"
                name="trailer"
                id="trailer"
                placeholder="Enter trailer URL.."
                onChange={e => setTrailer(e.target.value)}
            />
            <button className="button" onClick={(e) => handleSubmit(e)}>Add New Movie</button>
        </form>
    )
}
