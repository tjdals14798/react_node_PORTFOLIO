import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = ({ sInfo }) => {
    console.log(sInfo)

    const nav = useNavigate()
    return (
        <Navbar className="bg-warning bg-opacity-25 text-black" >
            <Container>
                {/* 이쁜로고 하나 박기 */}
                <Navbar.Brand onClick={() => nav('/')}>성밍읭 퐁틍퐁링옹</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Navbar.Text onClick={() => nav('/content')}>Content</Navbar.Text>
                    </Nav>
                    {/* 로그인 / 회원가입 탭 만들기 삼항연산자 쓰기*/}
                    {sInfo ? (<>
                        <Navbar.Text> {sInfo.user_name} </Navbar.Text>
                        <Navbar.Text> 로그아웃 </Navbar.Text>
                        </>)
                    :
                    (<>
                        <Navbar.Text onClick={() => nav('/join')}> 회원가입 </Navbar.Text>
                        <Navbar.Text onClick={() => nav('/login')}> 로그인 </Navbar.Text>
                    </>)
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header