import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import Icon from "@expo/vector-icons/Feather";
import { Container, Content, ErrorText, Label, Input as TextInput } from "./styles";

type Props = TextInputProps & {
  iconName?: React.ComponentProps<typeof Icon>["name"];
  label?: string;
  value?: string;
  error?: string;
  isPassword?: boolean;
}

export function InputPassword({
	iconName,
	label,
	value,
	error,
	isPassword = false,
	...rest
}: Props) {
	const theme = useTheme();

	const [isFilled, setIsFilled] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	function handleFocused() {
		setIsFocused(true);
	}

	function handleBlur() {
		setIsFocused(false);

		if(value) {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	}

	function handlePasswordVisibility() {
		setPasswordIsVisible(!passwordIsVisible);
	}

	return (
		<Container>
			{label && <Label>{label}</Label>}
			<Content isError={!!error}>
				{iconName &&
          <Icon
          	name={iconName}
          	size={20}
          	color={
          		isFocused || isFilled && !error ? theme.colors.gray_100 :
          			error ? theme.colors.red_500 : theme.colors.gray_100
          	}
          />
				}

				<TextInput
					isError={!!error}
					onFocus={handleFocused}
					onBlur={handleBlur}
					value={value}
					secureTextEntry={!passwordIsVisible}
					{...rest}
		    />

				{isPassword &&
          <Icon
          	name={passwordIsVisible ? "eye-off" : "eye" }
          	size={20}
          	color={
          		isFocused || isFilled && !error ? theme.colors.gray_100 :
          			error ? theme.colors.red_500 : theme.colors.gray_100
          	}
          	onPress={handlePasswordVisibility}
          />
				}
			</Content>
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	);
}
