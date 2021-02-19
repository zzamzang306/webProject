import './Experience.css'
import small_africa from './OIP.jpg'


function Gallery() {
    return (
        <div class="gallery">
            <head>
                <script src=""></script>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div class="gallery">
                    <a href="images/africa.jpg"><img src={small_africa}/></a>
                </div>
            </body>
        </div>
    )
}

export default Gallery;