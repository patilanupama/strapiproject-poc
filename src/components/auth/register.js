import * as React from "react"
import { Link, navigate } from "gatsby"
import { borderStyle } from "../index.module.css"
import { Form, Button } from "react-bootstrap"
import Seo from "../seo"
import { AuthServices } from "../../services/auth.services"

const Register = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  })
  const [fieldErr, setFieldErr] = React.useState({
    username: { validity: false, message: "" },
    email: { validity: false, message: "" },
    password: { validity: false, message: "" },
  })

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
  const handleRegister = async e => {
    e.preventDefault()
    let response
    if (
      formData.username === "" &&
      formData.email === "" &&
      formData.password === ""
    ) {
      alert("Invalid Details")
      return false
    } else {
      if (formData.email === "" || formData.password === "") {
        alert("Invalid Details")
        return false
      }
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

      response = await AuthServices.register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })

      if (response && response.status === 200) {
        navigate("/")
      }
    }
  }
  return (
    <>
      <Seo title="Register" />
      <div>
        <Button className="btn btn-primary mb-3">
          <Link className="text-white text-decoration-none" to="/">
            Login
          </Link>
        </Button>
        <Form
          className={`col-4 mx-auto py-4 px-4 ${borderStyle} needs-validation`}
          onSubmit={handleRegister}
        >
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="mb-0">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
            {fieldErr.username.validity ? (
              <Form.Label className="mb-0">
                {fieldErr.username.message}
              </Form.Label>
            ) : null}
          </Form.Group>
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
              <Form.Label className="mb-0">{fieldErr.email.message}</Form.Label>
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
              <Form.Label className="mb-0">
                {fieldErr.password.message}
              </Form.Label>
            ) : null}
          </Form.Group>

          <Button type="submit" className="btn btn-primary">
            Register
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register
