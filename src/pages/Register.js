import Card from '@material-tailwind/react/Card'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardBody from '@material-tailwind/react/CardBody'
import CardFooter from '@material-tailwind/react/CardFooter'
import H5 from '@material-tailwind/react/Heading5'
import Button from '@material-ui/core/Button'
import DefaultNavbar from 'components/DefaultNavbar'
import SimpleFooter from 'components/SimpleFooter'
import Page from 'components/login/Page'
import Container from 'components/login/Container'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    name: yup.string('Enter your name').required('Name is required'),
})

const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
            name: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <div>
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.email &&
                                            Boolean(formik.errors.email)
                                        }
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.password &&
                                            Boolean(formik.errors.password)
                                        }
                                        helperText={
                                            formik.touched.password &&
                                            formik.errors.password
                                        }
                                    />
                                    <CardFooter>
                                        <div className="flex justify-center bg-gray-700">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                fullWidth
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </form>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    )
}

export default WithMaterialUI
