
function ShowList ({ moodInDB }) {
    
        return (
                <div key={moodInDB.key}>
                    <p>Date: {moodInDB.mood.timestamp} </p>
                    <p>Direction: {moodInDB.direction} </p>
                    <p>Mood: {moodInDB.mood}</p>
                </div>
        )
    ;
};

export default ShowList;