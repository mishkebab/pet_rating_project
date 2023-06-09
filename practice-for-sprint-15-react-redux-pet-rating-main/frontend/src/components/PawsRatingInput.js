import {useEffect, useState} from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [fuckingRating, setFuckingRating] = useState(rating);

  useEffect(() => {
    setFuckingRating(rating) 
  }, [rating])

  return (
    <>
      <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
      />
      <div className="rating-input">
        <div className={fuckingRating >= 1 ? "filled" : "empty"} 
        onMouseEnter={() => !disabled ? setFuckingRating(1) : null} 
        onMouseLeave={() => setFuckingRating(rating)}
        onClick={() => onChange(1)}
        >
          <i className="fa fa-paw" ></i>
        </div>
        <div className={fuckingRating >= 2 ? "filled" : "empty"} 
        onMouseEnter={() => !disabled ? setFuckingRating(2) : null} 
        onMouseLeave={() => setFuckingRating(rating)}
        onClick={() => onChange(2)}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={fuckingRating >= 3 ? "filled" : "empty"} 
        onMouseEnter={() => !disabled ? setFuckingRating(3) : null} 
        onMouseLeave={() => setFuckingRating(rating)}
        onClick={() => onChange(3)}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={fuckingRating >= 4 ? "filled" : "empty"} 
        onMouseEnter={() => !disabled ? setFuckingRating(4) : null} 
        onMouseLeave={() => setFuckingRating(rating)}
        onClick={() => onChange(4)}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={fuckingRating >= 5 ? "filled" : "empty"} 
        onMouseEnter={() => !disabled ? setFuckingRating(5) : null} 
        onMouseLeave={() => setFuckingRating(rating)}
        onClick={() => onChange(5)}
        >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;