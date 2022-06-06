import * as React from "react"
import { Form, Button } from "react-bootstrap"
import { Link ,navigate} from "gatsby"
import { borderStyle } from "../index.module.css"
import { AuthServices } from "../../services/auth.services"

const Login = () => {


  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })
  const [fieldErr, setFieldErr] = React.useState({
    email: { validity: false, message: "" },
    password: { validity: false, message: "" },
  })

  React.useEffect(()=>{
    if(AuthServices.isLoggedIn()!==""){
      navigate(`/app/dashboard`)
    }
  },[])
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleBlur = e => {
    if (e.target.value === "") {
      setFieldErr({
        ...fieldErr,
        [e.target.name]: {
          validity: true,
          message: `${e.target.name} is required`,
        },
      })
    }
  }
  const handleFocus = e => {
    setFieldErr({
      ...fieldErr,
      [e.target.name]: {
        validity: false,
        message: "",
      },
    })
  }
  const handleLogin = async e => {
    let response = {}
    e.preventDefault()
    if (formData.email === "" && formData.password === "") {
      alert("Invalid Details")
      return false
    }
    if (formData.email === "" || formData.password === "") {
      setFieldErr({
        email: { validity: true, message: "Email Id is required" },
        password: { validity: true, message: "Password is required" },
      })
      return false
    } else {
      if (formData.email.trim() !== "") {
        const emailPattern = new RegExp(
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
        )
        if (emailPattern.test(formData.email) === false) {
          setFieldErr({
            ...fieldErr,
            email: { validity: true, message: "Please enter valid email id" },
          })
          return false
        }
      }

      setFieldErr({
        username: { validity: false, message: "" },
        email: { validity: false, message: "" },
        password: { validity: false, message: "" },
      })
      response = await AuthServices.loginUser({
        identifier: formData.email,
        password: formData.password,
      })
    }
    if (response && response.status === 200) {
      AuthServices.setUser(response.body.user.username)
      navigate("/app/dashboard")
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <Form
        className={`col-4 mx-auto py-4 px-4 ${borderStyle} needs-validation`}
        onSubmit={handleLogin}
      >
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="mb-0">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {fieldErr.email.validity ? (
            <Form.Label>{fieldErr.email.message}</Form.Label>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-0">Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {fieldErr.password.validity ? (
            <Form.Label>{fieldErr.password.message}</Form.Label>
          ) : null}
        </Form.Group>
        <div className="row justify-content-around">
        <Button type="submit" className="btn btn-primary col-sm-4">
          Login
        </Button>
        <Button className="btn btn-primary col-sm-4">
        <Link className="text-white text-decoration-none" to="/app/register">
          Register
        </Link>
      </Button>
      </div>
      </Form>
      </div>
    </>
  )
}

export default Login
