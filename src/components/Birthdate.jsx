import React, { useState } from "react";
import data from "../data/birthdate";
import BirthDateList from "./BirthDateList";

const Birthdate = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <BirthDateList people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
};

export default Birthdate;
