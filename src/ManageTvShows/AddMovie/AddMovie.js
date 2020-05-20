import React from 'react'
import './AddMovie.css'

export default function AddMovie() {
    return (
        <form className="AddMovie" action="">
            <label>Movie title</label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title.."
                />
            <label>Movie synopses</label>
            <textarea
                type="text"
                name="synopses"
                id="synopses"
                placeholder="Enter synopses.."
            />
            <label>Select a cover image</label>
            <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg"
            />
            <label>Select a wallpaper</label>
            <input
                type="file"
                name="wallpaper"
                id="wallpaper"
                accept="image/png, image/jpeg"
            />
            <label>Trailer URL</label>
            <input
                type="text"
                name="trailer"
                id="trailer"
                placeholder="Enter trailer URL.."
            />
            <button className="button" type="submit">Add New Movie</button>
        </form>
    )
}
