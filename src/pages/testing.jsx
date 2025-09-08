import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import api from '../api';

export default function Testing () {
    async function test1(){
        const response = await api.get('/user');
        console.log(response.data);
    }
    return (
        <>
        <Button variant="test" onClick={test1}>Click me!</Button>
        </>
    )
}