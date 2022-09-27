//Main.js

import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from '../pages/Show'

const Main = (props) => {

  const [cheese, setCheese] = useState(null)

  // const URL = "http://localhost:4000/cheese/"

  const URL = "https://cheese-titan.herokuapp.com/cheese/"

  const getCheese = async () => {
    const response = await fetch(URL)
    const data = await response.json();
    setCheese(data)
  }

  const createCheese = async (cheese) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(cheese)
    })
    // updateList of cheeses
    getCheese()
  }


  useEffect(() => {
    getCheese();
  }, []);

  return (
    <main>
      <Switch >
        <Route exact path="/">
          <Index
            cheese={cheese}
            createCheese={createCheese}
          />
        </Route>
        <Route
          path="/cheese/:id"
          render={(rp) => (
            <Show
              {...rp}
            />
          )}
        />

      </Switch>
    </main>
  )
}

export default Main