import React from 'react'
import './main.css'
/////// import images  ///////////////
import img from "../../Assets/img.jpg"
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import img10 from "../../Assets/img10.jpg"
import img11 from "../../Assets/img11.jpg"
import img12 from "../../Assets/img12.jpg"
import img13 from "../../Assets/img13.jpg"
import img14 from "../../Assets/img14.jpg"
import img15 from "../../Assets/img15.jpg"
import img16 from "../../Assets/img16.jpg"
import img17 from "../../Assets/img17.jpg"
import img18 from "../../Assets/img18.jpg"
import img19 from "../../Assets/img19.jpg"
//import icons
import { CiLocationOn } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";



const Main = () => {
  const Data = 
  [
    {
        "id": 1,
        "imgsrc": img,
        "desTitle": "Title_1",
        "location": "Vietnam",
        "grade": "Island Oasis - Raspberry",
        "prices": 2.99,
        "description": "Vietnam is a country located in Southeast Asia, known for its rich culture, diverse landscapes, and tumultuous history. The country is home to over 95 million people and is divided into 58 provinces. The capital of Vietnam is Hanoi, located in the northern part of the country"
    },
    {
        "id": 2,
        "imgsrc": img1,
        "desTitle": "Honorable",
        "location": "Vietnam",
        "grade": "Shrimp - Black Tiger 13/15",
        "prices": 2.66,
        "description": "Vietnam is a country located in Southeast Asia, known for its rich culture, diverse landscapes, and tumultuous history. The country is home to over 95 million people and is divided into 58 provinces. The capital of Vietnam is Hanoi, located in the northern part of the country"
    },
    {
        "id": 3,
        "imgsrc": img2,
        "desTitle": "Dr",
        "location": "Vietnam",
        "grade": "Juice - Clamato, 341 Ml",
        "prices": 6.73,
        "description": "Vietnam is a country located in Southeast Asia, known for its rich culture, diverse landscapes, and tumultuous history. The country is home to over 95 million people and is divided into 58 provinces. The capital of Vietnam is Hanoi, located in the northern part of the country"
    },
    {
        "id": 4,
        "imgsrc": img3,
        "desTitle": "Dr",
        "location": "Vietnam",
        "grade": "Mushroom Morel Fresh",
        "prices": 3.2,
        "description": "Vietnam is a country located in Southeast Asia, known for its rich culture, diverse landscapes, and tumultuous history. The country is home to over 95 million people and is divided into 58 provinces. The capital of Vietnam is Hanoi, located in the northern part of the country"
    },
    {
        "id": 5,
        "imgsrc": img4,
        "desTitle": "Dr",
        "location": "Vietnam",
        "grade": "Plasticspoonblack",
        "prices": 4.98,
        "description": "Replace of R Finger Phalanx with Synth Sub, Open Approach"
    },
    {
        "id": 6,
        "imgsrc": img5,
        "desTitle": "Ms",
        "location": "Vietnam",
        "grade": "Clams - Bay",
        "prices": 6.1,
        "description": "Revision of Autol Sub in L Hip Jt, Perc Endo Approach"
    },
    {
        "id": 7,
        "imgsrc": img6,
        "desTitle": "Honorable",
        "location": "Vietnam",
        "grade": "Salt - Sea",
        "prices": 5.12,
        "description": "Irrigation of Peritoneal Cavity using Irrigat, Perc Approach"
    },
    {
        "id": 8,
        "imgsrc": img7,
        "desTitle": "Dr",
        "location": "South Korea",
        "grade": "Energy Drink Red Bull",
        "prices": 4.48,
        "description": "Repair Left Foot Tendon, Open Approach"
    },
    {
        "id": 9,
        "imgsrc": img8,
        "desTitle": "Honorable",
        "location": "Vietnam",
        "grade": "Steamers White",
        "prices": 3.07,
        "description": "Excision of Chest Wall, External Approach, Diagnostic"
    },
    {
        "id": 10,
        "imgsrc": img9,
        "desTitle": "Mr",
        "location": "South Korea",
        "grade": "Nut - Walnut, Chopped",
        "prices": 5.71,
        "description": "Drainage of Bilateral Ureters, Endo"
    },
    {
        "id": 11,
        "imgsrc": img10,
        "desTitle": "Honorable",
        "location": "Vietnam",
        "grade": "Brocolinni - Gaylan, Chinese",
        "prices": 5.02,
        "description": "Supplement L Brach Vein with Nonaut Sub, Perc Endo Approach"
    },
    {
        "id": 12,
        "imgsrc": img11,
        "desTitle": "Honorable",
        "location": "Vietnam",
        "grade": "Country Roll",
        "prices": 5.28,
        "description": "Introduction of Analg/Hypnot/Sedat into Eye, Via Opening"
    },
    {
        "id": 13,
        "imgsrc": img12,
        "desTitle": "Rev",
        "location": "Vietnam",
        "grade": "Cut Wakame - Hanawakaba",
        "prices": 6.31,
        "description": "Bypass R Com Iliac Art to B Renal A w Autol Vn, Perc Endo"
    },
    {
        "id": 14,
        "imgsrc": img13,
        "desTitle": "Ms",
        "location": "South Korea",
        "grade": "Piping - Bags Quizna",
        "prices": 8.9,
        "description": "Reattachment of Upper Tooth, All, External Approach"
    },
    {
        "id": 15,
        "imgsrc": img14,
        "desTitle": "Ms",
        "location": "South Korea",
        "grade": "Stock - Veal, White",
        "prices": 8.32,
        "description": "Excision of Nasopharynx, Percutaneous Approach"
    },
    {
        "id": 16,
        "imgsrc": img15,
        "desTitle": "Mr",
        "location": "Vietnam",
        "grade": "Eel - Smoked",
        "prices": 2.41,
        "description": "MRI of L Calcaneus using Oth Contrast, Unenh, Enhance"
    },
    {
        "id": 17,
        "imgsrc": img16,
        "desTitle": "Rev",
        "location": "Vietnam",
        "grade": "Napkin White",
        "prices": 9.32,
        "description": "Bypass 2 Cor Art from Cor V w Intralum Dev, Perc Endo"
    },
    {
        "id": 18,
        "imgsrc": img17,
        "desTitle": "Mrs",
        "location": "South Korea",
        "grade": "Cheese - Pied De Vents",
        "prices": 0.53,
        "description": "Extirpation of Matter from Vulva, External Approach"
    },
    {
        "id": 19,
        "imgsrc": img18,
        "desTitle": "Mr",
        "location": "South Korea",
        "grade": "Tobasco Sauce",
        "prices": 3.8,
        "description": "Release Left Thyroid Artery, Percutaneous Approach"
    },
    {
        "id": 20,
        "imgsrc": img19,
        "desTitle": "Ms",
        "location": "South Korea",
        "grade": "Turkey - Ground. Lean",
        "prices": 0.97,
        "description": "Revision of Nonaut Sub in R Scapula, Extern Approach"
    }
   
];
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="setContent grid">
        {
          Data.map(({id,imgsrc,desTitle,location,grade,prices,description})=>{
            return(
              <div key ={id} className ="singleDestination">
                  <div className="imageDiv">
                    <img src={imgsrc} alt={desTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="desTitle">
                      {desTitle}
                    </h4>
                    <span className="continent flex">
                      <CiLocationOn className = 'icon' />
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{prices}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS
                      <BsClipboardCheck className = "icon"/>
                    </button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main