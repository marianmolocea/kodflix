const Movie = require('./MovieSchema');


exports.createNewMovie = async (req, res) => {
    try {
        let movie = {
            image: req.files[0].originalname,
            wallpaper: `w-${req.files[1].originalname}`,
            title: req.body.title,
            synopsis: req.body.synopsis,
            trailer: req.body.trailer
        }

        const newMovie = await Movie.create(movie);
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({
            status: "success",
            data: {
                movies,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.getOneMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                movie,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                movie,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}