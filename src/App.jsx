import { useState } from "react";
import "./App.css";

// src/App.jsx

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (event, fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters((prevZombieFighters) =>
        prevZombieFighters.filter((f) => f.id !== fighter.id)
      );
      setMoney((prevMoney) => prevMoney - fighter.price);
    } else {
      console.log("Not enough money");
    }
  };


  const handleRemoveFighter = (fighter) => {
    setTeam((prevTeam) => prevTeam.filter((f) => f.id !== fighter.id));
    setZombieFighters((prevZombieFighters) => [...prevZombieFighters, fighter]);
    setMoney((prevMoney) => prevMoney + fighter.price);
  };

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <div>
      <h1>Zombies World!</h1>
      <h2>Money: ${money} </h2>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id}>
           <p>Name:{zombieFighter.name}</p>
            <p> Strength: {zombieFighter.strength} </p>
            <p>Agility: {zombieFighter.agility}</p>
            <p>Price: ${zombieFighter.price}</p>
            <button onClick={(event) => handleAddFighter(event, zombieFighter)}> {" "}  Add{" "} </button>
          </li>
        ))}
      </ul>
      {}

      <h2> Your team </h2>
  
        {team.length === 0 ? <p>Pick team members!</p> : null} 
        <ul>
        {team.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <p>Name:{zombieFighter.name}</p>
            <p> Strength: {zombieFighter.strength} </p>
            <p>Agility: {zombieFighter.agility}</p>
            <p>Price: ${zombieFighter.price}</p>
            <button onClick={(event) => handleRemoveFighter(event, zombieFighter)}>{" "}  Remove{" "} </button>
          </li>
        ))}
        </ul>
        {}
        <h2>Total Strength: {totalStrength}</h2>
      <h2>Total Agility: {totalAgility}</h2>
    </div>
  );
};

export default App;
