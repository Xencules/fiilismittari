
function MoodButton({ onSubmit, image, value }) {

    const handleMoodClick = () => {
        onSubmit(value);
    };

    return (
    <div className="">
        <button onClick={handleMoodClick}>
            <img className="" src={image} alt="" />
        </button>
    </div>
    );
}

export default MoodButton;