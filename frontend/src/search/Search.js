import "./Search.css"
import 'bootstrap/dist/css/bootstrap.min.css'
// import Dropdown from './Dropdown'
import Dropdown from "./Dropdown"
import { Form } from 'react-bootstrap';


function Search() {
    return (
        <div class="search">
            <head>
                <title>Search</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet"/>
                <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css" rel="stylesheet" integrity="sha384-zF4BRsG/fLiTGfR9QL82DrilZxrwgY/+du4p/c7J72zZj+FLYq4zY00RylP9ZjiT" crossorigin="anonymous"/>
            </head>

            <body>

                <head>Search</head>

                <main>
                    <h1 style={{textAlign: "center", marginTop:"15%" }}>Search Dates:</h1>
                    <form class="address">
                        Country <Dropdown/><br/>
                        {/* <input type="text" name="country" class="country"/> <br/> */}
                        {/* <Dropdown/> */}
                        Date <Form.Control className="meet-date" type="date" name="dob" placeholder="Date of Birth" style={{margin:"0 auto"}}/> <br/>
                        {/* <input type= "text" class= "form-control" data-provide="datepicker"></input><br/> */}
                        {/* <input type="text" name="date" id="date"/><br/> */}
                        Place <Dropdown/><br/>
                        {/* <input type="text" name="place" id="place"/> */}
                    </form>
                </main>
        
                <footer>
            
                </footer>
            </body>

        </div>
    )
}

export default Search
