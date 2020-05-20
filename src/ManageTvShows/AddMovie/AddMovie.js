import React from 'react'
import './AddMovie.css'

export default function AddMovie() {
    return (
        <form className="AddMovie" action="">
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Movie title"
            />
            <textarea
                type="text"
                name="synopses"
                id="synopses"
                placeholder="Movie synopses"
            />
            <div className="input-container">
                <label>Select a cover image</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/png, image/jpeg"
                    multiple="false"
                    placeholder="Movie cover image"
                />
            </div>
            <div className="input-container">
                <label>Select a wallpaper</label>
                <input
                    type="file"
                    name="wallpaper"
                    id="wallpaper"
                    accept="image/png, image/jpeg"
                    multiple="false"
                    placeholder="Movie wallpaper"
                />
            </div>
            <input
                type="text"
                name="trailer"
                id="trailer"
                placeholder="Movie trailer"
            />
            <button className="button" type="submit">Add New Movie</button>
        </form>
    )
}
