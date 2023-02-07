import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ContentCard from '../components/Card'
import HomeHeading from '../components/HomeHeading'
import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import Tracks from '../components/Tracks';
import Head from '../components/Head';

export default function Home()
{
    const { data: courses } = useLoaderData()
    return (
        <>
            <HomeHeading />
            <Tracks />
            <Container>
                <Head text="COURSES" />
                <Row xs={ 1 } md={ 2 } lg={ 4 } className="g-4 py-4">
                    <ContentCard data={ courses } />
                </ Row>
            </Container>
        </>
    )
}
export const HomeLoader = async () =>
{
    return axios.get( "http://localhost:7000/maincards" )
}