import React from 'react'
import StyledButton from './StyledButton'
import { ButtonsWrapper, Title, Container, Text, Row, ButtonWrapper,BottomText } from './Buttons.elements'

const Buttons = () => {
	return (
		<ButtonsWrapper>
			<Title>Buttons</Title>
			<Container>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button /&gt;</Text>
						<StyledButton>Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button variant=”outline” /&gt;</Text>
						<StyledButton variant="outline">Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button variant=”text” /&gt;</Text>
						<StyledButton variant="text">Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button disableShadow /&gt;</Text>
						<StyledButton color="primary" disableShadow>Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button disabled /&gt;</Text>
						<StyledButton disabled>Default</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button variant=”text” disabled /&gt;</Text>
						<StyledButton variant="text" disabled>Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button startIcon=”local_grocery_store” /&gt;</Text>
						<StyledButton startIcon="local_grocery_store" color="primary">Default</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button endIcon=”local_grocery_store” /&gt;</Text>
						<StyledButton endIcon="local_grocery_store" color="primary">Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button size=”sm” /&gt;</Text>
						<StyledButton color="primary" size="sm">Default</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button size=”md” /&gt;</Text>
						<StyledButton color="primary" size="md">Default</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button size=”lg” /&gt;</Text>
						<StyledButton color="primary" size="lg">Default</StyledButton>
					</ButtonWrapper>
				</Row>
				<Row>
					<ButtonWrapper>
						<Text>&lt;Button color=”default” /&gt;</Text>
						<StyledButton color="default">Default</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button color=”primary” /&gt;</Text>
						<StyledButton color="primary">Primary</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button color=”secondary” /&gt;</Text>
						<StyledButton color="secondary">Secodary</StyledButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<Text>&lt;Button color=”danger” /&gt;</Text>
						<StyledButton color="danger">Danger</StyledButton>
					</ButtonWrapper>
				</Row>
				<BottomText>created by akshitakanojia - devChallenges.io</BottomText>
			</Container>
		</ButtonsWrapper>
	)
}

export default Buttons
