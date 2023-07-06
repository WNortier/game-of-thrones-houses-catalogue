import { useState, useEffect } from 'react'
import NavigationBar from './components/navigation/NavigationBar'
import Container from 'react-bootstrap/Container';
import BasicForm from './components/forms/Form';
import axios from 'axios'
import Splash from './components/splash';
import { HashRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';


function App() {
  const [count, setCount] = useState(0)
  const [bg, setBg] = useState("/src/assets/mainbg01.jpeg")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [videoComplete, setVideoComplete] = useState(false)
  const [init, setInit] = useState(false)

  const getHouses = async () => {
    const response = await axios.get('https://anapioficeandfire.com/api/houses')
    console.log(response.data)
  }

  useEffect(() => {
    // document.getElementById('video').style.zIndex = "-10";
    if (!init) {

      document.getElementById('video').classList.add('invis')
      document.querySelector('#basic-form')?.classList.add('invis')
      document.querySelector('.navigation-bar')?.classList.add('invis')
      document.getElementById('splash-layer')?.classList.add('begin');

    }
    setInterval(() => {
      switch (bg) {
        case "/src/assets/mainbg01.jpeg": {
          setBg("/src/assets/mainbg01.jpeg")
          break
        }
        case "/src/assets/mainbg01.jpeg": {
          setBg("/src/assets/mainbg01.jpeg")
          break
        }
      }
    }, 1_000_00)

    // getHouses()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/splash',
      element: <Splash setIsLoggedIn={setIsLoggedIn} />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Splash /> },
        {
          path: 'login',
          element: <BasicForm></BasicForm>,
          children: [
            //   {
            //     index: true,
            //     element: <EventsPage />,
            //     loader: eventsLoader,
            //   },
            //   {
            //     path: ':eventId',
            //     id: 'event-detail',
            //     loader: eventDetailLoader,
            //     children: [
            //       {
            //         index: true,
            //         element: <EventDetailPage />,
            //         action: deleteEventAction,
            //       },
            //       {
            //         path: 'edit',
            //         element: <EditEventPage />,
            //         action: manipulateEventAction,
            //       },
            //     ],
            //   },
            {
              path: 'splash',
              element: <Splash />,
              action: 'click',
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <BasicForm init={init} setVideoComplete={setVideoComplete} videoComplete={videoComplete} />,
      // action: newsletterAction,
    }
  ], { basename: import.meta.env.DEV ? '/' : '/game-of-thrones-houses-catalogue/' })

  return (


    <Container id="main-container" style={{ backgroundImage: `url(${bg})` }} fluid>

      {/* <div id='splash-layer'>
      </div> */}

      {isLoggedIn && <NavigationBar />}

      <RouterProvider router={router} />

    </Container>
  )
}

export default App
