import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Searchbar.css';
import { InputGroup, Button, FormControl, Card } from 'react-bootstrap';
import SearchList from '../SearchList/SearchList';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	dispatchDestination: (destination) =>
		dispatch({ type: 'UPDATE_DESTINATION', payload: destination }),
});

const Searchbar = ({ dispatchDestination, destination }) => {
	const [searchResults, setResults] = useState([]);
	//const [destination, setDestination] = useState('');
	const fetchDestinations = async () => {
		try {
			let response = await fetch('http://localhost:3001/country-details');
			console.log(response);
			if (response.ok) {
				let data = await response.json();
				console.log(data);

				const filteredData = setResults(
					data.filter((element) => element.destination_name === destination)
				);
				console.log(filteredData);
				//filteredData.map((element) => (
				// (element) => console.log(element)
				//<SearchList value={element}></SearchList>;
				//));
			} else {
				console.log('something went wrong');
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDestinations();
	});

	const searchDestinations = (e) => {
		if (e.key === 'Enter') {
			dispatchDestination(e.target.value);
		}
	};

	return (
		<>
			<section>
				{searchResults.map((result) => (
					<SearchList value={result}> </SearchList>
				))}
				<Card className="bg-dark text-white">
					<Card.Img
						src="/LandingImage.jpeg"
						className="image"
						alt="Card image"
					/>

					<Card.ImgOverlay>
						<InputGroup className="mb-3 search">
							<FormControl
								id="button-search"
								placeholder="Enter your Destination"
								aria-label="Enter your Destination"
								aria-describedby="basic-addon2"
								onKeyDown={searchDestinations}
							/>
							<Button variant="dark" id="button-search ">
								Search
							</Button>
						</InputGroup>
					</Card.ImgOverlay>
				</Card>
			</section>
		</>
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
