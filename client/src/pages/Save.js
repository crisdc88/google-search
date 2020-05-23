import React, { Component } from "react";
import API from "../utils/API_server";
import CardSaveBook from "../components/CardSaveBook";

class SavePage extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
            console.log(this.state.books)
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container pt-5 mt-5">
                <h1 className="text-center"> Saved Books </h1>
                {this.state.books.map(book =>
                    <CardSaveBook key={book._id}
                        title={book.title}
                        author={book.authors}
                        body={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBtn={() => this.deleteBook(book._id)}
                        >
                    </CardSaveBook>
                 )} 
            </div>
        );
    }
}

export default SavePage;