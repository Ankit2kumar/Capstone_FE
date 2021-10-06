import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { GiLovers } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io';
import './SearchList.css';
import {
	Row,
	Container,
	Button,
	Col,
	Carousel,
	Card,
	Badge,
} from 'react-bootstrap';
import { FaRegGrinHearts } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { BiGame, BiDish, BiHotel } from 'react-icons/bi';
import Title from './Title/Title';
import { MdPlace } from 'react-icons/md';
import NavigatorButton from './NavigatorButton/NavigatorButton';
import HeroBanner from './HeroBanner/HeroBanner';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({});

const SearchList = (props) => {
	return (
		<section id="page">
			<Container>
				<Row>
					<Title country={props.value.destination_name} />
				</Row>
				<Row>
					<Col>
						<NavigatorButton
							text={'About ' + props.value.destination_name}
							icon={<FaInfo />}
						/>
					</Col>
					{/* <NavigatorButton /> */}
					<Col>
						<NavigatorButton text={'Destinations'} icon={<MdPlace />} />
					</Col>
					<Col>
						<NavigatorButton text={'Stay'} icon={<BiHotel />} />
					</Col>
					<Col>
						<NavigatorButton text={'Eat'} icon={<BiDish />} />
					</Col>
					<Col>
						<NavigatorButton text={'Do'} icon={<BiGame />} />
					</Col>
					<Col>
						<NavigatorButton text={'Romance'} icon={<GiLovers />} />
					</Col>
				</Row>
				<Row className="my-3">
					<Carousel fade>
						<HeroBanner
							hero_img={
								'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2f/2b/ae/lake-pichola-udaipur.jpg?w=900&h=700&s=1'
							}
							hero_title={'Lake Pichola'}
							hero_desc={'Udaipur'}
						></HeroBanner>
						<HeroBanner
							hero_img={
								'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d9/09/0b/udaipurrajasthan.jpg?w=700&h=500&s=1'
							}
							hero_title={'Udaipur'}
							hero_desc={'Rajasthan'}
						></HeroBanner>
						<HeroBanner
							hero_img={
								'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7a/f9/f9/india-delhi-agra-jaipur.jpg?w=500&h=400&s=1'
							}
							hero_title={'Delhi'}
							hero_desc={'India'}
						></HeroBanner>
					</Carousel>
				</Row>
				<Row>
					<div id="abt-font">About {props.value.destination_name}</div>
				</Row>
				<Row className="my-3 p-3">
					<Col xxl={8} xl={8} lg={6} md={6} sm={12}>
						<div className="cntry-desc">{props.value.description}</div>
					</Col>
					<Col xxl={4} xl={4} lg={6} md={6}></Col>
				</Row>
				<Row>
					<h2 id="abt-font">Destinations</h2>
				</Row>
				<Row className="my-3 dest-row">
					<Col md={3} lg={3}>
						<Card className="bg-dark text-white dest-card">
							<Card.Img
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/8b/19/39/morning-sunlight-in-manali.jpg?w=600&h=600&s=1100px270"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								{/* <Card.Footer>Ooty, India</Card.Footer> */}
								<div className="dest-name">Manali, India</div>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col md={3} lg={3}>
						<Card className="bg-dark text-white dest-card">
							<Card.Img
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ab/40/f8/very-beautiful-hill-station.jpg?w=600&h=600&s=1100px270"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<div className="dest-name">Mahabaleshwar, India</div>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col md={3} lg={3}>
						<Card className="bg-dark text-white dest-card">
							<Card.Img
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/84/3c/bc/upper-bhavani-lake.jpg?w=600&h=600&s=1100px270"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<div className="dest-name">Ooty, India</div>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col md={3} lg={3}>
						<Card className="bg-dark text-white dest-card">
							<Card.Img
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=600&h=600&s=1100px270"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<div className="dest-name">Bengaluru, India</div>
							</Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
				<Row className="my-3">
					<h2 id="abt-font">Stay</h2>
				</Row>
				<Row>
					<Col lg={3} md={3} sm={6} xs={12}></Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							{/* <FaRegHeart /> */}
							{/* <div className="heart"></div> */}
							{/* <Badge variant="light">
								<FaRegGrinHearts />
							</Badge> */}
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/ce/b0/guest-room.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>The Oberoi, New Delhi</h4>
							<h6>New Delhi, India</h6>
							<h5>from €220/night</h5>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/38/d4/7e/the-himalayan.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>The Himalayans</h4>
							<h6>Manali, India</h6>
							<h5>from €103/night</h5>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/ce/b5/exterior.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>The Oberoi Rajvilas</h4>
							<h6>Jaipur, India</h6>
							<h5>from €665/night</h5>
						</div>
					</Col>
				</Row>
				<Row className="my-3">
					<h2 id="abt-font">Eat</h2>
				</Row>
				<Row>
					<Col lg={3} md={3} sm={6} xs={12}></Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							{/* <FaRegHeart /> */}
							{/* <div className="heart"></div> */}
							{/* <Badge variant="light">
								<FaRegGrinHearts />
							</Badge> */}
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dc/0e/49/k-k-interior.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Kebabs & Kurries</h4>
							<h6 className="text-muted">
								$$$$ •India, Vegetarian Friendly, Vegan Options
							</h6>
							<h6 className="text-muted">Bengaluru, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/fa/8f/63/baluchi.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Baluchi</h4>
							<h6 className="text-muted">$$$ •Indian, Fusion, Soups</h6>
							<h6 className="text-muted">Jaipur, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/f4/34/mayra-decorating.jpg?w=800&h=-1&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Myra</h4>
							<h6 className="text-muted">$$$$ •Italian, Chinese, Indian</h6>
							<h6 className="text-muted">Udaipur, India</h6>
						</div>
					</Col>
				</Row>
				<Row className="my-3">
					<h2 id="abt-font">Do</h2>
				</Row>
				<Row>
					<Col lg={3} md={3} sm={6} xs={12}></Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							{/* <FaRegHeart /> */}
							{/* <div className="heart"></div> */}
							{/* <Badge variant="light">
								<FaRegGrinHearts />
							</Badge> */}
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/a3/6d/recoil-india-s-first.jpg?w=800&h=-1&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Wonderla Amusement Park</h4>
							<h6 className="text-muted">Amusement and Theme Parks</h6>
							<h6 className="text-muted">Bengaluru, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/b5/57/jantar-mantar-jaipur.jpg?w=800&h=-1&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Jantar Mantar</h4>
							<h6 className="text-muted">Observatories and Planetariums</h6>
							<h6 className="text-muted">Jaipur, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/37/fd/c6/st-alex-church.jpg?w=800&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>St. Alex Church</h4>
							<h6 className="text-muted">Churches and Cathedrals</h6>
							<h6 className="text-muted">Calangute, India</h6>
						</div>
					</Col>
				</Row>
				<Row className="my-3">
					<h2 id="abt-font">Romance</h2>
				</Row>
				<Row>
					<Col lg={3} md={3} sm={6} xs={12}>
						<h5>Discover India with the lense of love.</h5>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							{/* <FaRegHeart /> */}
							{/* <div className="heart"></div> */}
							{/* <Badge variant="light">
								<FaRegGrinHearts />
							</Badge> */}
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/07/95/7d/welcomhotel-the-savoy.jpg?w=600&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Welcomhotel, The Savoy</h4>

							<h6 className="text-muted">Musoorie, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/d0/76/other.jpg?w=600&h=600&s=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Taj Lake Palace</h4>

							<h6 className="text-muted">Udaipur, India</h6>
						</div>
					</Col>
					<Col lg={3} md={3} sm={6} xs={12}>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								style={{ height: '19.5rem' }}
								variant="top"
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.protraveloholic.com%2Fwp-content%2Fuploads%2F2019%2F05%2Ffeatured.jpg&f=1&nofb=1/"
							/>
						</Card>
						<div className="dest-address">
							<h4>Andaman Resort</h4>

							<h6 className="text-muted">Andaman, India</h6>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
		// <Container>
		// 	<Row>
		// 		<Card style={{ width: '18rem' }}>
		// 			<Card.Img variant="top" src={props.value.destination_img} />
		// 			<Card.Body>
		// 				<Card.Title>{props.value.description}</Card.Title>
		// 				<Card.Text>{props.value.destination_place}</Card.Text>
		// 				<Button variant="primary">Know More</Button>
		// 			</Card.Body>
		// 		</Card>
		// 	</Row>
		// </Container>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
