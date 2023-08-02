import Icon from "@expo/vector-icons/Feather";
import { Container, Content, ErrorText, Label, Input as TextInput } from "./styles";
import { useTheme } from "styled-components/native";
import { useState } from "react";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  iconName?: React.ComponentProps<typeof Icon>["name"];
  label?: string;
  value?: string;
  error?: string;
}

export function Input({
	iconName,
	label,
	value,
	error,
	...rest
}: Props) {
	const theme = useTheme();

	const [isFilled, setIsFilled] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	function handleFocused() {
		setIsFocused(true);
	}

	function handleBlur() {
		setIsFocused(false);

		value ? setIsFilled(true) : setIsFilled(false);
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
          		isFocused || isFilled && !error ? theme.colors.gray_100
          			:	error ? theme.colors.red_500 : theme.colors.gray_100
          	}
          />
				}

				<TextInput
					isError={!!error}
					onFocus={handleFocused}
					onBlur={handleBlur}
					value={value}
					{...rest}
		    />
			</Content>
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	);
}
