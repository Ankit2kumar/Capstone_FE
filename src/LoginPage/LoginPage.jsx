import React from 'react';
import './LoginPage.css';
import { Container, Row, Button } from 'react-bootstrap';

const LoginPage = () => {
	return (
		<>
			<section>
				<Container className="loginPage">
					<Row>
						<div className="container">
							<div className="main">
								<div className="inner-box">
									<div className="card-front">
										<h2>Sign In</h2>
										{/* <h5 className="">
											Hello There! Sign In and start managing your Travel
										</h5> */}

										<label>Login</label>
										<input
											className=" input_box"
											type="text"
											id="log"
											placeholder="Enter your Email"
										/>

										<label>Password</label>
										<input
											className="input_box"
											type="password"
											id="pass"
											placeholder="Enter your Password"
											name="Password"
										/>

										<Button className="btn_signIn" variant="warning">
											Sign In
										</Button>
										<input type="checkbox" />
										<span> Remember Me </span>

										<Button
											className="btn_new"
											variant="info"
											onClick="openRegister()"
										>
											I'm New Here
										</Button>
										<h6>
											<a href="https://www.forgetpassword.com/">
												{' '}
												Forgot Password?<strong>RESET</strong>
											</a>
										</h6>
									</div>
									{/* <div className="card-back">
										<h2>Register</h2>
										<label>Your Name</label>
										<input
											className=" input_box"
											type="text"
											id="log"
											placeholder="Enter your Name"
										/>
										<label>Email</label>
										<input
											className=" input_box"
											type="text"
											id="log"
											placeholder="Enter your Email"
										/>
										<label>Password</label>
										<input
											className=" input_box"
											type="password"
											id="log"
											placeholder="Enter your Password"
										/>
										<Button
											className="btn_new"
											variant="info"
											onClick="openLogin()"
										>
											I've an account
										</Button>
										<h6>
											<a href="forgetpassword.com">
												Forgot Password?<strong>RESET</strong>
											</a>
										</h6>
									</div> */}
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default LoginPage;
