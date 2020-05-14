const Movie = require('./MovieSchema');


exports.createNewMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
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