import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import instance from '../axios'

const Login = ({ setUser }) => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const nav = useNavigate()

    const hendleLogin = async (e) => {
        e.preventDefault()
        console.log('hendleLogin 실행')

        try {
            const res = await instance.post('/getLoginData', { id: id, pw: pw })
            console.log('res', res)

            if (res.data.result === "success") {
                setUser(res.data.name)
                let obj = { auth: 'user', user_name: res.data.name }
                sessionStorage.setItem('info', JSON.stringify(obj))
                window.alert(`${res.data.name}님 환영합니다!`)

            } else {
                window.alert('로그인에 실패 하셨습니다.')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Form className='join_form rounded-3 bg-warning bg-opacity-25 text-black'>
            <Row className="mb-5">
                <Col>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type='text' placeholder="ID" onChange={(e) => setId(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label>PW</Form.Label>
                    <Form.Control type='password' placeholder="PW" onChange={(e) => setPw(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col className='btn_col'>
                    <Button size='lg' variant='outline-dark' onClick={hendleLogin} className='login_btn mb-3'><strong>로그인</strong></Button>
                    <Button size='lg' variant='outline-dark' onClick={() => nav('/')} className='login_btn'><strong>돌아가기</strong></Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Login