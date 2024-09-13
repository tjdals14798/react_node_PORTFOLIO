import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const Join = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [name, setName] = useState('')

    const nav = useNavigate()

    const handleJoin = async (e) => {
        e.preventDefault()
        console.log('handleJoin 실행')

        try {
            const res = await instance.post('/getJoinData', { id: id, pw: pw, name: name })
            if (res.data.result) {
                setId('')
                setPw('')
                setName('')
                window.alert(`${res.data.name}님의 가입을 축하합니다!`)
                nav('/')
            } else {
                window.alert(`가입에 실패하셨습니다...`)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Form className='join_form rounded-3 bg-warning bg-opacity-25 text-black'>
            <Row className="mb-3">
                <Col>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type='text' placeholder="ID" onChange={(e) => setId(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label>PW</Form.Label>
                    <Form.Control type='password' placeholder="PW" onChange={(e) => setPw(e.target.value)} />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <Form.Label>USER_NAME</Form.Label>
                    <Form.Control type='text' placeholder="USER_NAME" onChange={(e) => setName(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col className='btn_col'>
                    <Button size='lg' variant='outline-dark' onClick={handleJoin} className='join_btn mb-3'><strong>회원가입</strong></Button>
                    <Button size='lg' variant='outline-dark' onClick={() => nav('/')} className='join_btn'><strong>돌아가기</strong></Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Join