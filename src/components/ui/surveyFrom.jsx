import {useState} from "react";
import { Film } from 'lucide-react';
import { RefreshCw } from 'lucide-react';

const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];

function MovieSurvey(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [movieName, setMovieName] = useState("");
    const [description, setDescription] = useState("");
    const [movieList, setMovieList] = useState(movies);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({
        name:"",
        email:"",
        movieName:"",
    });

    function handleSubmit(event){
        event.preventDefault();
        let hasError = false
        let newErrorMsg = {
            name:"",
            email:"",
            movieName:"",
        }
        if (!name) {
            hasError = true
            newErrorMsg.name = "Please enter your name"
        }
        if (!email) {
            hasError = true
            newErrorMsg.email = "Please enter your email"
        }
        if (!movieName) {
            hasError = true
            newErrorMsg.movieName = "Please select a movie"
        }
        if (hasError) {
            setError(newErrorMsg)
        } else {
            setSubmitted(true)
        }
    }

    function handleReset(){
        setName("");
        setEmail("");
        setMovieName("");
        setDescription("");
        setError({
            name:"",
            email:"",
            movieName:"",
        });
    }

return (
    <div className="min-h-screen w-full border border-solid">
    <h1 className="flex flex-col items-center text-3xl font-bold text-white px-10 py-6 bg-gradient-to-tr from-purple-400 to-purple-800"><Film size={30} />Movie Survey</h1>
    {!submitted ? (
    <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
        {/*Input section*/}
    <div className="flex flex-col gap-2">
        <label className="flex ml-2">ชื่อ</label>
        <input className="bg-white border rounded-lg mb-2 mt-2 px-2 flex mx-6 py-2"
        type="text"
        placeholder="Please enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} /> 
    {error.name && <p className="text-red-500">{error.name}</p>}
    </div>
    
    <div className="flex flex-col gap-2">
        <label className="flex ml-2">อีเมล</label>
        <input className="bg-white border rounded-lg mb-2 mt-2 px-2 flex mx-6 py-2"
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)} /> 
        {error.email && <p className="text-red-500">{error.email}</p>}
    </div>
    
        {/*Movie selection section*/}
    <div>
        <h3 className="flex ml-2 mt-5">Please select your favorite movie</h3>
        <div className="flex flex-col gap-3 mt-2 mb-5 mx-6">
            {movieList.map((movie) => (
             <div className="border border-gray-300 rounded-lg p-3 hover:bg-purple-50 transition-colors" key={movie.title}>
                <label className="flex gap-3">
                    <input 
                        type="radio" 
                        name="movie" 
                        value={movie.title}
                        checked={movieName === movie.title}
                        onChange={(e) => setMovieName(e.target.value)}
                        className="mt-1"
                        />
                        <div className="flex-1">
                            <div className="font-semibold text-lg flex">{movie.title} ({movie.year})</div>
                            <div className="text-sm text-gray-600 flex">
                                <span className="font-medium">Director : {movie.director}</span>
                            </div>
                        </div>
                    </label>
                </div>
            ))}
        </div>
        {error.movieName && <p className="text-red-500">{error.movieName}</p>}
    </div>

    {/*Description section*/}
    <label className="flex ml-2">Description</label>
    <textarea className="bg-white border rounded-lg mb-2 mt-2 px-2 flex mx-6 pb-10 pt-1"
    placeholder="Please enter your description"
    value={description}
    onChange={(e) => setDescription(e.target.value)} />

    {/*Submit section*/}
    <div className="flex justify-between mx-6 my-5">
    <button className="bg-gradient-to-tr from-purple-400 to-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
    type="submit">
        Submit
    </button>
    <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex gap-2 items-center"
    type="button"
    onClick={handleReset}>
        <RefreshCw size={18} />
        Reset
    </button>
    </div>

    </form>
    ):
    <div className="flex flex-col items-start mt-10 border border-gray-300 rounded-lg p-6 gap-3 ">
    <h3>Name: {name}</h3>
    <p>Email: {email}</p>
    <p>Your favorite movie is: {movieName}</p>
    <p>Description: {description}</p>
    <button 
        className="mt-10 bg-gradient-to-tr from-purple-400 to-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        onClick={() => {
            setSubmitted(false);
            handleReset();
        }}
    >
        Do the survey again
    </button>
    </div>
    }
    </div>
)
}

export default MovieSurvey
