import React, { useState } from 'react';

function PersonalPizza() {
  const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({ target }) => {
    const clickedTopping = target.value;

    setSelected((prev) => {
      if (prev.includes(clickedTopping)) {
        return prev.filter((t) => t !== clickedTopping);
      } else {
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map((option, i) => {
        return (
          <button onClick={toggleTopping} value={option} key={i}>
            {selected.includes(option) ? 'Remove' : 'Add'}
            {option}
          </button>
        );
      })}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}

export default PersonalPizza;
