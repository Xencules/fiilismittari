import MoodButton from "./MoodButton";
import ShowList from "./components/showList";
import Button from "./Button";
import MoodImage1 from "./images/1.png";
import MoodImage2 from "./images/2.png";
import MoodImage3 from "./images/3.png";
import MoodImage4 from "./images/4.png";
import MoodImage5 from "./images/5.png";
import { useState, useEffect } from "react";

import { db} from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {

    // Nämä ovat vain testausta varten
    const [moodList, setMoodList] = useState([]);
    const moodCollectionRef = collection(db, "Nosturikatu");
    
    useEffect(() => {

        const getMoodList = async () => {
            // read data
            // set the movie list
            try {
            const data = await getDocs(moodCollectionRef);
            
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMoodList(filteredData);
            console.log(filteredData);
            } catch (err) {
                console.error(err);
            }
        }
        getMoodList();
    }, [])
    
        

    
    // Database states
    const [mood, setMood] = useState();
    const [direction, setDirection] = useState('');
    

    function getTimeStamp() {
        const timeStamp = Date.now();
        
        return timeStamp;
    }

    function getCurrentTimeStamp() {
        const currentTime = new Date().toLocaleTimeString();
        
        return currentTime;
    }

    function getCurrentDateStamp() {
        const currentDate = new Date().toLocaleDateString();
        return currentDate;
    }
    
    const handleDirectionIn = () => {
        setDirection('In');
        console.log(direction);
    };

    const handleDirectionOut = () => {
        setDirection('Out');
        console.log(direction);
    };

    const getMood = (event) => {
      console.log(event);
      setMood(event);
    };

    const handleSubmit = async () => {
        const timestamp = getTimeStamp();
        try {
        await addDoc(moodCollectionRef, {direction, mood, timestamp})
        } catch (err) {
            console.error(err)
        }
       
    };

    

    return (
        <div className="">
            <div className="flex flex-row justify-center justify-evenly shadow-sm ">
                <div>
                    <button className="text-xl p-5 w-full bg-green-200 border-2 rounded-full border-black box-content"
                    onClick={handleDirectionIn}>SISÄÄN</button>
                </div>
                <div>
                    <button className="text-xl p-5 w-full bg-red-200 border-2 rounded-full border-black box-content"
                    onClick={handleDirectionOut}>ULOS</button>
                </div>
            </div>
            
            <div className="flex flex-row justify-center justify-evenly">
                <div>
                    <MoodButton value={1} onSubmit={getMood} image={MoodImage1}/>
                </div>
                <div>
                    <MoodButton value={2} onSubmit={getMood} image={MoodImage2}/>
                </div>
                <div>
                    <MoodButton value={3} onSubmit={getMood} image={MoodImage3}/>
                </div>
                <div>
                    <MoodButton value={4} onSubmit={getMood} image={MoodImage4}/>
                </div>
                <div>
                    <MoodButton value={5} onSubmit={getMood} image={MoodImage5}/>
                </div>
            </div>
            <div className="flex flex-row justify-center justify-evenly shadow-sm ">
                <div>
                    <button className="text-xl p-5 w-full bg-blue-200 border-2 rounded-full border-black box-content"
                    onClick={handleSubmit}>LÄHETÄ</button>
                </div>
            </div>
           <div>
                {/* {
                moodList.map((moods) => (
                    <div>
                        <h1>Mood: {moods.mood}</h1>
                        <p>Direction: {moods.direction}</p>
                        
                    </div>
                ))} */}
           </div>
          
        </div>
    );
}
export default App;