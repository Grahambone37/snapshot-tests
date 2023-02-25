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
        <Card style={{ width: '13em' }}>
            <Card.Img variant='top' src={gitImage} />
            <Card.Body>
                <Card.Title>{gitUsername}</Card.Title>
                <Card.Text>{gitBio}</Card.Text>
            </Card.Body>
        </Card>
    )
}


