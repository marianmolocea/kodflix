const Movie = require('./MovieSchema');


exports.createNewMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create({
            "image": "arrow.png",
            "title": "Arrow",
            "synopsis": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five year later a changed man, determined to clean up the city as a hooded vigilante armed with a bow."
        });
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