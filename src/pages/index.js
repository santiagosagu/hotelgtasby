import React from "react"
import Layout from "../components/Layout"
import ImagenHotel from '../components/ImagenHotel'
import ContenidoInicio from "../components/ContenidoInicio"
import useHabitaciones from '../hooks/use-habitaciones'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import HabitacionPreview from "../components/HabitacionPreview"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones); 

  return (
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview 
            habitacion={habitacion}
            key={habitacion.id}
          />
        ))}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
