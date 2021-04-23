import styled from 'styled-components'

export const ButtonsWrapper = styled.div`
	margin-left : 60px;
`

export const Button = styled.button`
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
vertical-align: middle;
font-family: 'Noto Sans JP', sans-serif;
font-weight:500;
font-size:14px;
margin: 10px 0;	
cursor:pointer;
padding: ${props =>
		props.size === "sm" ? "6px 12px"
			: props.size === "lg" ? "11px 22px"
				: "8px 16px"};
height: ${props =>
		props.size === "sm" ? "32px"
			: props.size === "md" ? "36px"
				: props.size === "lg" ? "42px"
					: "36px"};
box-shadow: ${props =>
		(props.disabled || props.disableShadow || props.variant === "outline" || props.variant === "text") ? "none"
			: props.color === "default" ? "0px 2px 3px rgba(51, 51, 51, 0.2)"
				: props.color === "primary" ? "0px 2px 3px rgba(41, 98, 255, 0.2)"
					: props.color === "secondary" ? "0px 2px 3px rgba(69, 90, 100, 0.2)"
						: props.color === "danger" ? "0px 2px 3px rgba(211, 47, 47, 0.2)"
							: "none"};
border:${props =>
		props.variant === "outline" ? "1px solid #3D5AFE"
			: "none"};
background:${props =>
			props.color === "primary" ? "#2962FF"
			: props.color === "secondary" ? "#455A64"
				: props.color === "danger" ? "#D32F2F"
					: (props.variant === "outline" || props.variant === "text") ? "#FFF"
						: "#E0E0E0"};
color:${props =>
		props.disabled ? "#9E9E9E"
			: (props.color === "primary" || props.color === "secondary" || props.color === "danger") ? "#FFF"
				: props.variant ? "#3D5AFE"
					: "#3F3F3F"};


&:hover,&:focus {
	background:${props =>
		(props.disabled && props.variant === "text") ? "#FFF"
			: props.disabled ? "#E0E0E0"
				: (props.variant === "outline" || props.variant === "text") ? "rgba(41, 98, 255, 0.1)"
					: props.color === "primary" ? "#0039CB"
						: props.color === "secondary" ? "#1C313A"
							: props.color === "danger" ? "#9A0007"
								: props.color === "default" ? "#AEAEAE"
									: "none"};
}
`
Button.defaultProps = {
	color: 'default',
	size: 'md',
}

export const Title = styled.div`
	color : #4F4F4F;
	font-family : 'Poppins', sans-serif;
	font-weight : 500;
	font-size:24px;
	line-height:36px;
	margin-bottom:26px;
	margin-top:35px;
`

export const Text = styled.p`
	font-family: 'Ubuntu Mono', monospace;
	font-size:12px;
	font-weight:400;
	line-height:12px;
	color:#333333;
	margin:2px 0;
`
export const Row = styled.div`
	display:flex;
	
`

export const Container = styled.div`
	display : flex;
	flex-direction:column;
`

export const ButtonWrapper = styled.div`
	width:25%;
	margin-bottom:10px;
`
export const BottomText = styled.p`
	margin-top : 10px;
	font-family : Montserrat;
	font-weight : 400;
	size : 14px;
	color : #A9A9A9;
`