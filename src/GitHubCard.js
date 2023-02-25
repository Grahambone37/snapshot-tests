import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

export default function GitHubCard() {
    const [gitUsername, setGitUsername] = useState('username')
    const [gitImage, setGitImage] = useState('Git Image')
    const [gitBio, setGitBio] = useState('Git Bio')

    useEffect(() => {
        fetch('https://api.github.com/users/Grahambone37')
            .then(res => res.json())
            .then(data => {
                setGitUsername(data.name)
                setGitImage(data.avatar_url)
                setGitBio(data.bio)
            })
    }, [])

    return (
        <Card>
            <Card.Img src={gitImage} style={{
                height: '50px',
                width: '50px',
                marginLeft: '48%'
            }} />
            <h1>{gitUsername}</h1>
            <h2>{gitBio}</h2>
        </Card>
    )
}


